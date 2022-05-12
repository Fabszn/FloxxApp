package fixtures

import org.floxx.FloxxMainHttp4s
import org.floxx.env.api.ApiTask
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.service.{ adminService, hitService, securityService, statService, trackService }
import org.floxx.environment._
import org.http4s.client.Client
import sttp.capabilities.fs2.Fs2Streams
import sttp.client3._
import sttp.client3.http4s.Http4sBackend
import zio._
import zio.blocking.Blocking
import zio.clock.Clock
import zio.console.Console
import zio.interop.catz._
import zio.logging.Logging
import zio.test.environment.TestEnvironment

import javax.sql.DataSource

trait HttpAppFixture extends PostgresRunnableFixture {

  lazy val backendLayer: ZLayer[Has[Configuration], Throwable, Has[SttpBackend[ApiTask, Fs2Streams[ApiTask]]]] =
    ZLayer.fromServiceM { (conf: Configuration) =>
      conf.getConf.map(
        conf =>
          Http4sBackend.usingClient(
            Client.fromHttpApp[ApiTask](
              FloxxMainHttp4s.floxxApp(conf)
            )
        )
      )
    }

  lazy val appTestEnvironment: URLayer[
    zio.ZEnv,
    TestEnvironment with Has[Configuration] with Has[DataSource] with Logging with Has[hitService.HitService] with Has[
      securityService.SecurityService
    ] with Has[statService.StatsService] with Has[trackService.TrackService] with Has[adminService.AdminService] with Has[
      SttpBackend[ApiTask, Fs2Streams[ApiTask]]
    ]
  ] = (
    dbLayer >+> (
      loggingLayer ++
      hitSer ++
      securitySer ++
      statsSer ++
      trackSer ++
      adminSer
    ) >+> backendLayer
  ).orDie

}
