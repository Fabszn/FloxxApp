package org.floxx.controller.security

import akka.http.scaladsl.server.Directives.authenticateOAuth2
import akka.http.scaladsl.server.directives.{ AuthenticationDirective, Credentials }
import cats.effect.IO
import org.floxx.service.SecurityService
import org.http4s.dsl.Http4sDsl
import org.http4s.{ Challenge, Request, Response, Status }
import org.http4s.headers.Authorization
import org.http4s.dsl.io._

trait WithSecurity extends Http4sDsl[IO] {

  def auth(ss: SecurityService[IO]): AuthenticationDirective[String] = authenticateOAuth2[String](
    "floxx",
    d => {
      val r = d match {
        case p @ Credentials.Provided(id) => { ss.checkAuthentification(id) }
        case _ => None
      }
      r
    }
  )

  def authIO(req: Request[IO], ss: SecurityService[IO])(success: Request[IO] => IO[Response[IO]]): IO[Response[IO]] =
    req.headers.get(Authorization) match {
      case None => Unauthorized(Challenge("SchemeFloxx", "floxx"))
      case Some(t) =>
        ss.checkAuthentification(t.value).fold(Unauthorized(Challenge("SchemeFloxx", "floxx"))) { _ =>
          success(req)
        }
    }
}
