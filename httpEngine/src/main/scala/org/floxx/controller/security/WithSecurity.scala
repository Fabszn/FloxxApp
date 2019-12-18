package org.floxx.controller.security

import akka.http.scaladsl.server.Directives.authenticateOAuth2
import akka.http.scaladsl.server.directives.{AuthenticationDirective, Credentials}
import cats.effect.IO
import org.floxx.service.SecurityService
import org.http4s.dsl.Http4sDsl
import org.http4s.headers.Authorization
import org.http4s.{Challenge, Request, Response}

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
    {

      println(s"header ${req.headers.get(Authorization.name)}")
      req.headers.get(Authorization.name) match {
      case None => Unauthorized(Challenge("SchemeFloxx", "floxx",Map("Error" -> "None token has been found")))
      case Some(t) =>
        ss.checkAuthentification(t.value.split(" ")(1)).fold(Unauthorized(Challenge("SchemeFloxx", "floxx",Map("Erreur" -> "Token invalid") ))) { _ =>
          success(req)
        }
    }}
}
