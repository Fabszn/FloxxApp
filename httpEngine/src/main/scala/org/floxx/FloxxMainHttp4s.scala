package org.floxx

import cats.syntax.all._
import org.floxx.env.api._
import org.floxx.env.configuration.config.{ getConf, GlobalConfig }
import org.floxx.environment.{ appEnvironnement, AppEnvironment }
import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.implicits._
import org.http4s.server.{ AuthMiddleware, Router }
import org.joda.time.DateTimeZone
import zio._
import zio.Clock
import zio.interop.catz._
import zio.logging.Logging

object FloxxMainHttp4s extends zio.ZIOAppDefault {

  val server: ZIO[AppEnvironment, Throwable, Unit] = {
    ZIO.runtime[AppEnvironment].flatMap { _ =>
      {
        for {
          conf <- getConf
          server <- BlazeServerBuilder[ApiTask]
            .bindHttp(conf.floxx.port, "0.0.0.0")
            .withHttpApp(floxxApp(conf))
            .serve
            .compile
            .drain
        } yield {
          server
        }
      }
    }
  }

  DateTimeZone.setDefault(DateTimeZone.forID("Europe/Paris"))

  def floxxServices(conf: GlobalConfig) = {
    val authMiddleware: AuthMiddleware[ApiTask, UserInfo] = AuthMiddleware(authUser(conf))

    authMiddleware(
      hitApi.api <+>
      SlotApi.api <+>
      adminApi.api <+>
      statsApi.api
    )
  }

  def floxxApp(conf: GlobalConfig) =
    Router[ApiTask](
      "/" -> entriesPointApi.api,
      "/api" -> floxxServices(conf),
      "/" -> StaticApi.api,
      "/assets" -> StaticApi.api
    ).orNotFound

  override def run =
    server
      .provideLayer(appEnvironnement)
      .fold[ExitCode](
        ex => {
          ExitCode.failure
        },
        _ => {
          ExitCode.success
        }
      )
}
