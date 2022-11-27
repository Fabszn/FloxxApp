package fixtures

import org.floxx.FloxxMainHttp4s
import org.floxx.env.api.ApiTask
import org.floxx.env.configuration.config
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.{cfpRepository, hitRepository, statsRepository, userRepository}
import org.floxx.env.service._
import org.floxx.environment._
import org.http4s.client.Client
import sttp.capabilities.fs2.Fs2Streams
import sttp.client3._
import sttp.client3.http4s.Http4sBackend
import zio._
import zio.interop.catz._
import zio.test.TestEnvironment

import javax.sql.DataSource

trait HttpAppFixture extends PostgresRunnableFixture {

  lazy val backendLayer: ZLayer[Configuration, Throwable, SttpBackend[ApiTask, Fs2Streams[ApiTask]]] = {
    ZLayer {
      config.getConf.map(
        c =>
          Http4sBackend.usingClient(
            Client.fromHttpApp[ApiTask](
              FloxxMainHttp4s.floxxApp(c)
            )
          )
      )
    }
  }

  lazy val appTestEnvironment = (
    dbLayer >+> (
      hitRepository.layer ++
      cfpRepository.layer ++
      statsRepository.layer ++
      userRepository.layer ++
      hitService.layer ++
      securityService.layer ++
      statService.layer ++
      trackService.layer ++
      adminService.layer
    ) >+> backendLayer
  ).orDie

}
