package org.floxx.controller.io

import cats.effect.IO
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.service.{ timeUtils, HitService, SecurityService, TrackService }
import org.http4s.{ Request, Response }
import org.http4s.dsl.impl.Root
import org.http4s.dsl.io.{ ->, /, GET, POST }
import org.floxx.model.Hit
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.dsl.io._
import io.circe.generic.auto._

class TrackApi(cfpService: TrackService[IO], securityService: SecurityService[IO]) extends Api {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  def api: PartialFunction[Request[IO], IO[Response[IO]]] = {
    case GET -> Root / "api" / "read" => {
      handleResponse(cfpService.readDataFromCfpDevoxx()) { nb =>
        Ok(s"${nb} conferences have been imported")
      }
    }
    case GET -> Root / "api" / "slots" => {
      handleResponse(cfpService.loadActiveSlotIds(timeUtils.extractDayAndStartTime())) { activeSlots =>
        Ok(activeSlots)
      }
    }
    case GET -> Root / "api" / "slots" / idSlot => {
      handleResponse(cfpService.loadSlot(idSlot)) {
        _.fold(
          NotFound(s"None slot found for key ${idSlot}")
        ) { s =>
          Ok("slot" -> s)
        }
      }
    }
    case GET -> Root / "api" / "rooms" / roomId => {
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
