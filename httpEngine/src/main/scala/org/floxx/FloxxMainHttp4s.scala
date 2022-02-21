package org.floxx

import cats.syntax.all._
import org.http4s.implicits._
import org.floxx.Environment.{AppEnvironment, appEnvironnement}
import org.floxx.env.api._
import org.floxx.env.configuration.config.getConf
import org.http4s.HttpRoutes
import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.dsl.Http4sDsl
import org.joda.time.DateTimeZone
import zio.{ExitCode, _}
import zio._
import zio.interop.catz._

object FloxxMainHttp4s extends zio.App {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._

  val server = {
    ZIO.runtime[AppEnvironment].flatMap { implicit r =>
      {
        for {
          conf <- getConf
          server <- BlazeServerBuilder[ApiTask]
            .bindHttp(conf.floxx.port, "0.0.0.0")
            .withHttpApp(floxxdService)
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

  val floxxdService =
    HttpRoutes
      .of[ApiTask] {
        securityApi.api <+>
        trackApi.api <+>
        hitApi.api <+>
        technicalApi.api <+>
        statsApi.api
      }
      .orNotFound


  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    server
      .provideLayer(appEnvironnement)
      .fold[ExitCode](_ => ExitCode.failure, _ => ExitCode.success)
}
