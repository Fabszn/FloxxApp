package org.floxx.env.api

import cats.data.OptionT
import org.floxx.UserInfo
import org.floxx.domain.Information.{ Content, Title }
import org.floxx.env.service.informationService
import org.http4s.AuthedRoutes
import org.floxx.env.utils.json.CirceValueClassCustomAuto._
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
    case ct @ GET -> Root / "informations" as user =>
      for {

        informations <- informationService.allInformation
        r <- Ok(informations.toList)
      } yield r

    case ct @ POST -> Root / "informations" as user =>
      for {
        ir <- ct.req.as[InformationRequest]
        _ <- informationService.addInformation(ir.title, ir.content)
        r <- Created("information created")
      } yield r

  }
}
