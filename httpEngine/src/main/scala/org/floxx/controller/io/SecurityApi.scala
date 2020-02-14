package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.service.SecurityService
import org.http4s.circe.{jsonEncoderOf, jsonOf}
import org.http4s.dsl.impl.Root
import org.http4s.dsl.io._

class SecurityApi(securityService: SecurityService[IO]) extends Api {

  case class LoginResquest(login: String, mdp: String)
  implicit val decoder = jsonOf[IO, LoginResquest]
  implicit val d       = jsonEncoderOf[IO, org.floxx.service.UserAuth]


  def api: HandleQuery = {
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
