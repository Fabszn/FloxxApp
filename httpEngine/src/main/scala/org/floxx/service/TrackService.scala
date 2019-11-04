package org.floxx.service

import cats.effect.IO
import cats.instances.future._
import com.github.nscala_time.time.StaticForwarderImports._
import org.floxx.BusinessVal
import org.floxx.config.ConfigService
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.repository.redis.CfpRepo
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

trait TrackService[F[_]] {

  def readDataFromCfpDevoxx(): F[BusinessVal[Int]]
  def loadActiveSlotIds: F[BusinessVal[Set[String]]]
  def loadSlot(id: String): F[BusinessVal[Option[Slot]]]
  def roomById(id: String): F[BusinessVal[Option[String]]]

}

class TrackServiceImpl(repoPg: CfpRepoPg, repo: CfpRepo) extends TrackService[IO] with WithTransact {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val urlCfp = ConfigService.cfp.url
  val urlByDay = ConfigService.cfp.days.map(d => {
    val url = s"${urlCfp}${d}"
    url
  })

  override def readDataFromCfpDevoxx(): IO[BusinessVal[Int]] = {

    logger.debug("read from CFP")

    val slots = urlByDay.flatMap(u => {
      import org.floxx.model.jsonModel._
      val r = requests.get(u)
      val j = Json.parse(r.text)
      (j \ "slots").as[List[Slot]]
    })

    slots.foreach(s => {
      ConfigService.rooms.roomsMapping(s.roomId).map { r =>
        val sId = s"${s.day}_${r}_${s.fromTime}-${s.toTime}"
        logger.debug(slots.head.toJsonStr)
        run[Int] { repoPg.addSlot(s.copy(slotId = sId)) }
      }
    })
    IO(Right(slots.size))
  }

  import doobie._
  import doobie.implicits._

  override def loadActiveSlotIds: ConnectionIO[BusinessVal[Set[Slot]]] =
    for {
      slots <- repoPg.allSlotIds
    } yield slots.filter(extractDayAndStartTime)

  private def extractDayAndStartTime(slot: Slot): Boolean = {
    /*val t         = slot.split("_") //shedulecfp:thursday_234_235_10:45-14:15
    val day       = t(0).split(":")(1)
    val room      = t(1)
    val startTime = t(t.length - 1).split("-")(0)
    val endTime   = t(t.length - 1).split("-")(1)*/

    val currentDay = "thursday" //DateTime.now(DateTimeZone.UTC).dayOfWeek().getAsText

    val currentTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime("14:00:00").toLocalTime //DateTime.now().toLocalTime

    val trackStartTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.fromTime}:00}").toLocalTime
    val trackEndTime   = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.toTime}:00}").toLocalTime

    //filters
    (currentDay == slot.day) &&
    currentTime.isAfter(trackStartTime) &&
    currentTime.isBefore(trackEndTime) &&
    !(slot.roomId.startsWith("22") ||
    slot.roomId.startsWith("23") ||
    slot.roomId.startsWith("21") ||
    slot.roomId.startsWith("20"))

  }

  override def loadSlot(id: String): Future[BusinessVal[Option[Slot]]] =
    (for {
      v <- repo.get(id).eitherT
    } yield v.map(Json.parse(_).as[Slot])).value

  override def roomById(id: String): Future[BusinessVal[Option[String]]] =
    ConfigService.rooms.roomsMapping(id).futureRight

}
