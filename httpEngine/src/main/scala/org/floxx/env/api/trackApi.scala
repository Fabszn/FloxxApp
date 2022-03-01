package org.floxx.env.api

import org.floxx.UserInfo
import org.floxx.env.configuration.config
import org.floxx.env.service.{timeUtils, trackService}
import org.floxx.model.{Hit, SlotId}
import org.http4s.{AuthedRoutes, HttpRoutes}
import org.http4s.circe.CirceEntityEncoder._
import org.http4s.circe.jsonOf
import io.circe.generic.auto._
import org.http4s.dsl.Http4sDsl
import org.slf4j.{Logger, LoggerFactory}
import zio.interop.catz._

object trackApi {

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
    case GET -> Root / "read" as user=>
      trackService.readDataFromCfpDevoxx() >>= (nb => Ok(s"${nb} conferences have been imported"))

    case GET -> Root / "slots" / "_current" as user =>
      for {
        conf <- config.getConf
        activeSlots <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        rep <- Ok(
          Map(
            "slots" -> activeSlots.map(
              s =>
                SlotItem(
                  s.slotId,
                  s"${s.roomId} ${s.fromTime} - ${s.toTime}"
                )
            )
          )
        )
      } yield rep

    case GET -> Root  / "slots" as user=> {
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

    }

    case req@GET -> Root / "slots" / idSlot as user =>
      trackService.loadSlot(idSlot) >>= {
        _.fold(
          NotFound(s"None slot found for key ${idSlot}")
        ) { s =>
          Ok(Map("slot" -> s))
        }
      }

    case GET -> Root / "rooms" / roomId as user=>
      trackService.roomById(roomId) >>= {
        _.fold(
          NotFound(s"None room found for key ${roomId}")
        ) { s =>
          Ok("roomId" -> s)
        }
      }
  }

}
