package org.floxx.controller.io

import io.circe.generic.auto._
import io.circe.syntax._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.env.service.hitService.HitService
import org.floxx.env.service.securityService.SecurityService
import org.floxx.model.Hit
import org.http4s.HttpRoutes
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.slf4j.{Logger, LoggerFactory}
import zio.IO
import zio.interop.catz._

class HitApi(hitService: HitService, ss: SecurityService /*, channel: Queue[IO, WebSocketFrame]*/)
  extends WithSecurity {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  object HitRequest {
    implicit val format = jsonOf[IO, HitRequest]
  }

  def api = HttpRoutes.of[IO] {
    case req @ POST -> Root / "api" / "hit" =>
      authIOu(req, ss) { (req, u) =>
        for {
          hitItem <- req.as[HitRequest]
          r <- handleResponse(hitService.hit(hitItem.toHit)) { nb =>
            Created(s"Hit created")
          }
          /*_ <- {
            logger.debug("hit channel")
          //  channel.enqueue1(Text(hitItem.toHit.asJson.noSpaces))
          }*/
        } yield r
      }
    case req @ GET -> Root / "api" / "tracks-infos" => {
      authIOu(req, ss) { (req, u) =>
        handleResponse(hitService.currentTracksWithHitInfo) {
          Ok(_)
        }
      }
    }
    case req @ GET -> Root / "api" / "all-tracks-infos" => {
      authIOu(req, ss) { (req, u) =>
        handleResponse(hitService.allTracksWithHitInfo) {
          Ok(_)
        }
      }
    }
    case req @ GET -> Root / "api" / "all-tracks-infos-for-attendees" => {
      handleResponse(hitService.allTracksWithHitInfo) {
        Ok(_)
      }
    }
    case req @ GET -> Root / "api" / "list-tracks" => {
      authIOu(req, ss) { (req, u) =>
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
  def apply(hitService: HitService[IO], ss: SecurityService[IO]/*, channel: Queue[IO, WebSocketFrame]*/): HitApi =
    new HitApi(hitService, ss/*, channel*/)

}
