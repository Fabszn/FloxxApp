package org.floxx

import org.floxx.AppLoader.AppContext
import org.floxx.AppLoader.appEnv.{AppEnvironment, appEnvironnement}
import org.floxx.env.configuration.config.getConf
import org.http4s.blaze.server.BlazeServerBuilder
import org.joda.time.DateTimeZone
import zio.{ExitCode, _}
import zio.interop.catz._

object FloxxMainHttp4s extends zio.App {



  val server = {
    ZIO.runtime[AppEnvironment].flatMap { implicit r =>
      {
        for {
          conf <- getConf
          server <- BlazeServerBuilder[Task]
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

  val context: AppContext = AppLoader.initialize
  DateTimeZone.setDefault(DateTimeZone.forID("Europe/Paris"))

  val floxxdService = ??? /*CORS(
    HttpRoutes
      .of[Task] {
        context.securityApi.api <+> context.cfpApi.api <+>
        context.hitApi.api <+>
        context.technicalApi.api <+>
        context.streamApi.api <+>
        context.statsApi.api
      }
      .orNotFound,
    CORSConfig(
      anyOrigin        = true,
      anyMethod        = true,
      allowedMethods   = None,
      allowCredentials = true,
      maxAge           = 1.day.toSeconds
    )
  )*/

  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    server
      .provideSomeLayer(appEnvironnement)
      .fold[ExitCode](_ => ExitCode.failure, _ => ExitCode.success)
}
