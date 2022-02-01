package org.floxx.controller.io

import cats.effect.IO
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.service.{SecurityService, StatsService}
import org.slf4j.{Logger, LoggerFactory}
import org.http4s.circe.CirceEntityEncoder._
import zio.Task

class StatsApi(statService: StatsService[IO], ss: SecurityService[Task]) extends Api with WithSecurity {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  override def api: HandleQuery = {
    case req @ GET -> Root / "api" / "stats" / "slots" =>
      authIO(req, ss) { _ =>
        handleResponse(statService.slotsStatus) { statItems =>
          Ok(statItems)
        }
      }
  }

}

object StatsApi {
  def apply(statService: StatsService[IO], securityService: SecurityService[IO]): StatsApi = new StatsApi(statService,securityService)
}
