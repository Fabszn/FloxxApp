package org.floxx

import cats.effect.IO
import org.floxx
import org.http4s.Response
import org.slf4j.{Logger, LoggerFactory}

package object controller {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  object handleRespIO2Val {

    val logger: Logger = LoggerFactory.getLogger(this.getClass)

    import org.http4s.dsl.io._

    def handleResponse[A](
        response: IO[IOVal[A]]
    )(success: A => IO[Response[IO]]): IO[Response[IO]] =
      response
        .flatMap({
          case Right(v) => success(v)
          case Left(fe) =>
            floxx.handleError2(fe)
        })
        .handleErrorWith(internalError => {
          logger.error(s"Error : ${internalError.getCause} - ${internalError.getMessage}")
          logger.error(s"Details : ${internalError.getStackTrace.map(_.toString).mkString("\n")}")

          InternalServerError(internalError.getMessage)
        })
  }

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

}
