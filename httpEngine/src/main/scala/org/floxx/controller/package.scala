package org.floxx

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives.complete
import akka.http.scaladsl.server.Route
import org.floxx
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json

import scala.util.{ Failure, Success, Try }

package object controller {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

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
        case Failure(e) => {
          logger.error(s"Cause : [${e.getCause}]", e)
          complete(StatusCodes.InternalServerError -> s"An error occurred: ${e.getMessage}")
        }
      }
      pf.apply(response)
    }
  }

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

}
