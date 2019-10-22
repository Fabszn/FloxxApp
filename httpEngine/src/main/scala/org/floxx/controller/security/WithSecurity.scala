package org.floxx.controller.security

import akka.http.scaladsl.server.Directives.authenticateOAuth2
import akka.http.scaladsl.server.directives.{ AuthenticationDirective, Credentials }
import org.floxx.service.SecurityService

trait WithSecurity {

  def auth(ss: SecurityService): AuthenticationDirective[String] = authenticateOAuth2[String](
    "floxx",
    d => {
      val r = d match {
        case p @ Credentials.Provided(id) => { ss.checkAuthentification(id) }
        case _ => None
      }
      r
    }
  )

}
