package org.floxx.service

import cats.instances.future._
import com.github.nscala_time.time.StaticForwarderImports._
import org.floxx.BusinessVal
import org.floxx.config.ConfigService
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.repo.CfpRepo
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

trait TrackService {

  def readDataFromCfpDevoxx(): Future[BusinessVal[Int]]
  def loadActiveSlotIds: Future[BusinessVal[Set[String]]]
  def loadSlot(id: String): Future[BusinessVal[Option[Slot]]]

}

class TrackServiceImpl(repo: CfpRepo) extends TrackService {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val urlCfp = ConfigService.cfp.url
  val urlByDay = ConfigService.cfp.days.map(d => {
    val url = s"${urlCfp}${d}"
    url
  })

  override def readDataFromCfpDevoxx(): Future[BusinessVal[Int]] = {
    implicit val slotReader =
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
        repo.set(Json.stringify(Json.toJson(s)), Some(sId))
      }
    })
    slots.size.futureRight
  }

  override def loadActiveSlotIds: Future[BusinessVal[Set[String]]] =
    (for {
      slots <- repo.allSlotIds.eitherT
      filtered <- slots.filter(extractDayAndStartTime).futureRightT
    } yield filtered).value

  private def extractDayAndStartTime(slot: String): Boolean = {
    val t         = slot.split("_") //shedulecfp:thursday_234_235_10:45-14:15
    val day       = t(0).split(":")(1)
    val room      = t(1)
    val startTime = t(t.length - 1).split("-")(0)
    val endTime   = t(t.length - 1).split("-")(1)

    val currentDay = "thursday" //DateTime.now(DateTimeZone.UTC).dayOfWeek().getAsText

    val currentTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime("14:00:00").toLocalTime //DateTime.now().toLocalTime

    val trackStartTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"$startTime:00").toLocalTime
    val trackEndTime   = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"$endTime:00").toLocalTime

    //filters
    (currentDay == day) &&
    currentTime.isAfter(trackStartTime) &&
    currentTime.isBefore(trackEndTime) &&
    !(room.startsWith("22") ||
    room.startsWith("23") ||
    room.startsWith("21") ||
    room.startsWith("20"))

  }

  override def loadSlot(id: String): Future[BusinessVal[Option[Slot]]] =
    (for {
      v <- repo.get(id).eitherT
    } yield v.map(Json.parse(_).as[Slot])).value

}
