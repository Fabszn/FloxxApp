package org.floxx.controller.security

import cats.effect.IO
import org.floxx.service.SecurityService
import org.http4s.dsl.Http4sDsl
import org.http4s.headers.Authorization
import org.http4s.{Challenge, Request, Response}

trait WithSecurity extends Http4sDsl[IO] {

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
