package org.floxx.service

import cats.implicits._
import io.circe.syntax._
import org.floxx.configuration.config.Configuration
import org.floxx.domain
import org.floxx.domain.error.{FloxxError, LoadCfpDataError, ShareItError}
import org.floxx.domain.{CfpSlot, Room}
import org.floxx.processors.shareHitProcessor.VoxxrinJsonBody
import sttp.capabilities.zio.ZioStreams
import sttp.client4._
import sttp.client4.circe._
import sttp.client4.httpclient.zio.HttpClientZioBackend
import sttp.client4.logging.slf4j.Slf4jLoggingBackend
import sttp.client4.logging.{LogConfig, LogLevel}
import sttp.model.HeaderNames
import zio._
import zio.interop.catz._

object http {

  object backend {
    val layer: ZLayer[Any, Throwable, WebSocketStreamBackend[Task, ZioStreams]] = ZLayer {
      HttpClientZioBackend().flatMap { backend =>
        ZIO.attempt(
          Slf4jLoggingBackend(
            backend,
            LogConfig(
              logRequestBody            = true,
              logRequestHeaders         = true,
              logResponseHeaders        = true,
              logResponseBody           = true,
              includeTiming             = true,
              sensitiveHeaders          = HeaderNames.SensitiveHeaders,
              beforeRequestSendLogLevel = LogLevel.Info
            )
          )
        )
      }
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

    def shareHit(roomId: Room.Id, body: VoxxrinJsonBody): IO[FloxxError, String]
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

    override def shareHit(roomId: Room.Id, body: VoxxrinJsonBody): IO[FloxxError, String] = config.getConf flatMap { c =>
      basicRequest
        .post(uri"${c.voxxrin.url.value}/${roomId.value}/stats?token=${c.voxxrin.token.value}")
        .body(body.asJson)
        .contentType("application/json")
        .send(backend)
        .mapError(err => ShareItError(err.getMessage))
        .flatMap(r => ZIO.fromEither(r.body.leftMap(responseError => ShareItError(responseError))))
    }

  }
}
