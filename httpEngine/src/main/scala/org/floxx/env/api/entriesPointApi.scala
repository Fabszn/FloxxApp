package org.floxx.env.api

import org.http4s.HttpRoutes
import io.circe.generic.auto._
import org.floxx.BuildInfo
import org.floxx.domain.AuthUser.Mdp
import org.floxx.domain.User.SimpleUser
import org.floxx.env.service.securityService
import org.floxx.env.service.securityService.AuthenticatedUser
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._

object entriesPointApi {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._

  case class LoginResquest(login: String, mdp: String)
  object LoginResquest{

    implicit val formatMdp =  jsonOf[ApiTask, Mdp]
    implicit val formatSimpleUserId =  jsonOf[ApiTask, SimpleUser.Id]
    implicit val formatLoginRequest =  jsonOf[ApiTask, LoginResquest]
  }

  implicit val decoder = jsonOf[ApiTask, LoginResquest]
  implicit val d       = jsonEncoderOf[ApiTask, AuthenticatedUser]
  case class User(name:String,token:String, isAdmin:Boolean)

  def api = HttpRoutes.of[ApiTask] {
    case req @ POST -> Root / "login" =>
      for {
        loginInfo <- req.as[LoginResquest]
        auth <- securityService.authentification(SimpleUser.Id(loginInfo.login), Mdp(loginInfo.mdp))
        resp <- Ok(auth)
      } yield resp
    case _ @ GET -> Root / "infos" =>
      Ok(BuildInfo.version)
  }

}
