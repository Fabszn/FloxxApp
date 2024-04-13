package org.floxx.api

import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.domain.jwt.UserInfo
import org.floxx.service.adminService
import org.floxx.utils.CirceValueClassCustomAuto._
import org.http4s.AuthedRoutes
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._

object adminApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  case class Env(days: Map[String, String])

  object Env {
    implicit val format = jsonOf[ApiTask, Env]
  }

  case class Mapping(userId: Option[SimpleUser.Id], slotId: Slot.Id)

  object Mapping {
    implicit val format = jsonOf[ApiTask, Mapping]
  }

  def api = AuthedRoutes.of[UserInfo, ApiTask] {

    case ct @ POST -> Root / "set-user" as _ =>
      for {
        mapping <- ct.req.as[Mapping]
        _ <- adminService.insertUserSlotMapping(mapping)
        r <- Created(s"Mapping has been inserted")
      } yield r
    case ct @ PUT -> Root / "del-mapping" as _ =>
      for {
        mapping <- ct.req.as[Mapping]
        _ <- adminService.deleteUserSlotMapping(mapping)
        r <- Created(s"Mapping has been deleted")
      } yield r

    case GET -> Root / "mapping" as _ =>
      adminService.mappingUserSlot flatMap { uss =>
        Ok(uss)
      }

    case _ @GET -> Root / "users" as _ =>
      adminService.loadUsers flatMap (users => Ok(users))
    case GET -> Root / "healthCheck" as _ => Ok("up and go")

  }

}
