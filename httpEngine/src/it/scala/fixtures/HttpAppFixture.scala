package fixtures

import org.floxx.FloxxMainHttp4s
import org.floxx.api.ApiTask
import org.floxx.configuration.config
import org.floxx.configuration.config.Configuration
import org.http4s.client.Client
import sttp.capabilities.fs2.Fs2Streams
import sttp.client4._
import sttp.client4.http4s.Http4sBackend
import zio._
import zio.interop.catz._

trait HttpAppFixture extends PostgresRunnableFixture {

  lazy val backendLayer: ZLayer[Configuration, Throwable, StreamBackend[ApiTask, Fs2Streams[ApiTask]]] = {
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

}
