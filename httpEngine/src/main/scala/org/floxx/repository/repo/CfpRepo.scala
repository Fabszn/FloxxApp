package org.floxx.repository.repo

import org.floxx.BusinessVal
import org.floxx.repository.FloxxRepository
import org.floxx.repository.Keys.SchedulesCfp
import org.floxx.utils.floxxUtils._

import scala.concurrent.Future

class CfpRepo extends FloxxRepository[SchedulesCfp] {
  override val _key: SchedulesCfp = SchedulesCfp()

  def allSlots: Future[BusinessVal[Set[String]]] =
    redis
      .keys(s"${_key._root_key}*")
      .mapFutureRight


}
