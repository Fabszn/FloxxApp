package org.floxx.repository.postgres

import cats.implicits._
import doobie._
import doobie.implicits._
import org.floxx.IOVal
import org.floxx.model.MappingUserSlot
import org.floxx.model.jsonModel.Slot

trait CfpRepo[F[_]] {

  def addSlots(slot: List[Slot]): F[IOVal[Int]]
  def allSlotIds: F[IOVal[Set[Slot]]]
  def getSlotById(id: String): F[IOVal[Option[Slot]]]
  def drop: ConnectionIO[IOVal[Int]]
  def addMapping(m: List[MappingUserSlot]): ConnectionIO[IOVal[Int]]

}

class CfpRepoPg extends CfpRepo[ConnectionIO] {

  override def drop: ConnectionIO[IOVal[Int]] =
    sql"truncate table slot cascade".update.run.map(Right(_))

  override def addSlots(slots: List[Slot]): ConnectionIO[IOVal[Int]] =
    Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)")
      .updateMany(slots)
      .map(Right(_))

  override def addMapping(m: List[MappingUserSlot]): ConnectionIO[IOVal[Int]] =
    Update[MappingUserSlot]("insert into user_slots (userId,slotId) values(?,?)")
      .updateMany(m)
      .map(Right(_))

  override def allSlotIds: doobie.ConnectionIO[IOVal[Set[Slot]]] =
    sql"""select * from slot""".query[Slot].to[Set].map(Right(_))

  override def getSlotById(id: String): doobie.ConnectionIO[IOVal[Option[Slot]]] =
    sql"""select * from slot where slotid=$id""".query[Slot].option.map(Right(_))
}
