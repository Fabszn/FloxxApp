package org.floxx.env.repository

import doobie.Update
import doobie.implicits._
import org.floxx.domain.Mapping.UserSlot
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.jsonModel.Slot
import zio._
import zio.interop.catz._

object cfpRepository {

  trait SlotRepo {

    def mappingUserSlot: Task[Seq[UserSlot]]
    def addSlots(slot: List[Slot]): Task[Int]
    def allSlots: Task[Seq[Slot]]
    def allSlotsWithUserId(userID: String): Task[Set[Slot]]
    def getSlotById(id: String): Task[Option[Slot]]
    def drop: Task[Int]
    def addMapping(m: Mapping): Task[Int]
  }

  case class SlotRepoService(r: TxResource) extends SlotRepo {

    override def drop: Task[Int] =
      sql"truncate table slot cascade".update.run.transact(r.xa)

    override def addSlots(slots: List[Slot]): Task[Int] =
      Update[Slot]("insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)")
        .updateMany(slots)
        .transact(r.xa)

    override def addMapping(m: Mapping): Task[Int] =
      m.userId
        .fold(sql"""delete from user_slots where slotid=${m.slotId}""".update)(
          v =>
            Update[Mapping](s"""insert into user_slots  (userId,slotId) values (?,?)
        ON CONFLICT (slotId) DO update set userId='${v.value}'""")
              .toUpdate0(m)
        )
        .run
        .transact(r.xa)

    override def allSlots: Task[Seq[Slot]] =
      sql"""select * from slot""".query[Slot].to[Seq].transact(r.xa)

    override def allSlotsWithUserId(userId: String): Task[Set[Slot]] =
      sql"""select * from
           |slot s inner join user_slots  us on s.slotid=us.slotid
           |where us.userid=$userId""".stripMargin.query[Slot].to[Set].transact(r.xa)

    override def getSlotById(id: String): Task[Option[Slot]] =
      sql"""select * from slot where slotid=$id""".query[Slot].option.transact(r.xa)

    override def mappingUserSlot: Task[Seq[UserSlot]] =
      sql"""select u.userid,
            u.firstname,
            u.lastname, 
            s.slotid 
            from 
            user_slots us right join users u on us.userid = u.userid right 
            join slot s ON us.slotid =s.slotid"""
        .query[UserSlot]
        .to[Seq]
        .transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[SlotRepo]] = (SlotRepoService(_)).toLayer

}
