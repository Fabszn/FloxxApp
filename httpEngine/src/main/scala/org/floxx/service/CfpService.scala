package org.floxx.service

import org.floxx.BusinessVal
import org.floxx.config.ConfigService
import org.floxx.repository.repo.CfpRepo
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }
import play.api.libs.json.Json

import scala.concurrent.Future

trait CfpService {

  def readDataFromCfpDevoxx(): Future[BusinessVal[Int]]

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
      import org.floxx.model.jsonModel.readers._
      val r = requests.get(u)
      val j = Json.parse(r.text)

      (j \ "slots").as[List[Slot]]
    })

    slots.foreach(s => repo.set(Json.toJson(s).toString(), Some(s.slotId)))
    slots.size.futureRight
  }
}
