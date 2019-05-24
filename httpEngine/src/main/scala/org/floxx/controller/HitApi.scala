package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.service.HitService
import play.api.libs.json.Json

class HitApi(hitService: HitService) extends PlayJsonSupport {

  case class HitItem(slotId: String, percentage: String)
  object HitItem {
    implicit val format = Json.format[HitItem]
  }

  val route: server.Route =
    path("api" / "hit") {
      post {
        entity(as[HitItem]) { hitItem =>
          onComplete(hitService.hit(hitItem.slotId, hitItem.percentage)) {
            _.handleResponse(result => complete(StatusCodes.Created -> s"hit created ${hitItem} ${result}"))
          }
        }
      }
    }


}

object HitApi {
  def apply(hitService: HitService): HitApi = new HitApi(hitService)

}
