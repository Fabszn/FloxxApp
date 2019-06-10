package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.service.TrackService
import play.api.libs.json.Json

class TrackApi(cfpService: TrackService) extends PlayJsonSupport {

  case class SlotItem(id: String, name: String)
  object SlotItem {
    implicit val format = Json.format[SlotItem]
  }

  val route: server.Route =
    path("api" / "read") {
      get {
        onComplete(cfpService.readDataFromCfpDevoxx()) {
          _.handleResponse { nbConfImported =>
            complete(StatusCodes.OK -> s"${nbConfImported} conferences have been imported")
          }
        }
      }
    } ~ path("api" / "slots") {
      get {
        onComplete(cfpService.loadActiveSlotIds) {
          _.handleResponse { slots => {
            complete(StatusCodes.OK -> Map("slots" -> slots.map(s => Json.toJson(SlotItem(s, formatRoomVal(s))))))
          }
          }
        }
      }

    } ~ path("api" / "slots" / Segment) { key =>
      get {
        onComplete(cfpService.loadSlot(key)) {
          _.handleResponse {
            _.fold(complete(StatusCodes.NotFound -> s"None slot found for key ${key}")) { s =>
              complete(StatusCodes.OK -> Map("slot" -> s))
            }
          }
        }
      }


  }
}

object TrackApi {
  def apply(cfpService: TrackService): TrackApi = new TrackApi(cfpService)
}
