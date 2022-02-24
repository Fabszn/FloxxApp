package org.floxx.env

import cats.data.{Kleisli, OptionT}
import org.floxx.Environment.AppEnvironment
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.service.securityService.AuthenticatedUser
import org.http4s.Request
import org.http4s.util.CaseInsensitiveString
import zio.RIO

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }


  def authUser(conf: Configuration): Kleisli[ApiTask, Request[ApiTask], AuthenticatedUser] =
    Kleisli(
      r =>
        OptionT(
          RIO {
            r.headers
              .get(CaseInsensitiveString(Keys.tokenHeader))
              .fold(Option.empty[AuthenticatedUser])(
                token =>
                  if (JwtUtils.isValidToken(token.value, conf)) {
                    //todo Decode Token to get user Info
                    Some(AuthenticatedUser("To be completed"))
                  } else {
                    None
                  }

              )}
        )
    )

}
