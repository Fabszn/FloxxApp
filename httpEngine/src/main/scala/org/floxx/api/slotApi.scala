package org.floxx.api

import io.circe.syntax._
import org.floxx.configuration.config
import org.floxx.domain.{Hit, Slot, Speaker}
import org.floxx.domain.Slot.Day
import org.floxx.domain.User.SimpleUser
import org.floxx.domain.jwt.UserInfo
import org.floxx.service.{adminService, timeUtils, trackService}
import org.floxx.utils.CirceValueClassCustomAuto._
import org.http4s.AuthedRoutes
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._

import scala.collection.SortedSet

object slotApi {

  val dsl = Http4sDsl[ApiTask]

  final case class DaySlotResponse(day: Day, slots: SortedSet[Slot], currentActiveSlot: Seq[Slot])

  import dsl._

  case class SlotItem(id: Slot.Id, name: String)

  object SlotItem {
    implicit val format = jsonOf[ApiTask, SlotItem]
  }

  case class HitRequest(hitSlotId: String, percentage: Int) {
    def toHit(userId: SimpleUser.Id): Hit =
      Hit(
        hitid      = None,
        hitSlotId  = hitSlotId,
        percentage = percentage,
        userId     = userId
      )
  }

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case GET -> Root / "read" as _ =>
      trackService.readDataFromCfpDevoxx() flatMap (nb => Ok(s"${nb} conferences have been imported"))

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
    case GET -> Root / "slots" / "_currentUser" as user => {
      implicit val ordering: Ordering[DaySlotResponse] =
        (x: DaySlotResponse, y: DaySlotResponse) => y.day.value.compareTo(x.day.value)

      for {
        conf <- config.getConf
        slots <- trackService.loadAllForCurrentUser(user.userId)
        currentSlotForCurrentUser <- trackService.loadSlotByCriterias(
          user.userId,
          timeUtils.extractDayAndStartTime(config = conf)
        )
        rep <- Ok(
          (slots
            .groupBy(_.day)
            .map {
              case (d, ss) => DaySlotResponse(d, SortedSet(ss: _*), currentSlotForCurrentUser)
            })
            .toSeq
            .sorted
            .asJson
        )

      } yield rep
    }

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
            case Nil => NotFound(List.empty[Slot])
            case s => Ok(s)
          }

        }
      } yield rep

    case GET -> Root / "slots" / idSlot as _ =>
      trackService.loadSlot(Slot.Id(idSlot)) flatMap {
        _.fold(
          NotFound(Option.empty[Slot])
        ) { Ok(_) }
      }

    case GET -> Root / "speakers" / idSlot as _ =>
      trackService.speakerBy(Slot.Id(idSlot)) flatMap {
        case Nil => NotFound(List.empty[Speaker])
        case speakers => Ok(speakers)
      }

    case GET -> Root / "rooms" as _ =>
      trackService.loadRooms flatMap (rs => Ok(rs))

    case GET -> Root / "planning" as _ =>
      adminService.planning flatMap { uss =>
        Ok(uss)
      }
    case GET -> Root / "days" as _ =>
      config.getConf flatMap { conf =>
        Ok(conf.cfp.days)
      }

  }

}
