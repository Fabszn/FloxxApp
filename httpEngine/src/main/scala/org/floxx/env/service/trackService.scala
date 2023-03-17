package org.floxx.env.service

import org.floxx.domain.{Room, Slot}
import org.floxx.domain.User.SimpleUser
import org.floxx.env.configuration.config.{Configuration, GlobalConfig}
import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.domain
import org.http4s.Response
import org.http4s.blaze.client.BlazeClientBuilder
import zio._
import zio.interop.catz._
//import zio.interop.catz.implicits.rts

object trackService {

  trait TrackService {
    def readDataFromCfpDevoxx(): Task[Long]
    def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlotByCriterias(userID: String, isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlot(id: Slot.Id): Task[Option[domain.Slot]]
    def loadAllSlots: Task[Seq[domain.Slot]]
    def roomById(id: String): Task[Option[String]]
    def rooms: Task[Map[Room.Id, Room.Name]]
    def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]]
  }

  case class TrackServiceImpl(slotRepo: SlotRepo, config: Configuration) extends TrackService {

    override def readDataFromCfpDevoxx(): Task[Long] = {
      @Deprecated //todo ("to be reworked !!! ")
      def s(url: String) =
        ZIO.logInfo(s"URL resquested ${url}") *>
        BlazeClientBuilder[Task].resource
          .use { client =>
            import io.circe.parser._
            client.get(url) { r: Response[Task] =>
              r.as[String].map { rt =>
                parse(rt).fold(
                  _ => {
                    List.empty[domain.Slot]
                  },
                  j => {
                    j.hcursor.downField("slots").as[Seq[domain.Slot]] match {
                      case Right(l) => l.toList
                      case Left(_) =>
                        List.empty[domain.Slot]
                    }
                  }
                )
              }
            }
          }

      import cats.implicits._

      for {
        conf <- {
          val c: Task[GlobalConfig] = config.getConf
          c
        }
        urlByDay = conf.cfp.days.map(d => s"${conf.cfp.url}${d.dayValue.value}")
        slots <- {
          val t = urlByDay.map(s).traverse(identity).map(_.flatten)
          t
        }
        computedSlotKey = computeRoomKey(slots, conf)
        nbLine <- slotRepo.insertSlots(computedSlotKey)

      } yield nbLine

    }

    override def loadSlotByCriterias(isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
      for {
        slots <- slotRepo.allSlots
      } yield slots.filter(isActiveFilter)

    override def loadSlotByCriterias(userId: String, isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
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

    private def computeRoomKey(slots: Seq[domain.Slot], conf: GlobalConfig): Seq[domain.Slot] =
      slots
        .filter(_.talk.isDefined)
        .flatMap(s => {
          conf.roomsMapping.get(s.roomId.value).map { r =>
            val sId = s"${s.day.value}_${s.roomId.value}_${s.fromTime.value}-${s.toTime.value}_${s.yearSlot.value}"
            s.copy(
              slotId = domain.Slot.Id(sId),
              roomId = Room.Id(r.getOrElse(""))
            )
          }
        })

  }

  def layer: RLayer[SlotRepo with Configuration, TrackService] =
    ZLayer {
      for {
        slotRepo <- ZIO.service[SlotRepo]
        conf <- ZIO.service[Configuration]
      } yield TrackServiceImpl(slotRepo, conf)
    }

  def readDataFromCfpDevoxx(): RIO[TrackService, Long] = ZIO.serviceWithZIO[TrackService](_.readDataFromCfpDevoxx())
  def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(isActiveFunction))
  def loadSlotByCriterias(userID: String, isActiveFunction: domain.Slot => Boolean): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadSlotByCriterias(userID, isActiveFunction))
  def loadSlot(id: Slot.Id): RIO[TrackService, Option[domain.Slot]] = ZIO.serviceWithZIO[TrackService](_.loadSlot(id))
  def roomById(id: String): RIO[TrackService, Option[String]]      = ZIO.serviceWithZIO[TrackService](_.roomById(id))
  def loadAllSlots: RIO[TrackService, Seq[domain.Slot]]            = ZIO.serviceWithZIO[TrackService](_.loadAllSlots)
  def loadAllForCurrentUser(userId: SimpleUser.Id): RIO[TrackService, Seq[domain.Slot]] =
    ZIO.serviceWithZIO[TrackService](_.loadAllForCurrentUser(userId))
  def rooms: RIO[TrackService, Map[Room.Id, Room.Name]] = ZIO.serviceWithZIO[TrackService](_.rooms)

}
