package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.model.Hit
import org.floxx.service.HitService
import play.api.libs.json.Json

class HitApi(hitService: HitService) extends PlayJsonSupport {

  val route: server.Route =
  path("api" / "hit") {
    post {
      entity(as[Hit]) { hitItem =>
        onComplete(hitService.hit(hitItem)) {
          _.handleResponse(result => complete(StatusCodes.Created -> s"hit created ${hitItem} ${result}"))
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
  }

}

object HitApi {
  def apply(hitService: HitService): HitApi = new HitApi(hitService)

}
