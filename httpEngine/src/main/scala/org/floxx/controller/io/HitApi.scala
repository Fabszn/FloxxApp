package org.floxx.controller.io

import cats.effect.IO
import cats.effect.concurrent.MVar
import fs2.concurrent.Queue
import io.circe.Json.JString
import io.circe._
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.model.Hit
import org.floxx.service.{ HitService, SecurityService }
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf
import org.http4s.websocket.WebSocketFrame
import org.http4s.websocket.WebSocketFrame.Text
import io.circe.syntax._
import org.floxx.SlotId
import org.slf4j.{ Logger, LoggerFactory }

class HitApi(hitService: HitService[IO], ss: SecurityService[IO], channel: Queue[IO, WebSocketFrame])
    extends Api
    with WithSecurity {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(Some("2"), hitSlotId, percentage)
  }

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  object HitRequest {
    implicit val format = jsonOf[IO, HitRequest]
  }

  def api: HandleQuery = {
    case req @ POST -> Root / "api" / "hit" =>
      authIO(req, ss) { req =>
        for {
          hitItem <- req.as[HitRequest]
          r <- handleResponse(hitService.hit(hitItem.toHit)) { nb =>
            Created(s"Hit created")
          }
          _ <- {
            logger.debug("hit channel")
            channel.enqueue1(Text(hitItem.toHit.asJson.noSpaces))
          }
        } yield r
      }
    case req @GET -> Root / "api" / "tracks-infos" => {
      authIO(req, ss) { req =>
        handleResponse(hitService.currentTracksWithHitInfo) {
          Ok(_)
        }
      }
    }
    case req @GET -> Root / "api" / "all-tracks-infos" => {
      authIO(req, ss) { _ =>
        handleResponse(hitService.allTracksWithHitInfo) {
          Ok(_)
        }
      }
    }
    case req @GET -> Root / "api" / "all-tracks-infos-for-attendees" => {
        handleResponse(hitService.allTracksWithHitInfo) {
          Ok(_)
        }
    }
    case req @GET -> Root / "api" / "list-tracks" => {
      authIO(req, ss) { req =>
      handleResponse(hitService.allTracksWithHitInfo) { r =>
        {
          Ok(r.map {
            case (k, v) =>
              Map(
                ("Id", k.toString),
                ("Title", v.slot.talk.fold("no")(t => t.title))
              )
          })
        }

      }
      }
    }
  }
}

object HitApi {
  def apply(hitService: HitService[IO], ss: SecurityService[IO], channel: Queue[IO, WebSocketFrame]): HitApi =
    new HitApi(hitService, ss, channel)

}
