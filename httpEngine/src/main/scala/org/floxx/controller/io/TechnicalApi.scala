package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.model.{SlotId, UserId}
import org.floxx.service.{AdminService, SecurityService}
import org.http4s.HttpRoutes
import org.http4s.circe.jsonOf

case class Env(days: Map[String, String])

object Env {
  implicit val format = jsonOf[IO, Env]
}
case class Mapping(userSlots: Map[UserId, Set[SlotId]])
object Mapping {
  implicit val format = jsonOf[IO, Mapping]
}

class TechnicalApi(as: AdminService[IO], ss: SecurityService[IO]) extends  WithSecurity {
  override def api = HttpRoutes.of{

    case req @ POST -> Root / "api" / "124GDvffgfnjcktdlkkjbt00KKDJQzejjkuhlbhvuuertjl" / "setEnv" =>
      authIO(req, ss) { req =>
        {
          for {
            env <- req.as[Env]
            r <- handleResponse(as.updateEnv(env.days)) { _ =>
              Created(s"Db has been updated")
            }
          } yield r
        }
      }
    case req @ POST -> Root / "api" / "124GDvffgfnjcktdlkkjbt00KKDJQzejjkuhlbhvuuertjl" / "setUsers" =>
      authIO(req, ss) { req =>
        for {
          mapping <- req.as[Mapping]
          r <- handleResponse(as.insertUserSlotMapping(mapping.userSlots)) { _ =>
            Created(s"Mapping has been inserted")
          }
        } yield r
      }

  }
}

object TechnicalApi {
  def apply(as: AdminService[IO], ss: SecurityService[IO]): TechnicalApi = new TechnicalApi(as, ss)
}
