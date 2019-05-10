package org.floxx.controller

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server
import akka.http.scaladsl.server.Directives.{ path, _ }
import ch.megard.akka.http.cors.scaladsl.CorsDirectives.cors
import de.heikoseeberger.akkahttpplayjson.PlayJsonSupport
import org.floxx.service.CfpService
import org.floxx.utils.floxxUtils._

class CfpApi(cfpService: CfpService) extends PlayJsonSupport {

  val route: server.Route = cors() {
    path("api" / "set") {
      get {
        onComplete(cfpService.readDataFromCfpDevoxx()) { nbConfImported =>
          complete(StatusCodes.OK -> s"${nbConfImported} conferences have been imported")
        }
      }
    } /*~ path("api" / "get") {
      get {
        onComplete(cfpService.readData().future) { _ =>
          complete(StatusCodes.OK -> "Data read")
        }
      }
    }*/

  }
}

object CfpApi {
  def apply(cfpService: CfpService): CfpApi = new CfpApi(cfpService)
}
