package org.floxx.env.service

import org.floxx.domain
import org.floxx.domain.Slot
import org.floxx.domain.error.{ FloxxError, LoadCfpDataError }
import org.floxx.env.configuration.config.{ Configuration, GlobalConfig }
import sttp.capabilities.zio.ZioStreams
import sttp.client4._
import sttp.client4.httpclient.zio.HttpClientZioBackend
import sttp.client4.circe._
import zio._
import zio.interop.catz._
import cats.syntax.traverse._
import cats.implicits._
import io.circe

object http {

  val layer: ZLayer[Any, Throwable, WebSocketStreamBackend[Task, ZioStreams]] = ZLayer {
    HttpClientZioBackend() //.flatMap { backend => backend. }
  }

  object cfp {

    val layer = ZLayer {

      for {
        conf <- ZIO.service[Configuration]
        backend <- ZIO.service[WebSocketStreamBackend[Task, ZioStreams]]
      } yield CfpService(conf, backend)

    }

    trait Cfp {
      def loadData(): IO[FloxxError, Seq[domain.Slot]]
    }

    final case class CfpService(config: Configuration, backend: WebSocketStreamBackend[Task, ZioStreams]) extends Cfp {

      override def loadData(): ZIO[Any, FloxxError, List[Slot]] =
        config.getConf flatMap { c =>
          (c.cfp.days
            .map { d =>
              basicRequest
                .get(uri"${c.cfp.url}/${d}")
                .response(asJson[Seq[Slot]])
                .send(backend)
                .mapError(err => LoadCfpDataError(err.getMessage))
                .flatMap(r => ZIO.fromEither(r.body.leftMap(responseError => LoadCfpDataError(responseError.getMessage))))
            }
            .sequence)
            .map(_.flatten)

        }

    }

  }

}
