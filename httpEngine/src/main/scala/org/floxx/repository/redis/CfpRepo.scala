package org.floxx.repository.redis

import org.floxx.BusinessVal
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.redis.Keys.SchedulesCfp
import org.floxx.utils.floxxUtils._
import play.api.libs.json.Json

import scala.concurrent.{ ExecutionContext, Future }

@deprecated
class CfpRepo extends FloxxRepository[SchedulesCfp] {
  override val _key: SchedulesCfp = SchedulesCfp()

  def allSlotIds: Future[BusinessVal[Set[String]]] =
    redis
      .keys(s"${_key._root_key}*")
      .mapFutureRight

  def getSlotBy(slotIds: Set[String])(implicit ec: ExecutionContext): Future[BusinessVal[Set[Slot]]] =
    (for {
      sIds <- slotIds.future
      slots <- Future.sequence(
        sIds.map(id => redis.get(id).filter(_.nonEmpty).map(slot => Json.parse(slot.getOrElse("")).as[Slot]))
      )
    } yield slots).mapFutureRight

}
