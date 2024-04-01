package org.floxx.service

import org.floxx.configuration.config.Configuration
import org.floxx.domain
import org.floxx.domain.Slot.{Day, FromTime, ToTime}
import org.floxx.domain.User.SimpleUser
import org.floxx.domain._
import org.floxx.repository.cfpRepository.SlotRepo
import org.floxx.service.http.Http
import zio._

object trackService {

  def layer: RLayer[Http with SlotRepo with Configuration, TrackService] =
    ZLayer {
      for {
        slotRepo <- ZIO.service[SlotRepo]
        http <- ZIO.service[Http]
        conf <- ZIO.service[Configuration]
      } yield TrackServiceImpl(http, slotRepo, conf)
    }
  trait TrackService {
    def loadDataFromCFP(): Task[Long]
    def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlotByCriterias(userID: SimpleUser.Id, isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlot(id: Slot.Id): Task[Option[domain.Slot]]
    def loadAllSlots: Task[Seq[domain.Slot]]
    def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]]
    def loadRooms(): Task[Seq[domain.Room]]
    def speakerBy(slotId: Slot.Id): Task[Seq[Speaker]]
  }

  private case class TrackServiceImpl(http: Http, slotRepo: SlotRepo, config: Configuration) extends TrackService {
    override def loadDataFromCFP(): Task[Long] =
      for {
        cfpslots <- http.loadDatafromCfp()
        _ <- ZIO.logInfo(s"slot found ${cfpslots.size}")
        slots: Seq[Slot] = cfpslots
        //.filter(_.title.value != "---")
          .map(
            s =>
              Slot(
                slotId   = Slot.Id(s"${s.cfpSlotId.value}"),
                roomId   = Room.Id(s.roomId.value),
                roomName = Room.Name(s.roomName.value),
                fromTime = FromTime(timeUtils.zdt2FormattedTime(s.fromDate.value)),
                toTime   = ToTime(timeUtils.zdt2FormattedTime(s.toDate.value)),
                kind     = s.kind,
                title    = s.title,
                day      = Day(timeUtils.zdt2DayOfWeek(s.fromDate.value)),
                yearSlot = CurrentYear(timeUtils.zdt2Year(s.fromDate.value))
              )
          )
        _ <- http.loadRooms() flatMap slotRepo.insertRooms
        nbLine <- slotRepo.insertSlots(slots)
        _ <- slotRepo.insertSpeakers(
          cfpslots.flatMap(
            cp => mapCpfSpeaker(Slot.Id(s"${cp.cfpSlotId.value}"))(cp.speakers)
          )
        )
      } yield nbLine

    private def mapCpfSpeaker(sId: Slot.Id)(cfpSpeaker: Seq[CfpSpeaker]): Seq[Speaker] =
      cfpSpeaker.map(
        cs =>
          Speaker(
            id        = cs.id,
            slotId    = sId,
            firstname = cs.firstName,
            lastname  = cs.lastName,
            fullname  = cs.fullName,
            imageUrl  = cs.imageUrl
          )
      )

    override def loadSlotByCriterias(isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
      for {
        slots <- slotRepo.allSlots
      } yield slots.filter(isActiveFilter)

    override def loadSlotByCriterias(userId: SimpleUser.Id, isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
      for {
        slots <- slotRepo.allSlotsWithUserId(userId)
        slot <- ZIO.attempt(slots.filter(isActiveFilter).toSeq)
      } yield slot

    override def loadSlot(id: Slot.Id): Task[Option[domain.Slot]] = slotRepo.getSlotById(id)

    override def loadAllSlots: Task[Seq[domain.Slot]] = slotRepo.allSlots

    override def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]] = slotRepo.allSlotsByUserId(userId)

    override def loadRooms(): Task[Seq[domain.Room]] = slotRepo.allRooms

    override def speakerBy(slotId: Slot.Id): Task[Seq[Speaker]] = slotRepo.getSpeakerBySlotId(slotId)
  }

  def readDataFromCfpDevoxx(): RIO[TrackService, Long] = ZIO.serviceWithZIO[TrackService](_.loadDataFromCFP())
  def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(isActiveFunction))
  def loadSlotByCriterias(userID: SimpleUser.Id, isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(userID, isActiveFunction))
  def loadSlot(id: Slot.Id): RIO[TrackService, Option[domain.Slot]] = ZIO.serviceWithZIO[TrackService](_.loadSlot(id))
  def loadRooms: RIO[TrackService, Seq[domain.Room]]                = ZIO.serviceWithZIO[TrackService](_.loadRooms())
  def speakerBy(slotId: Slot.Id): RIO[TrackService, Seq[Speaker]]   = ZIO.serviceWithZIO[TrackService](_.speakerBy(slotId))

  def loadAllSlots: RIO[TrackService, Seq[domain.Slot]] = ZIO.serviceWithZIO[TrackService](_.loadAllSlots)
  def loadAllForCurrentUser(userId: SimpleUser.Id): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadAllForCurrentUser(userId))

}
