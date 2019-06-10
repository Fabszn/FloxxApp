package org.floxx.controller.stream

import akka.actor.{ActorRef, ActorSystem}
import akka.http.scaladsl.model.ws.{Message, TextMessage}
import akka.stream.scaladsl.{Flow, Sink, Source}
import akka.stream.{ActorMaterializer, OverflowStrategy}
import akka.{Done, NotUsed}
import org.floxx.controller.stream.Ws.{ConnectWsHandle, Msg, WsHit}

import scala.concurrent.duration._
import scala.concurrent.{ExecutionContext, Future}

object WsUtils {

  val actorSystemName = "ws-floxx-hit-system"
  implicit val system: ActorSystem    = ActorSystem(actorSystemName)
  implicit val mat: ActorMaterializer = ActorMaterializer()
  implicit val ec: ExecutionContext   = system.dispatcher


  def publish(wsHit:WsHit):Unit = {

    system.actorSelection(s"akka://${WsUtils.actorSystemName}/user/*") ! wsHit

  }

  @SuppressWarnings(Array("org.wartremover.warts.Any"))
  def wsHit(): Flow[Any, Message, NotUsed] = {
    // Create an actor for every WebSocket connection, this will represent the contact point to reach the user
    val wsUser: ActorRef = system.actorOf(Ws.props())

    // Integration point between Akka Streams and the above actor

    val sink: Sink[Any, Future[Done]] = Sink.ignore


    // Integration point between Akka Streams and above actor
    import org.floxx.utils.floxxUtils._

    val source: Source[Message, NotUsed] =
      Source
        .actorRef(
          bufferSize       = 30,
          overflowStrategy = OverflowStrategy.dropNew
        )
        .map((h: Msg) => TextMessage.Strict(h.toJsonStr))
        .mapMaterializedValue { wsHandle =>
          // the wsHandle is the way to talk back to the user, our wsUser actor needs to know about this to send
          // messages to the WebSocket user
          wsUser ! ConnectWsHandle(wsHandle)
          // don't expose the wsHandle anymore
          NotUsed
        }
        .keepAlive(
          maxIdle = 10.seconds,
          () => TextMessage.Strict("Keep-alive message sent to WebSocket recipient")
        )

    Flow.fromSinkAndSource(sink, source)
  }

}
