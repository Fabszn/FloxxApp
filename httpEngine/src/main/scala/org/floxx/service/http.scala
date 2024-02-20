package org.floxx.service

import org.floxx.domain
import org.floxx.domain.{ CfpSlot, Room }
import org.floxx.domain.error.{ FloxxError, LoadCfpDataError }
import org.floxx.configuration.config.Configuration
import sttp.capabilities.zio.ZioStreams
import sttp.client4._
import sttp.client4.httpclient.zio.HttpClientZioBackend
import sttp.client4.circe._
import zio._
import zio.interop.catz._
import cats.implicits._

object http {

  object backend {
    val layer: ZLayer[Any, Throwable, WebSocketStreamBackend[Task, ZioStreams]] = ZLayer {
      HttpClientZioBackend() //.flatMap { backend => backend. }
    }
  }

  val layer = ZLayer {
    for {
      conf <- ZIO.service[Configuration]
      backend <- ZIO.service[WebSocketStreamBackend[Task, ZioStreams]]
    } yield HttpService(conf, backend)

  }

  trait Http {
    def loadDatafromCfp(): IO[FloxxError, Seq[domain.CfpSlot]]
    def loadRooms(): IO[FloxxError, Seq[domain.Room]]
  }

  final case class HttpService(config: Configuration, backend: WebSocketStreamBackend[Task, ZioStreams]) extends Http {

    override def loadDatafromCfp(): IO[FloxxError, Seq[domain.CfpSlot]] =
      config.getConf flatMap { c =>
        (c.cfp.days
          .map { d =>
            basicRequest
              .get(uri"${c.cfp.scheduleUrl}/${d.dayValue.value}")
              .response(asJson[Seq[CfpSlot]])
              .send(backend)
              .mapError(err => LoadCfpDataError(err.getMessage))
              .flatMap(r => ZIO.fromEither(r.body.leftMap(responseError => LoadCfpDataError(responseError.getMessage))))
          }
          .sequence)
          .map(_.flatten)

      }

    override def loadRooms(): IO[FloxxError, Seq[domain.Room]] =
      config.getConf flatMap { c =>
        basicRequest
          .get(uri"${c.cfp.roomsUrl}")
          .response(asJson[Seq[Room]])
          .send(backend)
          .mapError(err => LoadCfpDataError(err.getMessage))
          .flatMap(r => ZIO.fromEither(r.body.leftMap(responseError => LoadCfpDataError(responseError.getMessage))))
      }

  }

}
