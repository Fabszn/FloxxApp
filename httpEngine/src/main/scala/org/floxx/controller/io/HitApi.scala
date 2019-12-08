package org.floxx.controller.io

import cats.effect.IO
import io.circe.generic.auto._
import org.floxx.controller.handleRespIO2Val.handleResponse
import org.floxx.controller.security.WithSecurity
import org.floxx.model.Hit
import org.floxx.service.{HitService, SecurityService}
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf
import org.http4s.{Request, Response}

class HitApi(hitService: HitService[IO], ss: SecurityService[IO]) extends Api with WithSecurity {

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  object HitRequest {
    implicit val format = jsonOf[IO, HitRequest]
  }

  def api: PartialFunction[Request[IO], IO[Response[IO]]] = {
    case req @ POST -> Root / "api" / "hit" =>
      authIO(req, ss) {req =>
        for {
          hitItem <- req.as[HitRequest]
          r <- handleResponse(hitService.hit(hitItem.toHit)) { nb =>
            Created(s"$nb has been created")
          }
        } yield r
      }

    case req @ GET -> Root / "api" / "tracks" => {
      authIO(req, ss) {_ => handleResponse(hitService.currentTrack) { Ok(_) } }
    }
  }
}

object HitApi {
  def apply(hitService: HitService[IO],ss:SecurityService[IO]): HitApi = new HitApi(hitService,ss)

}
