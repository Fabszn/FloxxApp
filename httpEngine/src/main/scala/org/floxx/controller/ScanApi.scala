package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives.{path, _}
import ch.megard.akka.http.cors.scaladsl.CorsDirectives.cors
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.service.ScanService
import org.floxx.utils.leadScanUtils._

class ScanApi(scanService: ScanService) extends PlayJsonSupport {

  val route: server.Route = cors() {
    path("api" / "link") {
      post {
        entity(as[Link]) { link =>
          onComplete(scanService.linked(link.idAttendee, link.idSponsor).future) {
            _.handleResponse(msg => complete(StatusCodes.Created -> msg.message))
          }
        }
      }
    } ~ path("hello") {
      get{complete(StatusCodes.OK -> "hello")}
    }

  }
}

object ScanApi {
  def apply(scanService: ScanService): ScanApi = new ScanApi(scanService)
}
