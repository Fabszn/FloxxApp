package org.floxx.env

import cats.data.{Kleisli, OptionT}
import org.floxx.Environment.AppEnvironment
import org.floxx.UserInfo
import org.floxx.env.service.securityService
import org.http4s.Request
import org.typelevel.ci.CIString
import zio.RIO

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

  object keys {
    val tokenHeader = "X-Auth-Token"
  }

  type OT[A] = OptionT[ApiTask, A]

  def authUser: Kleisli[OT, Request[ApiTask], UserInfo] =
    Kleisli(request =>
      request.headers
        .get(CIString(keys.tokenHeader))
        .map(token => securityService.checkAuthentification(token.show)
          /*if (JwtUtils.isValidToken(token.value, conf)) {
                    //todo Decode Token to get user Info
                    Some(AuthenticatedUser("To be completed"))
                  } else {
                    None
                  }*/
        )
    )

}
