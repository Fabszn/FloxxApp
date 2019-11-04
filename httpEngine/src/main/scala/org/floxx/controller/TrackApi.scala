package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.directives.Credentials
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.controller.security.WithSecurity
import org.floxx.service.{ SecurityService, TrackService }
import play.api.libs.json.Json
import cats.effect.IO

/**
  * This controler provide all endpoints that allow to get information from cfp data
  *
  * @param cfpService
  */
class TrackApi(cfpService: TrackService[IO], securityService: SecurityService) extends PlayJsonSupport with WithSecurity {

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
        auth(securityService) { _ =>
          onComplete(cfpService.loadActiveSlotIds) {
            _.handleResponse { slots =>
              {
                complete(StatusCodes.OK -> Map("slots" -> slots.map(s => Json.toJson(SlotItem(s, formatRoomVal(s))))))
              }
            }
          }
        }
      }

    } ~ path("api" / "slots" / Segment) { key =>
      get {
        auth(securityService) { _ =>
          onComplete(cfpService.loadSlot(key)) {
            _.handleResponse {
              _.fold(complete(StatusCodes.NotFound -> s"None slot found for key ${key}")) { s =>
                complete(StatusCodes.OK -> Map("slot" -> s))
              }
            }
          }
        }
      }
    } ~ path("api" / "rooms" / Segment) { key =>
      get {
        auth(securityService) { _ =>
          onComplete(cfpService.roomById(key)) {
            _.handleResponse {
              _.fold(complete(StatusCodes.NotFound -> s"None room found for key ${key}")) { s =>
                complete(StatusCodes.OK -> Map("roomId" -> s))
              }
            }
          }
        }
      }
    }
}

object TrackApi {
  def apply(cfpService: TrackService, securityService: SecurityService): TrackApi = new TrackApi(cfpService, securityService)
}
