package org.floxx

import cats.effect.{ ExitCode, IO, IOApp }
import cats.implicits._
import io.circe.generic.auto._
import org.floxx.AppLoader.AppContext
import org.floxx.controller.handleRespIO2Val
import org.http4s.circe._
import org.http4s.dsl.impl.Root
import org.http4s.dsl.io._
import org.http4s.implicits._
import org.http4s.server.blaze._
import org.http4s.server.middleware.{ CORS, CORSConfig }
import org.http4s.{ HttpRoutes }
import handleRespIO2Val._

import scala.concurrent.duration._

object FloxxMainHttp4s extends IOApp {

  case class LoginResquest(login: String, mdp: String)
  val context: AppContext = AppLoader.initialize
  implicit val decoder    = jsonOf[IO, LoginResquest]
  implicit val d          = jsonEncoderOf[IO, org.floxx.service.SecurityUser]

  val helloWorldService = CORS(
    HttpRoutes
      .of[IO] {
        case req @ POST -> Root / "api" / "login" => {
          for {
            loginInfo <- req.as[LoginResquest]
            resp <- handleResponse(context.securityService.authentification(loginInfo.login, loginInfo.mdp))
          } yield resp
        }
      }
      .orNotFound,
    CORSConfig(
      anyOrigin        = true,
      anyMethod        = true,
      allowedMethods   = None,
      allowCredentials = true,
      maxAge           = 1.day.toSeconds
    )
  )
  @SuppressWarnings(Array("org.wartremover.warts.Any"))
  override def run(args: List[String]): IO[ExitCode] =
    BlazeServerBuilder[IO]
      .bindHttp(8081, "0.0.0.0")
      .withHttpApp(helloWorldService)
      .serve
      .compile
      .drain
      .as(ExitCode.Success)
}
