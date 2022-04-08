package org.floxx.env.repository

import cats.implicits._
import doobie.Update
import doobie.implicits._
import org.floxx.domain
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.User.SimpleUser
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.repository.DbTransactor.TxResource
import zio._
import zio.interop.catz._

object cfpRepository {

  trait SlotRepo {

    def mappingUserSlot: Task[Seq[UserSlot]]

    def addSlots(slots: Seq[Slot]): Task[Int]
    def allSlots: Task[Seq[Slot]]
    def allSlotsWithUserId(userID: String): Task[Set[Slot]]
    def getSlotById(id: String): Task[Option[Slot]]
    def drop: Task[Int]
    def addMapping(m: Mapping): Task[Int]
    def allSlotsByUserId(user: SimpleUser.Id): Task[Seq[domain.Slot]]
  }

  case class SlotRepoService(r: TxResource) extends SlotRepo {

    override def drop: Task[Int] =
      sql"truncate table slot cascade".update.run.transact(r.xa)


    override def addSlots(slots: Seq[Slot]): Task[Int] = {
      slots.map(
        newSlot =>
          for {
            slot <- getSlotById(newSlot.slotId.id)
            _ <- (slot
              .fold(
                Update[Slot](s"insert into slot (slotId, roomId,fromTime,toTime,talk ,day) values(?,?,?,?,?,?)")
                  .toUpdate0(newSlot)
              )(
                oldSlot =>
                  Update[(Talk, String)](s"update slot set talk=? where slotId=?")
                    .toUpdate0((newSlot.talk.getOrElse(Talk("_", "_")), oldSlot.slotId.id))
              ))
              .run
              .transact(r.xa)

          } yield ()
      )
    }.sequence.map(_.length)

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

    override def allSlots: Task[Seq[domain.Slot]] =
      sql"""select * from slot""".query[domain.Slot].to[Seq].transact(r.xa)

    override def allSlotsByUserId(userId: SimpleUser.Id): Task[Seq[domain.Slot]] =
      sql"""select * from slot s inner join user_slots us on s.slotid=us.slotid where us.userid=${userId.value}"""
        .query[domain.Slot]
        .to[Seq]
        .transact(r.xa)

    override def allSlotsWithUserId(userId: String): Task[Set[domain.Slot]] =
      sql"""select * from
           |slot s inner join user_slots  us on s.slotid=us.slotid
           |where us.userid=$userId""".stripMargin.query[domain.Slot].to[Set].transact(r.xa)

    override def getSlotById(id: String): Task[Option[domain.Slot]] =
      sql"""select * from slot where slotid=$id""".query[domain.Slot].option.transact(r.xa)

    override def mappingUserSlot: Task[Seq[UserSlot]] =
      sql"""select u.userid,
            u.firstname,
            u.lastname, 
            s.slotid,
            s.roomid,
            s.fromtime,
            s.totime,
            s."day"
            from 
            user_slots us right join users u on us.userid = u.userid right 
            join slot s ON us.slotid =s.slotid"""
        .query[UserSlot]
        .to[Seq]
        .transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[SlotRepo]] = (SlotRepoService(_)).toLayer

}
