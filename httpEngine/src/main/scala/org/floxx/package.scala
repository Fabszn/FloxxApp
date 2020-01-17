package org


import cats.effect.IO
import org.http4s.Response
import org.http4s.dsl.io._

package object floxx {

  type Token = String

  type SlotId = String

  sealed trait FloxxError {
    val code: String
    val message: String

    override def toString: String = s"$code - $message"

  }

  @deprecated("please use IOVal type")
  type BusinessVal[T] = Either[FloxxError, T]
  type IOVal[T]       = Either[FloxxError, T]

  case class InvalidError(message: String) extends FloxxError {
    val code: String = "000"
  }

  case class AuthentificationError(message: String) extends FloxxError {
    val code: String = "001"
  }


  def handleError2(businessError: FloxxError): IO[Response[IO]] =
    businessError match {
      case e: InvalidError => internaltHandle2(e)
      case e: AuthentificationError => authHandle2(e)
    }

  private def internaltHandle2(message: FloxxError): IO[Response[IO]] = InternalServerError(message.toString)
  private def authHandle2(message: FloxxError): IO[Response[IO]]      = Forbidden(message.toString)

}
