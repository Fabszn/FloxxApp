package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.FloxxMainHttp4s.LoginResquest
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.service.SecurityService
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.dsl.impl.Root
import org.http4s.dsl.io._
import org.http4s.{Request, Response}


class SecurityApi(securityService: SecurityService[IO]) extends Api {

  def api: PartialFunction[Request[IO], IO[Response[IO]]] = {
    case req @ POST -> Root / "api" / "login" => {
      for {
        loginInfo <- req.as[LoginResquest]
        resp <- handleResponse(securityService.authentification(loginInfo.login, loginInfo.mdp)) { su =>
          Ok(su)
        }
      } yield resp
    }
  }

}

object SecurityApi {
  def apply(securityService: SecurityService[IO]): SecurityApi = new SecurityApi(securityService)
}
