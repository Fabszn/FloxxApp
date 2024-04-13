package org.floxx.repository

import org.floxx.api.adminApi.Mapping
import org.floxx.configuration.config.Configuration
import org.floxx.domain.Mapping.{SlotUsers, UserSlot}
import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
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

    def mappingUserSlot: Task[Seq[SlotUsers]]
    def insertSlots(slotList: Seq[Slot]): Task[Long]
    def deleteMapping(m: Mapping): Task[Long]
    def insertRooms(roomList: Seq[Room]): Task[Long]
    def allSlots: Task[Seq[Slot]]
    def allRooms: Task[Seq[Room]]
    def allSlotsWithUserId(userID: SimpleUser.Id): Task[Set[Slot]]
    def getSlotById(id: Slot.Id): Task[Option[Slot]]
    def getSpeakerBySlotId(id: Slot.Id): Task[Seq[Speaker]]
    def getSpeakerById(id: Speaker.Id): Task[Option[Speaker]]

    def insertSpeakers(speakers: Seq[Speaker]): Task[Long]
    def addMapping(m: Mapping): Task[Long]
    def allSlotsByUserId(user: SimpleUser.Id): Task[Seq[Slot]]
  }

  private case class SlotRepoService(dataSource: DataSource, conf: Configuration) extends SlotRepo {
    import QuillContext._

    override def insertSlots(slotList: Seq[Slot]): Task[Long] =
      run(
        quote(
          liftQuery(slotList).foreach(
            s =>
              slots
                .insertValue(s)
                .onConflictUpdate(_.slotId)(
                  (t, e) => t.kind -> e.kind,
                  (t, e) => t.title -> e.title,
                  (t, e) => t.fromTime -> e.fromTime,
                  (t, e) => t.toTime -> e.toTime
                )
          )
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_.sum)

    override def insertRooms(roomList: Seq[Room]): Task[Long] =
      run(
        quote(
          liftQuery(roomList).foreach(
            s =>
              room
                .insertValue(s)
                .onConflictUpdate(_.id)(
                  (t, e) => t.name -> e.name,
                  (t, e) => t.capacity -> e.capacity
                )
          )
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_.sum)

    override def addMapping(m: Mapping): Task[Long] = {
      run(
        quote(
          userSlots
            .insert(
              _.slotId -> lift(m.slotId),
              _.userId -> lift(m.userId: Option[SimpleUser.Id])
            )
        )
      )
    }.provideEnvironment(ZEnvironment(dataSource))

    override def deleteMapping(m: Mapping): Task[Long] = {
      run(
        quote(
          userSlots
            .filter(mapping => (mapping.slotId == lift(m.slotId)) && (mapping.userId == lift(m.userId: Option[SimpleUser.Id])))
            .delete
        )
      )
    }.provideEnvironment(ZEnvironment(dataSource))

    override def allSlots: Task[Seq[Slot]] =
      conf.getConf.flatMap(
        c => run(quote(slots.filter(_.yearSlot == lift(c.cfp.currentYear)))).provideEnvironment(ZEnvironment(dataSource))
      )

    override def allRooms: Task[Seq[Room]] = run(quote(room)).provideEnvironment(ZEnvironment(dataSource))

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

    override def mappingUserSlot: Task[Seq[SlotUsers]] =
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
        .map(groupUsersBySlotId)

    private def groupUsersBySlotId(userSlots: Seq[UserSlot]): Seq[SlotUsers] =
      userSlots.groupBy(_.slot).map { case (slot, userSlots: Seq[UserSlot]) => SlotUsers(userSlots.flatMap(_.user), slot) }.toSeq

    override def getSpeakerBySlotId(id: Slot.Id): Task[Seq[Speaker]] =
      run(
        quote(
          speaker.filter(_.slotId == lift(id))
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def getSpeakerById(id: Speaker.Id): Task[Option[Speaker]] =
      run(
        quote(
          speaker.filter(_.id == lift(id))
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_.headOption)

    override def insertSpeakers(speakers: Seq[Speaker]): Task[Long] =
      run(
        quote(
          liftQuery(speakers).foreach(
            s =>
              speaker
                .insertValue(s)
                .onConflictUpdate(_.id)(
                  (t, e) => t.firstname -> e.firstname,
                  (t, e) => t.fullname -> e.fullname,
                  (t, e) => t.lastname -> e.lastname,
                  (t, e) => t.imageUrl -> e.imageUrl
                )
          )
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_.sum)
  }

  def insertSlots(slotList: Seq[Slot]): RIO[SlotRepo, Long] =
    ZIO.serviceWithZIO[SlotRepo](_.insertSlots(slotList))

  def insertRooms(rooms: Seq[Room]): RIO[SlotRepo, Long] =
    ZIO.serviceWithZIO[SlotRepo](_.insertRooms(rooms))

  def addMapping(m: Mapping): RIO[SlotRepo, Long] =
    ZIO.serviceWithZIO[SlotRepo](_.addMapping(m))

  def mappingUserSlot: RIO[SlotRepo, Seq[SlotUsers]] =
    ZIO.serviceWithZIO[SlotRepo](_.mappingUserSlot)

}
