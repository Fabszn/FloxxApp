package org.floxx.controller.io

import cats.effect.IO
import org.http4s.{ Request, Response }

trait Api {

  type HandleQuery = PartialFunction[Request[IO], IO[Response[IO]]]

  def api: HandleQuery

}
