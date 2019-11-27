package org.floxx

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives.complete
import akka.http.scaladsl.server.Route
import cats.effect.IO
import org.floxx
import org.http4s.Response
import org.slf4j.{Logger, LoggerFactory}

import scala.util.{Failure, Success, Try}

package object controller {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

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

  object handleRespIO2Val {

    import org.http4s.dsl.io._
    def handleResponse[A](
                        response: IO[IOVal[A]]
    ): IO[Response[IO]] =
      response
        .flatMap({
          case Right(v) => Ok("")
          case Left(fe) =>
            floxx.handleError2(fe)
        })
        .handleErrorWith(internalError => InternalServerError(internalError.getMessage))
  }

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

}
