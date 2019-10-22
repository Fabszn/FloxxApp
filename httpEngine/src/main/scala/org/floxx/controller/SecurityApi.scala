package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.Token
import org.floxx.service.SecurityService
import org.slf4j.{Logger, LoggerFactory}
import play.api.libs.json.Json

class SecurityApi(securityService: SecurityService) extends PlayJsonSupport {

  case class LoginResquest(login: String, mdp: String)

  object LoginResquest {
    implicit val format = Json.format[LoginResquest]
  }

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val invalideToken: Token = "invalid_token"

  val route: server.Route =
    path("api" / "login") {
      post {
        entity(as[LoginResquest]) { loginInfo =>
          logger.debug(s"login ${loginInfo}")

          onComplete(securityService.authentification(loginInfo.login, loginInfo.mdp)) {
            _.handleResponse(
              r => complete(StatusCodes.OK -> r.token.getOrElse(invalideToken))
            )
          }
        }
      }
    }

}

object SecurityApi {
  def apply(securityService: SecurityService): SecurityApi = new SecurityApi(securityService)
}
