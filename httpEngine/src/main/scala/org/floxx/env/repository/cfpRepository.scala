package org.floxx.env.repository

import doobie.Update
import doobie.implicits._
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.MappingUserSlot
import org.floxx.model.jsonModel.Slot
import zio._
import zio.interop.catz._

object cfpRepository {

  trait CfpRepo {

    def addSlots(slot: List[Slot]): Task[Int]
    def allSlotIds: Task[Set[Slot]]
    def allSlotIdsWithUserId(userID: String): Task[Set[Slot]]
    def getSlotById(id: String): Task[Option[Slot]]
    def drop: Task[Int]
    def addMapping(m: List[MappingUserSlot]): Task[Int]
  }

  case class CfpRepoPg(r: TxResource) extends CfpRepo  {

    override def drop: Task[Int] =
      sql"truncate table slot cascade".update.run.transact(r.xa)

    override def addSlots(slots: List[Slot]): Task[Int] =
      Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)")
        .updateMany(slots)
        .transact(r.xa)


    override def addMapping(m: List[MappingUserSlot]): Task[Int] =
      Update[MappingUserSlot]("insert into user_slots (userId,slotId) values(?,?)")
        .updateMany(m)
        .transact(r.xa)

    override def allSlotIds(): Task[Set[Slot]] =
      sql"""select * from slot""".query[Slot].to[Set].transact(r.xa)

    override def allSlotIdsWithUserId(userId: String): Task[Set[Slot]] =
      sql"""select * from
           |slot s inner join user_slots  us on s.slotid=us.slotid
           |where us.userid=$userId""".stripMargin.query[Slot].to[Set].transact(r.xa)

    override def getSlotById(id: String): Task[Option[Slot]] =
      sql"""select * from slot where slotid=$id""".query[Slot].option.transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[CfpRepo]] = (CfpRepoPg(_)).toLayer

}
