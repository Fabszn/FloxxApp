package org.floxx.env.api

import org.http4s.{ HttpDate, HttpRoutes, Request,ResponseCookie, SameSite }
import io.circe.generic.auto._
import org.floxx.{ domain, BuildInfo }
import org.floxx.domain.AuthUser.Mdp
import org.floxx.domain.User.SimpleUser
import org.floxx.env.service.securityService
import org.floxx.env.service.securityService.AuthenticatedUser
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl

import zio.{ URIO, ZIO }
import zio.interop.catz._

import java.time.{ ZoneId, ZonedDateTime }


object entriesPointApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  case class LoginResquest(login: String, mdp: String)
  object LoginResquest {

    implicit val formatMdp          = jsonOf[ApiTask, Mdp]
    implicit val formatSimpleUserId = jsonOf[ApiTask, SimpleUser.Id]
    implicit val formatLoginRequest = jsonOf[ApiTask, LoginResquest]
  }

  implicit val decoder = jsonOf[ApiTask, LoginResquest]
  implicit val d       = jsonEncoderOf[ApiTask, AuthenticatedUser]
  case class User(name: String, token: String, isAdmin: Boolean)


  val floxx_auth = "floxx_auth"
  def api = HttpRoutes.of[ApiTask] {
    case req @ POST -> Root / "try-reco" => {

      for {
        info <- processCookie(req)
        response <- info.fold(BadRequest("auth has failed")) {
          case (token, userInfo) =>
            Ok(
              AuthenticatedUser(
                s"${userInfo.firstName.value} ${userInfo.lastName.value}",
                token,
                userInfo.isAdmin
              )
            )
        }
      } yield response

    }
    case req @ POST -> Root / "login" =>
      for {
        loginInfo <- req.as[LoginResquest]
        auth <- securityService.authentification(SimpleUser.Id(loginInfo.login), Mdp(loginInfo.mdp))
        now <- ZIO.attempt(HttpDate.unsafeFromZonedDateTime(ZonedDateTime.now(ZoneId.of("Europe/Paris")).plusHours(24)))
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
    case _ @GET -> Root / "infos" =>
      Ok(BuildInfo.version)
  }

  private def processCookie(req: Request[ApiTask]): URIO[securityService.SecurityService, Option[(String, domain.AuthUser)]] =
    (for {
      r <- ZIO.attempt(req.cookies.find(c => c.name == floxx_auth)).some
      userInfo <- securityService.checkAuthentification(r.content).some
      u <- securityService.loadUserById(userInfo.userId).some
    } yield (r.content, u)).option

}
