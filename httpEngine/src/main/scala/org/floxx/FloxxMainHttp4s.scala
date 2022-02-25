package org.floxx

import cats.syntax.all._
import org.http4s.implicits._
import org.floxx.Environment.{AppEnvironment, appEnvironnement}
import org.floxx.env.api._
import org.floxx.env.configuration.config.{GlobalConfig, getConf}
import org.http4s.blaze.server.BlazeServerBuilder
import org.http4s.server.Router
import org.joda.time.DateTimeZone
import org.slf4j.{Logger, LoggerFactory}
import zio.{ExitCode, _}
import zio.interop.catz._
import org.http4s.server.staticcontent._

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

 def floxxServices(conf:GlobalConfig) = {
        trackApi.api <+>
        securityApi.api <+>
        hitApi.api <+>
        technicalApi.api <+>
        statsApi.api
}



def floxxApp(conf:GlobalConfig) = Router[ApiTask](
  "/api" -> floxxServices(conf),
  "/" -> fileService(FileService.Config("assets/index.html")),
  "/floxx.js" -> fileService(FileService.Config("assets/floxx.js"))
).orNotFound
  
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {
    logger.info("server starting..")
    server
      .provideLayer(appEnvironnement)
      .fold[ExitCode](ex =>
        {
          logger.error(s"failure ${ex.getMessage}",ex)
          ExitCode.failure},
        _ =>{
        logger.info("success")
        ExitCode.success})
  }
}
