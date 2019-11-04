package org.floxx.repository.postgres

import doobie._
import doobie.implicits._
import org.floxx.model.jsonModel.{ Slot }

trait CfpRepo[F[_]] {

  def addSlot(slot: Slot): F[Int]
  def allSlotIds: F[Set[Slot]]

}

class CfpRepoPg extends CfpRepo[ConnectionIO] {
  override def addSlot(slot: Slot): ConnectionIO[Int] =
    sql"""insert into slot (slotId, roomId,fromTime,toTime,day) values
          (${slot.slotId}, ${slot.roomId},${slot.fromTime},${slot.toTime},${slot.talk}, ${slot.day})""".update.run

  override def allSlotIds: doobie.ConnectionIO[Set[Slot]] = sql"""select * from slot""".query[Slot].to[Set]
}
