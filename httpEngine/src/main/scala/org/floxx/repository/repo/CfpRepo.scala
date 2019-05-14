package org.floxx.repository.repo

import org.floxx.BusinessVal
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.FloxxRepository
import org.floxx.repository.Keys.SchedulesCfp
import org.floxx.utils.floxxUtils._

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class CfpRepo extends FloxxRepository[SchedulesCfp] {
  override val _key: SchedulesCfp = SchedulesCfp()

  def allSlots: Future[BusinessVal[Set[String]]] = {
    import org.floxx.model.jsonModel._
    redis
      .keys(s"${_key._root_key}*").mapFutureRight
      /*.map(
        slots => {
          val r = slots.map(slot => {
           // Json.parse(slot).as[Slot]

          })
          println(r)
          Right(r)
        }
      )*/

    //Future.successful(Right(Set()))
  }
}
