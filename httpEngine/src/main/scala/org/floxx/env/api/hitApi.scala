package org.floxx.env.api

import io.circe.generic.auto._
import org.floxx.UserInfo
import org.floxx.env.service.hitService
import org.floxx.model.Hit
import org.http4s.{AuthedRequest, AuthedRoutes}
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import org.slf4j.{Logger, LoggerFactory}
import zio.interop.catz._

object hitApi {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  object HitRequest {
    implicit val format = jsonOf[ApiTask, HitRequest]
  }

  def api = AuthedRoutes.of[UserInfo,ApiTask] {
    case ct@POST -> Root / "api" / "hit" as user  =>
      for {
        hitItem <- ct.req.as[HitRequest]
        _ <- hitService.hit(hitItem.toHit)
        r <- Created("Hit created")
      } yield r

    case GET -> Root / "api" / "tracks-infos" as usesr=>
      hitService.currentTracksWithHitInfo >>= (r => Ok(r))

    case GET -> Root / "api" / "all-tracks-infos" as user =>
      hitService.allTracksWithHitInfo  >>=  (r => Ok(r))

    case GET -> Root / "api" / "all-tracks-infos-for-attendees" as user =>
      hitService.allTracksWithHitInfo >>=  (r => Ok(r))

    case  GET -> Root / "api" / "list-tracks" as user=> {
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
