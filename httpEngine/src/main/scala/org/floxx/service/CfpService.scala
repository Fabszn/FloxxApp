package org.floxx.service

import org.floxx.BusinessVal
import org.floxx.config.ConfigService
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.repo.CfpRepo
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json
import cats.instances.future._
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

trait CfpService {

  def readDataFromCfpDevoxx(): Future[BusinessVal[Int]]
  def loadSlots: Future[BusinessVal[Set[String]]]
  def loadSlot(id: String): Future[BusinessVal[Option[Slot]]]

}

class CfpServiceImpl(repo: CfpRepo) extends CfpService {

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

  override def loadSlots: Future[BusinessVal[Set[String]]] = repo.allSlots

  override def loadSlot(id: String): Future[BusinessVal[Option[Slot]]] =
    (for {
      v <- repo.get(id).eitherT
    } yield v.map(Json.parse(_).as[Slot])).value

}
