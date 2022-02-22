package org.floxx.env.api

import io.circe.generic.auto._
import org.floxx.env.service.adminService
import org.floxx.model.{ SlotId, UserId }
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._

import zio.interop.catz._

object technicalApi {

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

  def api = HttpRoutes.of[ApiTask] {

    case req @ POST -> Root / "api" / "124GDvffgfnjcktdlkkjbt00KKDJQzejjkuhlbhvuuertjl" / "setEnv" =>
      for {
        env <- req.as[Env]
        _ <- adminService.updateEnv(env.days)
        r <- Created(s"Db has been updated")

      } yield r

    case req @ POST -> Root / "api" / "124GDvffgfnjcktdlkkjbt00KKDJQzejjkuhlbhvuuertjl" / "setUsers" =>
      for {
        mapping <- req.as[Mapping]
        _ <- adminService.insertUserSlotMapping(mapping.userSlots)
        r <- Created(s"Mapping has been inserted")
      } yield r
    case GET  -> Root /"healthCheck"  => Ok("up and go")

  }

}
