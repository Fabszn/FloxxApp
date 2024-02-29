package org.floxx

import cats.data.{ Kleisli, OptionT }
import io.circe.generic.auto._
import io.circe.parser.decode
import org.floxx.FloxxMainHttp4s.AppEnvironment
import org.floxx.configuration.config.GlobalConfig
import org.floxx.domain.jwt.UserInfo
import org.http4s.Request
import org.http4s.headers.Authorization
import pdi.jwt.{ Jwt, JwtAlgorithm }
import zio._
import zio.interop.catz.asyncInstance

import scala.util.{ Failure, Success }

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

  type OT[A] = OptionT[ApiTask, A]

  def authUser(conf: GlobalConfig): Kleisli[OT, Request[ApiTask], UserInfo] =
    Kleisli(
      request => {
        OptionT(
          request.headers
            .get(Authorization.name)
            .map(
              token => {
                Jwt.decode(
                  token.head.value,
                  conf.floxx.secret,
                  Seq(JwtAlgorithm.HS256)
                )
              }
            )
            .fold {
              ZIO.logWarning(s"None token has been found in header") *> ZIO.attempt(Option.empty[UserInfo])
            } {
              case Failure(e) => {
                ZIO.logWarning(s"Authentification error : ${e.getMessage} ${e.getCause}") *> ZIO.attempt(Option.empty[UserInfo])
              }
              case Success(jw) => {
                decode[UserInfo](jw.content).fold(
                  e =>
                    ZIO.logError(s"Decode token -> UserInfo error: ${e.getMessage} ${e.getCause}") *> ZIO
                      .attempt(Option.empty[UserInfo]),
                  (user: UserInfo) => ZIO.attempt(Option(user))
                )
              }
            }
        )
      }
    )

  def authAdmin(kei: Kleisli[OT, Request[ApiTask], UserInfo]): Kleisli[OT, Request[ApiTask], UserInfo] =
    kei.andThen(
      Kleisli[OT, UserInfo, UserInfo](
        ui =>
          OptionT {
            ZIO.attempt(if (ui.isAdmin) {
              Option(ui)
            } else {
              Option.empty[UserInfo]
            })
          }
      )
    )

}
