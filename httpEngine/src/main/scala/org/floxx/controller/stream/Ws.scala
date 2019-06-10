package org.floxx.controller.stream

import akka.actor.{Actor, ActorLogging, ActorRef, Props}
import akka.event.LoggingReceive
import org.floxx.controller.stream.Ws._
import play.api.libs.json.{Format, Json}

class Ws() extends Actor with ActorLogging {
  private var wsHandle: Option[ActorRef] = None

  private def messageWsHandle(e: Event): Unit =
    wsHandle.fold(())(actor => actor ! e)

  @SuppressWarnings(Array("org.wartremover.warts.Any"))
  override def receive: Receive = LoggingReceive {

    case c: Command =>
      c match {
        case ConnectWsHandle(actorRef) =>
          wsHandle = Some(actorRef)
        case WsHit(m) =>
          log.debug("Hit message")
          val msg = Msg(m)
          messageWsHandle(msg)
      }

    case e: Event =>
      e match {
        case c: Msg => messageWsHandle(c)
      }
  }
}

object Ws {

  sealed trait Command

  case class ConnectWsHandle(actorRef: ActorRef) extends Command

  case class WsHit(msg: String) extends Command

  object WsHit {
    implicit val format: Format[WsHit] = Json.format[WsHit]
  }

  case object WsHandleDropped extends Command

  sealed trait Event

  case class Msg(hit: String) extends Event
  object Msg{
    implicit val format: Format[Msg] = Json.format[Msg]
  }

  def props(): Props = Props(new Ws())
}
