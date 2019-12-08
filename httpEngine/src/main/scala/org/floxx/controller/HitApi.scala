package org.floxx.controller

import akka.http.scaladsl.model.{ ContentTypes, HttpEntity, StatusCodes }
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.directives.Credentials
import cats.effect.IO
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.controller.stream.Ws.WsHit
import org.floxx.controller.stream.WsUtils
import org.floxx.model.Hit
import org.floxx.service.HitService
import org.floxx.utils.floxxUtils._
import play.api.libs.json.Json
import org.floxx.controller.security.WithSecurity
import org.floxx.service.SecurityService

class HitApi(hitService: HitService[IO], securityService: SecurityService[IO]) extends PlayJsonSupport with WithSecurity {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  object HitRequest {
    implicit val format = Json.format[HitRequest]
  }

  val route: server.Route =
    /*path("api" / "hit") { //OK

  post {
     auth(securityService) { _ =>
       entity(as[HitRequest]) { hitItem =>
         onComplete(hitService.hit(hitItem.toHit).unsafeToFuture()) {
           _.handleResponse(result => {
             WsUtils.publish(WsHit(hitItem.toHit.toJsonStr))
             complete(StatusCodes.Created -> s"hit created ${hitItem} ${result}")
           })
         }
       }
     }
   }
    } ~ */
    path("api" / "tracks") { // OK
      get {
        auth(securityService) { _ =>
          onComplete(hitService.currentTrack.unsafeToFuture()) {
            _.handleResponse(result => complete(StatusCodes.OK -> Json.toJson(result)))
          }
        }
      }
    } ~
    path("api" / "send") {
      get {
        auth(securityService) { _ =>
          complete(
            HttpEntity(
              ContentTypes.`text/html(UTF-8)`,
              "<h1>Say hello to akka-http</h1>"
            )
          )
        }
      }
    } ~ path("api" / "stream" / "hit") {
      handleWebSocketMessages(WsUtils.wsHit)
    }
}

object HitApi {
  def apply(hitService: HitService[IO], securityService: SecurityService[IO]): HitApi = new HitApi(hitService, securityService)

}
