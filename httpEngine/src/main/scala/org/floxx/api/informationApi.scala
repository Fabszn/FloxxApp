package org.floxx.api

import org.floxx.domain.Information
import org.floxx.domain.Information.{Content, Title}
import org.floxx.domain.jwt.UserInfo
import org.floxx.service.informationService
import org.http4s.AuthedRoutes
import org.floxx.utils.json.CirceValueClassCustomAuto._
import org.http4s.circe.CirceEntityCodec.circeEntityEncoder
import org.http4s.circe.jsonOf
import org.http4s.dsl.Http4sDsl
import zio._
import zio.interop.catz._

object informationApi {

  case class InformationRequest(title: Title, content: Content)

  object InformationRequest {
    implicit val format = jsonOf[ApiTask, InformationRequest]
  }

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case _ @GET -> Root / "informations" as _ =>
      for {
        informations <- informationService.allInformation
        r <- Ok(informations.toList)
      } yield r
    case ct @ POST -> Root / "informations" as _ =>
      for {
        ir <- ct.req.as[InformationRequest]
        _ <- informationService.addInformation(ir.title, ir.content)
        informations <- informationService.allInformation
        r <- Created(informations)
      } yield r
    case _ @GET -> Root / "informations" / "_unread" as user =>
      for {
        informationIds <- informationService.unreadByUserId(user.userId)
        r <- Ok(informationIds)
      } yield r
    case _ @PATCH -> Root / "informations" / "_markAsRead" / LongVar(infoId) as user =>
      for {
        unreads <- informationService.markAsRead(user.userId, Information.Id(infoId))
        r <- Ok(unreads)
      } yield r
    case _ @PATCH -> Root / "informations" / "_archive" / LongVar(infoId) as _ =>
      for {
        _ <- informationService.archiveInfo(Information.Id(infoId))
        informations <- informationService.allInformation
        r <- Ok(informations)
      } yield r

  }
}
