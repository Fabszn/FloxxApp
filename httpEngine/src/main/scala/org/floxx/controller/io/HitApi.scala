package org.floxx.controller.io

import io.circe.generic.auto._
import org.floxx.AppLoader.appEnv.AppEnvironment

import org.floxx.env.service.hitService
import org.floxx.env.service.hitService.HitService
import org.floxx.env.service.securityService.SecurityService
import org.floxx.model.Hit
import org.http4s.HttpRoutes
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import org.slf4j.{Logger, LoggerFactory}
import zio.{Task, _}
import zio.interop.catz._
import zio.interop.catz.implicits.rts

@deprecated
class HitApi  {

  type ApiTask[A] = RIO[AppEnvironment, A]

  val dsl =  Http4sDsl[ApiTask]

  import dsl._

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  object HitRequest {
    implicit val format = jsonOf[Task, HitRequest]
  }

  def api = HttpRoutes.of[ApiTask] {
    case req @ POST -> Root / "api" / "hit" =>
      for {
        hitItem <- req.as[HitRequest]
        _ <- hitService.hit(hitItem.toHit)
        r <- Created("Hit created")
      } yield r

    case GET -> Root / "api" / "tracks-infos" =>
      hitService.currentTracksWithHitInfo >>= (r => Ok(r))

    case GET -> Root / "api" / "all-tracks-infos" =>
      hitService.allTracksWithHitInfo  >>=  (r => Ok(r))

    case GET -> Root / "api" / "all-tracks-infos-for-attendees" =>
      hitService.allTracksWithHitInfo >>=  (r => Ok(r))

    case  GET -> Root / "api" / "list-tracks" => {
      hitService.allTracksWithHitInfo >>= (r =>
        {
          Ok(r.map {
            case (k, v) =>
              Map(
                ("Id", k.toString),
                ("Title", v.slot.talk.fold("no")(t => t.title))
              )
          })
        })
      }
  }
}

@deprecated
object HitApi {
  def apply(hitService: HitService, ss: SecurityService /*, channel: Queue[IO, WebSocketFrame]*/ ): HitApi =
    new HitApi( )

}
