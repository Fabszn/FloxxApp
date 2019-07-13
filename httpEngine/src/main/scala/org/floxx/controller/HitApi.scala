package org.floxx.controller

import akka.http.scaladsl.model.{ ContentTypes, HttpEntity, StatusCodes }
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.controller.stream.Ws.WsHit
import org.floxx.controller.stream.WsUtils
import org.floxx.model.Hit
import org.floxx.service.HitService
import org.floxx.utils.floxxUtils._
import play.api.libs.json.Json

class HitApi(hitService: HitService) extends PlayJsonSupport {

  case class HitRequest(hitSlotId: String, percentage: String) {
    def toHit: Hit = Hit(hitSlotId, percentage)
  }

  object HitRequest {
    implicit val format = Json.format[HitRequest]
  }

  val route: server.Route =
  path("api" / "hit") {
    post {
      entity(as[HitRequest]) { hitItem =>
        onComplete(hitService.hit(hitItem.toHit)) {

          _.handleResponse(result => {
            WsUtils.publish(WsHit(hitItem.toHit.toJsonStr))

            complete(StatusCodes.Created -> s"hit created ${hitItem} ${result}")
          })
        }
      }
    }
  } ~
  path("api" / "tracks") {
    get {
      onComplete(hitService.currentTrack) {
        _.handleResponse(result => complete(StatusCodes.OK -> Json.toJson(result)))
      }
    }
  } ~
  path("api" / "send") {
    get {

      complete(
        HttpEntity(
          ContentTypes.`text/html(UTF-8)`,
          "<h1>Say hello to akka-http</h1>"
        )
      )
    }
  } ~ path("api" / "stream" / "hit") {
    handleWebSocketMessages(WsUtils.wsHit)
  }

}

object HitApi {
  def apply(hitService: HitService): HitApi = new HitApi(hitService)

}
