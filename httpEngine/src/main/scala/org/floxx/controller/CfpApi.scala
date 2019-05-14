package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives.{ path, _ }
import ch.megard.akka.http.cors.scaladsl.CorsDirectives.cors
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.service.CfpService
import play.api.libs.json.Json

class CfpApi(cfpService: CfpService) extends PlayJsonSupport {

  case class SlotItem(id: String, name: String)
  object SlotItem {
    implicit val format = Json.format[SlotItem]
  }

  val route: server.Route = cors() {
    path("api" / "read") {
      get {
        onComplete(cfpService.readDataFromCfpDevoxx()) { nbConfImported =>
          complete(StatusCodes.OK -> s"${nbConfImported} conferences have been imported")
        }
      }
    } ~ path("api" / "slots") {
      get {
        onComplete(cfpService.loadSlots) {
          _.handleResponse { slots =>
            complete(StatusCodes.OK -> Map("slots" -> slots.map(s => Json.toJson(SlotItem(s, formatRoomVal(s))))))
          }
        }
      }
    }
  }

}

object CfpApi {
  def apply(cfpService: CfpService): CfpApi = new CfpApi(cfpService)
}
