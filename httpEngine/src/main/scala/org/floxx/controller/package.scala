package org.floxx

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives.complete
import akka.http.scaladsl.server.Route
import org.floxx
import play.api.libs.json.Json

import scala.util.{Failure, Success, Try}

package object controller {

  case class Link(idAttendee: Long, idSponsor: Long)

  object Link {
    implicit val formatLink = Json.format[Link]
  }

  implicit class handleResp[A](response: Try[BusinessVal[A]]) {

    def handleResponse(
        success: A => Route
    ): Route = {

      val pf: PartialFunction[Try[BusinessVal[A]], Route] = {
        case Success(v) =>
          v.fold(
            be => complete(floxx.handleError(be)),
            (r: A) => success(r)
          )
        case Failure(e) => complete(StatusCodes.InternalServerError -> s"An error occurred: ${e.getMessage}")
      }
      pf.apply(response)
    }
  }

}
