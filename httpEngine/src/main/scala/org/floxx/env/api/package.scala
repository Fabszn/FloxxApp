package org.floxx.env

import cats.data.{Kleisli, NonEmptyList}
import org.floxx.Environment.AppEnvironment
import org.floxx.UserInfo
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.service.securityService
import org.floxx.env.service.securityService.{AuthenticatedUser, SecurityService}
import org.http4s.{Header, Request}
import org.typelevel.ci.CIString
import zio.{Has, RIO, ZIO}

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

  object keys {
    val tokenHeader = "X-Auth-Token"
  }

  def authUser: Kleisli[ApiTask, Request[ApiTask], UserInfo] =
    Kleisli(
      _.headers
        .get(CIString(keys.tokenHeader))
        .fold(RIO(Option.empty[UserInfo]))(
          token => securityService.checkAuthentification(token.show)
          /*if (JwtUtils.isValidToken(token.value, conf)) {
                    //todo Decode Token to get user Info
                    Some(AuthenticatedUser("To be completed"))
                  } else {
                    None
                  }*/
        )
    )

}
