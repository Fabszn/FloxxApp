package org.floxx.controller.io.stream

import cats.effect.concurrent.MVar
import cats.effect.{ContextShift, IO}
import fs2.concurrent.Queue
import org.http4s.websocket.WebSocketFrame

import scala.concurrent.ExecutionContext

object WsIO {

  implicit val contextShift: ContextShift[IO] = IO.contextShift(ExecutionContext.global)

  val wsChan: MVar[IO, WebSocketFrame] = cats.effect.concurrent.MVar[IO].empty[WebSocketFrame].unsafeRunSync()

  val wsQueue: Queue[IO, WebSocketFrame] = Queue.bounded[IO, WebSocketFrame](100).unsafeRunSync()

}
