package org.floxx.env.repository

import doobie.Update
import doobie.implicits._
import org.floxx.FloxxError
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.MappingUserSlot
import org.floxx.model.jsonModel.Slot
import zio._
import zio.interop.catz._

object cfpRepository {

  trait CfpRepo {

    def addSlots(slot: List[Slot]): IO[FloxxError, Int]
    def allSlotIds: IO[FloxxError, Set[Slot]]
    def allSlotIdsWithUserId(userID: String): IO[FloxxError, Set[Slot]]
    def getSlotById(id: String): IO[FloxxError, Option[Slot]]
    def drop: IO[FloxxError, Int]
    def addMapping(m: List[MappingUserSlot]): IO[FloxxError, Int]
  }

  case class CfpRepoPg(r: TxResource) extends CfpRepo with WithHandleError {

    override def drop: IO[FloxxError, Int] =
      sql"truncate table slot cascade".update.run.transact(r.xa).mapError(errorProc)

    override def addSlots(slots: List[Slot]): IO[FloxxError, Int] =
      Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)")
        .updateMany(slots)
        .transact(r.xa).mapError(errorProc)
        .mapError(errorProc)

    override def addMapping(m: List[MappingUserSlot]): IO[FloxxError,Int] =
      Update[MappingUserSlot]("insert into user_slots (userId,slotId) values(?,?)")
        .updateMany(m)
        .transact(r.xa).mapError(errorProc)

    override def allSlotIds(): IO[FloxxError, Set[Slot]] =
      sql"""select * from slot""".query[Slot].to[Set].transact(r.xa).mapError(errorProc)

    override def allSlotIdsWithUserId(userId: String): IO[FloxxError, Set[Slot]] =
      sql"""select * from
           |slot s inner join user_slots  us on s.slotid=us.slotid
           |where us.userid=$userId""".stripMargin.query[Slot].to[Set].transact(r.xa).mapError(errorProc)

    override def getSlotById(id: String): IO[FloxxError, Option[Slot]] =
      sql"""select * from slot where slotid=$id""".query[Slot].option.transact(r.xa).mapError(errorProc)
  }

  val layer: RLayer[Has[TxResource], Has[CfpRepo]] = (CfpRepoPg(_)).toLayer

}
