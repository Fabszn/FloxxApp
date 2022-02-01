package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.service.SecurityService
import org.http4s.HttpRoutes
import org.http4s.circe.{jsonEncoderOf, jsonOf}
import org.http4s.dsl.io._

class SecurityApi(securityService: SecurityService[IO])  {

  case class LoginResquest(login: String, mdp: String)
  implicit val decoder = jsonOf[IO, LoginResquest]
  implicit val d       = jsonEncoderOf[IO, org.floxx.service.AuthenticatedUser]
  case class User(name:String,token:String, isAdmin:Boolean)

  def api=  HttpRoutes.of[IO] {
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
