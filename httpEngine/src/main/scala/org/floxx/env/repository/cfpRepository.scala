package org.floxx.env.repository

import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.configuration.config.Configuration
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object cfpRepository {

  val layer: RLayer[DataSource with Configuration, SlotRepo] = {
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
        conf <- ZIO.service[Configuration]
      } yield SlotRepoService(dataSource, conf)
    }
  }

  trait SlotRepo {

    def mappingUserSlot: Task[Seq[UserSlot]]
    def insertSlots(slotList: Seq[Slot]): Task[Long]
    /*@deprecated
    def addSlots(slots: Seq[Slot]): Task[Int]*/
    def allSlots: Task[Seq[Slot]]
    def allSlotsWithUserId(userID: SimpleUser.Id): Task[Set[Slot]]
    def getSlotById(id: Slot.Id): Task[Option[Slot]]
    def addMapping(m: Mapping): Task[Long]
    def allSlotsByUserId(user: SimpleUser.Id): Task[Seq[Slot]]
  }

  case class SlotRepoService(dataSource: DataSource, conf: Configuration) extends SlotRepo {
    import QuillContext._

    override def insertSlots(slotList: Seq[Slot]): Task[Long] =
      run(
        quote(
          liftQuery(slotList).foreach(
            s =>
              slots
                .insertValue(s)
                .onConflictUpdate(_.slotId)((t, e) => t.kind -> e.kind, (t, e) => t.title -> e.title)
          )
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_.sum)

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
    }.provideEnvironment(ZEnvironment(dataSource))

    override def allSlots: Task[Seq[Slot]] =
      conf.getConf.flatMap(
        c => run(quote(slots.filter(_.yearSlot == lift(c.cfp.currentYear)))).provideEnvironment(ZEnvironment(dataSource))
      )

    override def allSlotsByUserId(userId: SimpleUser.Id): Task[Seq[Slot]] =
      conf.getConf flatMap (
          c =>
            run(
              quote(
                slots.filter(
                  s =>
                    s.yearSlot == lift(c.cfp.currentYear) && userSlots
                      .filter(_.userId.contains(lift(userId)))
                      .map(_.slotId)
                      .contains(s.slotId)
                )
              )
            ).provideEnvironment(ZEnvironment(dataSource))
        )

    override def allSlotsWithUserId(userId: SimpleUser.Id): Task[Set[Slot]] = allSlotsByUserId(userId).map(_.toSet)

    override def getSlotById(id: Slot.Id): Task[Option[Slot]] =
      run(quote(slots.filter(s => s.slotId == lift(id)))).map(_.headOption).provideEnvironment(ZEnvironment(dataSource))

    override def mappingUserSlot: Task[Seq[UserSlot]] =
      conf.getConf
        .flatMap(
          c =>
            run(quote {
              for {
                s <- slots.filter(_.yearSlot == lift(c.cfp.currentYear))
                j <- userSlots.leftJoin(_.slotId == s.slotId)
                u <- user.leftJoin(s => j.exists(_.userId.contains(s.userId)))
              } yield (u, s)
            })
        )
        .provideEnvironment(ZEnvironment(dataSource))
        .map(_.map((UserSlot.apply _).tupled))
  }

  def insertSlots(slotList: Seq[Slot]): RIO[SlotRepo, Long] =
    ZIO.serviceWithZIO[SlotRepo](_.insertSlots(slotList))

  def addMapping(m: Mapping): RIO[SlotRepo, Long] =
    ZIO.serviceWithZIO[SlotRepo](_.addMapping(m))

  def mappingUserSlot: RIO[SlotRepo, Seq[UserSlot]] =
    ZIO.serviceWithZIO[SlotRepo](_.mappingUserSlot)

}
