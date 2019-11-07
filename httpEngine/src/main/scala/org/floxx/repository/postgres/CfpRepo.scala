package org.floxx.repository.postgres

import doobie._
import doobie.implicits._
import org.floxx.model.jsonModel.Slot
import cats._
import cats.data._
import cats.implicits._
import org.floxx
import org.floxx.{BusinessVal, IOVal}
import org.floxx.config.Config

trait CfpRepo[F[_]] {

  def addSlots(slot: List[Slot]): F[IOVal[Int]]
  def allSlotIds: F[Set[Slot]]

}

class CfpRepoPg extends CfpRepo[ConnectionIO] {
  override def addSlots(slots: List[Slot]): ConnectionIO[IOVal[Int]] = {

    val ioSlots = slots
      .filter(_.talk.isDefined)
      .flatMap(s => {
        Config.rooms.roomsMapping(s.roomId).map { r =>
          val sId = s"${s.day}_${r}_${s.fromTime}-${s.toTime}"
          s.copy(slotId = sId)
        }
      })
   Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)").updateMany(slots).attempt


  }

  override def allSlotIds: doobie.ConnectionIO[Set[Slot]] = sql"""select * from slot""".query[Slot].to[Set]
}
