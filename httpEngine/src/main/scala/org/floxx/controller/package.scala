package org.floxx

import cats.implicits.catsSyntaxApplicativeError
import org.http4s.Response
import org.http4s.dsl.Http4sDsl
import org.slf4j.{Logger, LoggerFactory}
import zio._
import zio.interop.catz._

package object controller {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)


  private val dsl = Http4sDsl[Task]

  import dsl._




    def handleResponse[A](response: Task[A])(success: A => Task[Response[Task]]): Task[Response[Task]]= ???


  def handleError(error: FloxxError): Task[Response[Task]] = {
    logger.error(s"An error has been detected : ${error.message}")
    error match {
      case e: InvalidError => internaltHandle(e)
      case e: IllegalStateError => internaltHandle(e)
      //case e: AuthentificationError => authHandle(e)
    }
  }

  private def internaltHandle(message: FloxxError) = InternalServerError(message.toString)
 // private def authHandle(message: FloxxError)      = Forbidden(message.toString)


  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

}
