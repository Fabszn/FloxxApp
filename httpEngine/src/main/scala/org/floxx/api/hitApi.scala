package org.floxx.api

import io.circe.syntax._
import org.floxx.domain.Overflow.{AffectedRoom, Level}
import org.floxx.domain.User.SimpleUser
import org.floxx.service.hitService
import org.floxx.domain._
import org.http4s.{AuthedRoutes, EntityDecoder}
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe._
import org.http4s.dsl.Http4sDsl
import io.scalaland.chimney.dsl._
import org.floxx.domain.jwt.UserInfo
import org.floxx.util.CirceValueClassCustomAuto._
import zio.interop.catz._

import java.time.ZonedDateTime

object  hitApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._



  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit(userId: SimpleUser.Id): Hit =
      Hit(
        hitid      = None,
        hitSlotId  = hitSlotId,
        percentage = percentage,
        userId     = userId
      )
  }

  object HitRequest {
    implicit val format: EntityDecoder[ApiTask, HitRequest] = jsonOf[ApiTask, HitRequest]
  }

  final case class OverflowRequest(slotId: Slot.Id, level: Level)
  object OverflowRequest {
    implicit val format = jsonOf[ApiTask, OverflowRequest]
  }

  final case class AffectedRoomRequest(slotId: Slot.Id, affectedRoom: Option[AffectedRoom])
  object AffectedRoomRequest {
    implicit val format = jsonOf[ApiTask, AffectedRoomRequest]
  }

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case ct @ POST -> Root / "hit" as user =>
      for {
        hitItem <- ct.req.as[HitRequest]
        _ <- hitService.hit(hitItem.toHit(user.userId))
        r <- Created("Hit created")
      } yield r

    case ct @ POST -> Root / "overflow" as _ => {
      for {
        overflowRequest <- ct.req.as[OverflowRequest]
        of = overflowRequest
          .into[Overflow]
          .withFieldConst(
            _.datetime,
            Overflow.DateTime(ZonedDateTime.now(defaultZoneId))
          )
          .transform
        _ <- hitService.saveOrUpdateOverflow(of)
        r <- Created("Overflow has been persisted (or update)")
      } yield r
    }
    case DELETE -> Root / "overflow" / sid as _ => {
      for {
        _ <- hitService.removeOverflow(Slot.Id(sid))
        r <- Ok("Overflow has been deleted")
      } yield r
    }
    case ct @ POST -> Root / "overflow" / "_affectedRoom" as _ => {
      for {
        affectedRoomRequest <- ct.req.as[AffectedRoomRequest]
        _ <- hitService.saveAffectedRoom(
          affectedRoomRequest.slotId,
          affectedRoomRequest.affectedRoom
        )
        r <- Created("SlotId has been affected")
      } yield r
    }
    case GET -> Root / "tracks-infos" as _ =>
      hitService.currentTracksWithHitInfo flatMap (Ok(_))

    case GET -> Root / "tracks-infos" / slotId as _ =>
      hitService.tracksWithHitInfoBy(Slot.Id(slotId)) flatMap (r => {
        implicitly(r.asJson)
        Ok(r.asJson)
      })

    case GET -> Root / "all-tracks-infos" as _ =>
      hitService.allTracksWithHitInfo flatMap (Ok(_))

    case GET -> Root / "all-tracks-infos-for-attendees" as _ =>
      hitService.allTracksWithHitInfo flatMap (Ok(_))
  }

}
