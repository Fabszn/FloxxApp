package org.floxx.service

import cats.effect.IO
import cats.instances.future._
import com.github.nscala_time.time.StaticForwarderImports._
import org.floxx
import org.floxx.{ BusinessVal, IOVal }
import org.floxx.config.Config
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.repository.redis.CfpRepo
import org.floxx.utils.floxxUtils
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json

import scala.concurrent.Future

import org.http4s.client.blaze._
import org.http4s.client._
import scala.concurrent.ExecutionContext.Implicits.global

trait TrackService {

  def readDataFromCfpDevoxx(): IO[IOVal[Int]]
  def loadActiveSlotIds: Future[BusinessVal[Set[Slot]]]
  def loadSlot(id: String): Future[BusinessVal[Option[Slot]]]
  def roomById(id: String): Future[BusinessVal[Option[String]]]

}

class TrackServiceImpl(repoPg: CfpRepoPg, repo: CfpRepo) extends TrackService with WithTransact {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val urlCfp = Config.cfp.url
  val urlByDay = Config.cfp.days.map(d => {
    val url = s"${urlCfp}${d}"
    url
  })

  import org.http4s.client.blaze._
  import org.http4s.client._
  import scala.concurrent.ExecutionContext.Implicits.global

  override def readDataFromCfpDevoxx(): IO[IOVal[Int]] = {

    def s(url: String): IO[List[Slot]] =
      BlazeClientBuilder[IO](global).resource.use { client =>
        import org.floxx.model.jsonModel._
        client.get(url) { r =>
          r.as[String].map { rt =>
            val j = Json.parse(rt)
            (j \ "slots").as[List[Slot]]
          }
        }
      }

    logger.debug("read from CFP")

    val t: Seq[IO[List[Slot]]] = urlByDay.map(s).

    run(repoPg.addSlots(slots))

  }

  import doobie._
  import doobie.implicits._

  override def loadActiveSlotIds: Future[BusinessVal[Set[Slot]]] =
    /*for {
      slots <- repoPg.allSlotIds
    } yield slots.filter(extractDayAndStartTime)*/ Set.empty[Slot].futureRight

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
    Config.rooms.roomsMapping(id).futureRight

}
