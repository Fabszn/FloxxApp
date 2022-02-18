package org.floxx.env.api

import org.slf4j.{Logger, LoggerFactory}
import org.http4s.HttpRoutes
import org.http4s.dsl.Http4sDsl
import zio._

object statApi {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  def api = HttpRoutes.of[ApiTask] {
    case req @ GET -> Root / "api" / "stats" / "slots" =>
        statService.slotsStatus) { statItems =>
          Ok(statItems)
      }
  }

}
