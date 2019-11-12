package org

import akka.http.scaladsl.model.{ StatusCode, StatusCodes }

package object floxx {

  type Token = String

  type SlotId = String

  sealed trait BusinessError {
    val code: String
    val message: String

    override def toString: String = s"$code - $message"

  }

  @deprecated("please use IOVal type")
  type BusinessVal[T] = Either[BusinessError, T]
  type IOVal[T] = Either[Throwable, T]

  case class InvalidError(message: String) extends BusinessError {
    val code: String = "000"
  }

  case class AuthentificationError(message: String) extends BusinessError {
    val code: String = "001"
  }

  def handleError(businessError: BusinessError): (StatusCode, String) =
    businessError match {
      case e: InvalidError => internaltHandle(e)
      case e: AuthentificationError => authHandle(e)
    }

  def handleError(exception: Throwable): (StatusCode, String) =
    StatusCodes.InternalServerError -> exception.getMessage

  private def internaltHandle(message: BusinessError): (StatusCode, String) = StatusCodes.InternalServerError -> message.toString
  private def authHandle(message: BusinessError): (StatusCode, String)      = StatusCodes.Forbidden -> message.toString


}
