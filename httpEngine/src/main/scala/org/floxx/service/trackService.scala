package org.floxx.service

import org.floxx.domain.{ CurrentYear, Room, Slot }
import org.floxx.domain.User.SimpleUser
import org.floxx.configuration.config.Configuration
import org.floxx.repository.cfpRepository.SlotRepo
import org.floxx.domain
import org.floxx.domain.Slot.{ Day, FromTime, ToTime }
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
    def roomById(id: String): Task[Option[String]]
    def rooms: Task[Map[Room.Id, Room.Name]]
    def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]]
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
                Slot.Id(s"${s.cfpSlotId.value}"),
                Room.PkId(s.roomId.value),
                Room.Id(s.roomName.value),
                FromTime(timeUtils.zdt2FormattedTime(s.fromDate.value)),
                ToTime(timeUtils.zdt2FormattedTime(s.toDate.value)),
                s.kind,
                s.title,
                Day(timeUtils.zdt2DayOfWeek(s.fromDate.value)),
                CurrentYear(timeUtils.zdt2Year(s.fromDate.value))
              )
          )
        nbLine <- slotRepo.insertSlots(slots)
      } yield nbLine

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

    override def roomById(id: String): Task[Option[String]] =
      config.getRooms.map(_(id))

    override def loadAllSlots: Task[Seq[domain.Slot]] = slotRepo.allSlots

    override def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]] = slotRepo.allSlotsByUserId(userId)

    override def rooms: Task[Map[Room.Id, Room.Name]] =
      config.getRooms.map(rs => rs.map { case (k, v) => Room.Id(k) -> Room.Name(v.getOrElse("None name")) })

  }

  def readDataFromCfpDevoxx(): RIO[TrackService, Long] = ZIO.serviceWithZIO[TrackService](_.loadDataFromCFP())
  def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(isActiveFunction))
  def loadSlotByCriterias(userID: SimpleUser.Id, isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(userID, isActiveFunction))
  def loadSlot(id: Slot.Id): RIO[TrackService, Option[domain.Slot]] = ZIO.serviceWithZIO[TrackService](_.loadSlot(id))
  def roomById(id: String): RIO[TrackService, Option[String]]       = ZIO.serviceWithZIO[TrackService](_.roomById(id))
  def loadAllSlots: RIO[TrackService, Seq[domain.Slot]]             = ZIO.serviceWithZIO[TrackService](_.loadAllSlots)
  def loadAllForCurrentUser(userId: SimpleUser.Id): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadAllForCurrentUser(userId))
  def rooms: RIO[TrackService, Map[Room.Id, Room.Name]] = ZIO.serviceWithZIO[TrackService](_.rooms)

}
