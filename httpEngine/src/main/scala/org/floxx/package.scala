package org


import org.floxx.domain.AuthUser.Login
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.error.FloxxError
import org.slf4j.{Logger, LoggerFactory}
import zio._
import zio.interop.catz._
import zio.interop.catz.implicits.rts

package object floxx {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)


  case class UserInfo(userId: SimpleUser.Id, firstname: Login, isAdmin: Boolean)

  object UserInfo {

    import org.http4s.circe.jsonOf
    import io.circe.generic.auto._
    implicit val format = jsonOf[Task, UserInfo]

    def empty: UserInfo = UserInfo(SimpleUser.Id("-"),Login("-"),isAdmin = false)
  }









}
