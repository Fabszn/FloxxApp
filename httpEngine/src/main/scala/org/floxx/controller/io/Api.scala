package org.floxx.controller.io

import cats.effect.IO
import org.http4s.{ Request, Response }

trait Api {

  def api: PartialFunction[Request[IO], IO[Response[IO]]]

}
