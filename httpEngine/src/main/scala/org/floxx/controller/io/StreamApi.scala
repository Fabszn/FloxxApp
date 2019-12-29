package org.floxx.controller.io

import cats.effect.IO
import cats.effect.IO._
import cats.effect.concurrent.MVar
import fs2.concurrent.Queue
import org.floxx.controller.security.WithSecurity
import org.floxx.service.SecurityService
import org.http4s.headers.`Content-Type`
import org.http4s.{ Header, Headers }
import org.http4s.server.websocket.WebSocketBuilder
import org.http4s.websocket.WebSocketFrame
import org.http4s.websocket.WebSocketFrame.Text

@SuppressWarnings(Array("org.wartremover.warts.Any"))
class StreamApi(ss: SecurityService[IO], channel: Queue[IO, WebSocketFrame]) extends Api with WithSecurity {

  override def api: HandleQuery = {
    case req @ GET -> Root / "api" / "stream" / "hit" => {
      for {

        webSocket <- {
          WebSocketBuilder[IO].build(
            send = fs2.Stream.eval(channel.dequeue1).flatMap(d => fs2.Stream.emit(d)).repeat,
            receive = stream => {
              stream.evalMap {
                case Text(data, _) => {
                  channel.enqueue1(Text("send back "))
                }
                case unknown => IO(println(s"Unknown type: $unknown"))
              }
            },
            Headers(List(Header(`Content-Type`.name.value, "application/json")))
          )
        }
      } yield webSocket
    }
  }
}

object StreamApi {
  def apply(ss: SecurityService[IO], channel: Queue[IO, WebSocketFrame]): StreamApi = new StreamApi(ss, channel)
}
