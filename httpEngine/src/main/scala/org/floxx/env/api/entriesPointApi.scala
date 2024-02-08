package org.floxx.env.api

import org.http4s._
import io.circe.generic.auto._
import org.floxx.{ domain, BuildInfo }
import org.floxx.domain.AuthUser.Mdp
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.error.{ AuthentificationError, ParsingError }
import org.floxx.env.service.securityService
import org.floxx.env.service.securityService.AuthenticatedUser
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl

import zio._
import zio.interop.catz._

import java.time.{ ZoneId, ZonedDateTime }

object entriesPointApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  case class LoginResquest(login: SimpleUser.Id, mdp: Mdp)
  object LoginResquest {

    implicit val formatMdp: EntityDecoder[ApiTask, Mdp] = jsonOf[ApiTask, Mdp]
    implicit val formatSimpleUserId: EntityDecoder[ApiTask, SimpleUser.Id] = jsonOf[ApiTask, SimpleUser.Id]
    implicit val formatLoginRequest: EntityDecoder[ApiTask, LoginResquest] = jsonOf[ApiTask, LoginResquest]
  }

  implicit val decoder = jsonOf[ApiTask, LoginResquest]
  implicit val d       = jsonEncoderOf[ApiTask, AuthenticatedUser]
  case class User(name: String, token: String, isAdmin: Boolean)

  val floxx_auth = "floxx_auth"
  def api = HttpRoutes.of[ApiTask] {
    case req @ POST -> Root / "try-reco" => {

      implicitly(Ok(""))

      for {
        info <- processCookie(req)
        response <- info._2.fold(Unauthorized) { userInfo =>
          Ok(
            AuthenticatedUser(
              s"${userInfo.firstName.value} ${userInfo.lastName.value}",
              info._1,
              userInfo.isAdmin
            )
          )
        }
      } yield response
    }
    case req @ POST -> Root / "login" => {
      for {
        loginInfo <- req.as[LoginResquest].mapError(err => ParsingError(err.getMessage))
        auth <- securityService.authentification(loginInfo.login, loginInfo.mdp)
        now = HttpDate.unsafeFromZonedDateTime(ZonedDateTime.now(ZoneId.of("Europe/Paris")).plusHours(24))
        resp <- Ok(auth)
      } yield resp.addCookie(
        ResponseCookie(
          floxx_auth,
          auth.token,
          expires  = Some(now),
          maxAge   = None,
          httpOnly = true,
          secure   = true,
          sameSite = Option(SameSite.Strict)
        )
      )
    }.catchSome {
      case ParsingError(msg) => BadRequest(msg)
      case _: AuthentificationError => Forbidden()
      case err => InternalServerError(err.getMessage)
    }
    case _ @GET -> Root / "infos" =>
      Ok(BuildInfo.version)
  }

  private def processCookie(
      req: Request[ApiTask]
  ): ZIO[securityService.SecurityService, Throwable, (String, Option[domain.AuthUser])] =
    for {
      r <- ZIO.succeed(req.cookies.find(c => c.name == floxx_auth).fold("No token available")(_.content))
      userInfo <- securityService.checkAuthentification(r)
      u <- securityService.loadUserById(userInfo.userId)
    } yield (r, u)

}
