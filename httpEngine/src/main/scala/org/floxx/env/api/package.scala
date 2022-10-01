package org.floxx.env

import cats.data.{Kleisli, OptionT}
import io.circe.generic.auto._
import io.circe.parser.decode
import org.floxx.environment.AppEnvironment
import org.floxx.env.configuration.config.GlobalConfig
import org.floxx.{UserInfo, logger}
import org.http4s.Request
import org.http4s.headers.Authorization
import pdi.jwt.{Jwt, JwtAlgorithm}
import zio._

import scala.util.{Failure, Success}

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

  def authUser(conf: GlobalConfig): Kleisli[OT, Request[ApiTask], UserInfo] =
    Kleisli(
      request =>
        OptionT(
          ZIO.attempt(
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
                logger.error(s"None token has been found in header")
                Option.empty[UserInfo]
              } {
                case Failure(e) => {
                  logger.error(s"Authentification error : ${e.getMessage} ${e.getCause}")
                  Option.empty[UserInfo]
                }
                case Success(jw) => {
                  decode[UserInfo](jw.content).fold(
                    _ => Option.empty[UserInfo],
                    (user: UserInfo) => Option(user)
                  )
                }

              }
          )
        )
    )

}
