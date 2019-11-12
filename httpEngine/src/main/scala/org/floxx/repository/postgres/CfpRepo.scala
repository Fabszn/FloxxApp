package org.floxx.repository.postgres

import cats.implicits._
import doobie._
import doobie.implicits._
import org.floxx.IOVal
import org.floxx.config.Config
import org.floxx.model.jsonModel.Slot

trait CfpRepo[F[_]] {

  def addSlots(slot: List[Slot]): F[IOVal[Int]]
  def allSlotIds: F[IOVal[Set[Slot]]]
  def getSlotById(id: String): F[IOVal[Option[Slot]]]

}

class CfpRepoPg extends CfpRepo[ConnectionIO] {

  override def addSlots(slots: List[Slot]): ConnectionIO[IOVal[Int]] = {

    val ioSlots = slots
      .filter(_.talk.isDefined)
      .flatMap(s => {
        Config.rooms.roomsMapping(s.roomId).map { r =>
          val sId = s"${s.day}_${r}_${s.fromTime}-${s.toTime}"
          s.copy(slotId = sId, roomId = r)
        }
      })
    Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)").updateMany(ioSlots).attempt

  }

  override def allSlotIds: doobie.ConnectionIO[IOVal[Set[Slot]]] = sql"""select * from slot""".query[Slot].to[Set].attempt

  override def getSlotById(id: String): doobie.ConnectionIO[IOVal[Option[Slot]]] =
    sql"""select * from slot where slotid=$id""".query[Slot].option.attempt
}
