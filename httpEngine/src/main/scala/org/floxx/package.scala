package org


import org.slf4j.{Logger, LoggerFactory}
import zio._
import zio.interop.catz._
import zio.interop.catz.implicits.rts

package object floxx {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)


  case class UserInfo(userId: String, firstname: String, isAdmin: Boolean)

  object UserInfo {

    import org.http4s.circe.jsonOf
    import io.circe.generic.auto._
    implicit val format = jsonOf[Task, UserInfo]

    def empty: UserInfo = UserInfo("-","-",isAdmin = false)
  }

  sealed trait FloxxError  {

    val message: String
    override def toString: String = message

  }

  object FloxxError{
    val errorProc:Throwable => String = t => s"cause :${t.getCause} - message :${t.getMessage}"
  }

  @deprecated
  type IOVal[T] = Either[FloxxError, T]


  case class InvalidError(message: String) extends FloxxError

  case class AuthentificationError(message: String) extends Throwable

  case class IllegalStateError(message: String) extends Throwable

  case class DatabaseError(message: String) extends FloxxError

  case class ConfigurationError(message: String) extends FloxxError

  case class HttpExternalCallError(message:String) extends Throwable




}
