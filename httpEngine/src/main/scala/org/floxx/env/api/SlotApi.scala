package org.floxx.env.api

import io.circe.generic.auto._
import org.floxx.domain.Room
import org.floxx.domain.User.SimpleUser
import org.floxx.env.configuration.config
import org.floxx.env.service.{ timeUtils, trackService }
import org.floxx.model.{ Hit, SlotId }
import org.floxx.{ domain, UserInfo }
import org.http4s.AuthedRoutes
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf
import org.http4s.dsl.Http4sDsl
import org.slf4j.{ Logger, LoggerFactory }
import zio.interop.catz._

object SlotApi {

  val dsl = Http4sDsl[ApiTask]

  import dsl._

  case class SlotItem(id: SlotId, name: String)

  object SlotItem {
    implicit val format = jsonOf[ApiTask, SlotItem]
  }

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit: Hit = Hit(None, hitSlotId, percentage)
  }

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case GET -> Root / "read" as _ =>
      trackService.readDataFromCfpDevoxx() >>= (nb => Ok(s"${nb} conferences have been imported"))

    /**
      * All slots actives currently
      */
    case GET -> Root / "slots" / "_current" as _ =>
      for {
        conf <- config.getConf
        activeSlots <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        rep <- Ok(activeSlots)

      } yield rep

    /**
      * All slots (active or not) for all users
      */
    case GET -> Root / "slots" / "_all" as _ =>
      for {
        slots <- trackService.loadAllSlots
        rep <- Ok(slots)
      } yield rep

    /**
      * All slots (active or not) for current user
      */
    case GET -> Root / "slots" / "_currentUser" as user =>
      for {
        slots: Seq[domain.Slot] <- trackService.loadAllForCurrentUser(SimpleUser.Id(user.userId))
        rep <- Ok(slots)
      } yield rep

    /**
      * load only active slots for specific users
      */
    case GET -> Root / "slots" as user =>
      for {
        conf <- config.getConf
        slot <- trackService.loadSlotByCriterias(
          user.userId,
          timeUtils.extractDayAndStartTime(config = conf)
        )

        rep <- {
          slot match {
            case Some(s) =>
              Ok(s)
            case None => NotFound("None active slot has been found")
          }

        }
      } yield rep

    case GET -> Root / "slots" / idSlot as _ =>
      trackService.loadSlot(idSlot) >>= {
        _.fold(
          NotFound(s"None slot found for key ${idSlot}")
        ) { Ok(_) }
      }

    case GET -> Root / "rooms" / roomId as _ =>
      trackService.roomById(roomId) >>= {
        _.fold(
          NotFound(s"None room found for key ${roomId}")
        ) { s =>
          Ok("roomId" -> s)
        }
      }

    case GET -> Root / "rooms" as _ =>
      trackService.rooms >>= { (m: Map[Room.Id, Room.Name]) =>
        Ok(m.map { case (k, v) => k.value -> v.value })
      }

  }

}
