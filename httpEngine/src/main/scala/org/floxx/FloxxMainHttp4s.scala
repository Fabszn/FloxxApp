package org.floxx

import cats.syntax.all._
import org.floxx.Environment.{ appEnvironnement, AppEnvironment }
import org.floxx.env.api._
import org.floxx.env.configuration.config.{ getConf, GlobalConfig }
import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.implicits._
import org.http4s.server.{ AuthMiddleware, Router }
import org.joda.time.DateTimeZone
import org.slf4j.{ Logger, LoggerFactory }
import zio.interop.catz._
import zio.{ ExitCode, _ }

object FloxxMainHttp4s extends zio.App {
  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val server: ZIO[AppEnvironment, Throwable, Unit] = {
    ZIO.runtime[AppEnvironment].flatMap { implicit r =>
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
      "/" -> {
        logger.info("load static part of app")
        StaticApi.api
      }
    ).orNotFound

  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {
    logger.info("server starting..")


    server
      .provideLayer(appEnvironnement)
      .fold[ExitCode](
        ex => {
          logger.error(s"failure ${ex.getMessage}", ex)
          ExitCode.failure
        },
        _ => {
          logger.info("success")
          ExitCode.success
        }
      )
  }



}
