package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.model.Hit
import org.floxx.service.{SecurityService, TrackService, timeUtils}
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf

case class SlotItem(id: String, name: String)

object SlotItem {
  implicit val format = jsonOf[IO, SlotItem]
}
class TrackApi(cfpService: TrackService[IO], ss: SecurityService[IO]) extends Api with WithSecurity {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  def api: HandleQuery = {
    case req @ GET -> Root / "api" / "read" =>
      //authIO(req, ss) { _ =>
        handleResponse(cfpService.readDataFromCfpDevoxx()) { nb =>
          Ok(s"${nb} conferences have been imported")
        }
      //}

    case req @ GET -> Root / "api" / "slots" =>
      authIO(req, ss) { _ =>
        handleResponse(cfpService.loadSlotByCriterias(timeUtils.extractDayAndStartTime())) { activeSlots =>
          Ok(
            Map(
              "slots" -> activeSlots.map(
                s =>
                  SlotItem(
                    s.slotId,
                    s"${s.roomId} ${s.fromTime} - ${s.toTime}"
                  )
              )
            )
          )
        }
      }

    case req @ GET -> Root / "api" / "slots" / idSlot =>
      authIO(req, ss) { _ =>
        handleResponse(cfpService.loadSlot(idSlot)) {
          _.fold(
            NotFound(s"None slot found for key ${idSlot}")
          ) { s =>
            Ok(Map("slot" -> s))
          }
        }
      }

    case req @ GET -> Root / "api" / "rooms" / roomId =>
      authIO(req, ss) { _ =>
        handleResponse(cfpService.roomById(roomId)) {
          _.fold(
            NotFound(s"None room found for key ${roomId}")
          ) { s =>
            Ok("roomId" -> s)
          }
        }
      }
  }
}

object TrackApi {
  def apply(cfpService: TrackService[IO], securityService: SecurityService[IO]): TrackApi =
    new TrackApi(cfpService, securityService)
}
