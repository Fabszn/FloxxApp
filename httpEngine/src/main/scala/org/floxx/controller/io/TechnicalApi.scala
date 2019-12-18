package org.floxx.controller.io

import cats.effect.IO
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.service.{ AdminService, SecurityService }
import org.http4s.{ Request, Response }
import org.http4s.circe.jsonOf
import io.circe.generic.auto._

case class Env(days: Map[String, String])

object Env {
  implicit val format = jsonOf[IO, Env]
}

class TechnicalApi(as: AdminService[IO], ss: SecurityService[IO]) extends Api with WithSecurity {
  override def api: HandleQuery = {

    case req @ POST -> Root / "api" / "124GDvffgfnjcktdlkkjbt00KKDJQzejjkuhlbhvuuertjl" / "setEnv" =>
      authIO(req, ss) { req =>
        {
          println(req.as[Env])
          for {
            env <- req.as[Env]
            r <- handleResponse(as.updateEnv(env.days)) { _ =>
              Created(s"Db has been updated")
            }
          } yield r
        }
      }
  }
}

object TechnicalApi {
  def apply(as: AdminService[IO], ss: SecurityService[IO]): TechnicalApi = new TechnicalApi(as, ss)
}
