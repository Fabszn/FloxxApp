package org.floxx.env.repository

import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.env.api.adminApi.Mapping
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object cfpRepository {

  trait SlotRepo {

    def mappingUserSlot: Task[Seq[UserSlot]]
    def insertSlots(slotList: Seq[Slot]): Task[Long]
    def addSlots(slots: Seq[Slot]): Task[Int]
    def allSlots: Task[Seq[Slot]]
    def allSlotsWithUserId(userID: String): Task[Set[Slot]]
    def getSlotById(id: String): Task[Option[Slot]]
    def addMapping(m: Mapping): Task[Long]
    def allSlotsByUserId(user: SimpleUser.Id): Task[Seq[Slot]]
  }

  case class SlotRepoService(dataSource: DataSource) extends SlotRepo {
    import QuillContext._
    val env = Has(dataSource)

    override def insertSlots(slotList: Seq[Slot]): Task[Long] =
      run(
        quote(
          liftQuery(slotList).foreach(
            s =>
              slots.insertValue(s).onConflictUpdate(_.slotId)((t, e) => t.talk -> Option(e.talk.getOrElse(lift(Talk("_", "_")))))
          )
        )
      ).map(_.sum).provide(env)

    override def addSlots(slotList: Seq[Slot]): Task[Int] =
      ZIO
        .collectAll {
          slotList.map(
            newSlot =>
              for {
                aSlot <- getSlotById(newSlot.slotId.value)
                _ <- aSlot
                  .fold(
                    run(quote(slots.insertValue(lift(newSlot)))).provide(env)
                  )(
                    oldSlot =>
                      run(
                        quote(
                          slots
                            .filter(s => s.slotId == lift(oldSlot.slotId))
                            .update(_.talk -> lift(Option(newSlot.talk.getOrElse(Talk("_", "_")))),
                              _.roomId -> lift(newSlot.roomId))
                        )
                      ).provide(env)
                  )
              } yield ()
          )
        }
        .map(_.length)

    override def addMapping(m: Mapping): Task[Long] = {
      m.userId
        .fold(run(quote(userSlots.filter(_.slotId == lift(m.slotId)).delete)))(
          _ =>
            run(
              quote(
                userSlots
                  .insertValue(lift(m))
                  .onConflictUpdate(_.slotId)((t, e) => t.userId -> e.userId)
              )
            )
        )
    }.provide(env)

    override def allSlots: Task[Seq[Slot]] = run(quote(slots)).provide(env)

    override def allSlotsByUserId(userId: SimpleUser.Id): Task[Seq[Slot]] =
      run(quote(slots.filter(s => userSlots.filter(_.userId.contains(lift(userId))).map(_.slotId).contains(s.slotId))))
        .provide(env)

    override def allSlotsWithUserId(userId: String): Task[Set[Slot]] = allSlotsByUserId(SimpleUser.Id(userId)).map(_.toSet)

    override def getSlotById(id: String): Task[Option[Slot]] =
      run(quote(slots.filter(s => s.slotId == lift(Slot.Id(id))))).map(_.headOption).provide(env)

    override def mappingUserSlot: Task[Seq[UserSlot]] =
      run(quote {
        for {
          s <- slots
          j <- userSlots.leftJoin(_.slotId == s.slotId)
          u <- user.leftJoin(s => j.exists(_.userId.contains(s.userId)))
        } yield (u, s)
      }).provide(env).map(_.map((UserSlot.apply _).tupled))
  }

  val layer: RLayer[Has[DataSource], Has[SlotRepo]] = (SlotRepoService(_)).toLayer

  def insertSlots(slotList: Seq[Slot]): RIO[Has[SlotRepo], Long] =
    ZIO.serviceWith[SlotRepo](_.insertSlots(slotList))

  def addMapping(m: Mapping): RIO[Has[SlotRepo], Long] =
    ZIO.serviceWith[SlotRepo](_.addMapping(m))

  def mappingUserSlot: RIO[Has[SlotRepo], Seq[UserSlot]] =
    ZIO.serviceWith[SlotRepo](_.mappingUserSlot)

}
