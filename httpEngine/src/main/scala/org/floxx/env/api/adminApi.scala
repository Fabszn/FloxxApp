package org.floxx.env.api

import io.circe.generic.auto._
import org.floxx.UserInfo
import org.floxx.env.service.adminService
import org.floxx.model.{ SlotId, UserId }
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import org.http4s.{ AuthedRoutes, Response }
import zio.Task
import zio.interop.catz._

object adminApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  case class Env(days: Map[String, String])

  object Env {
    implicit val format = jsonOf[ApiTask, Env]
  }
  case class Mapping(userSlots: Map[UserId, Set[SlotId]])

  object Mapping {
    implicit val format = jsonOf[ApiTask, Mapping]
  }

  def api = AuthedRoutes.of[UserInfo, ApiTask] {

    case ct @ POST -> Root / "setEnv" as user =>
      if (user.isAdmin) {
        for {
          env <- ct.req.as[Env]
          _ <- adminService.updateEnv(env.days)
          r <- Created(s"Db has been updated")

        } yield r
      } else Task.succeed(Response(Unauthorized))

    case ct @ POST -> Root / "set-user" as user =>
      for {
        mapping <- ct.req.as[Mapping]
        _ <- adminService.insertUserSlotMapping(mapping.userSlots)
        r <- Created(s"Mapping has been inserted")
      } yield r

    case GET -> Root / "mapping" as _ =>
      adminService.mappingUserSlot >>= { uss =>
        Ok(uss)
      }
    case ct @ GET -> Root / "users" as user =>
      adminService.loadUsers >>= (users => Ok(users))
    case GET -> Root / "healthCheck" as _ => Ok("up and go")

  }

}
