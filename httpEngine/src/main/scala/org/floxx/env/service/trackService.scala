package org.floxx.env.service

import org.floxx.domain.Room
import io.circe.generic.auto._
import org.floxx.domain.User.SimpleUser
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.cfpRepository.SlotRepo
import org.floxx.{ domain, HttpExternalCallError, IllegalStateError }
import org.http4s.Response
import org.http4s.blaze.client.BlazeClientBuilder
import org.slf4j.{ Logger, LoggerFactory }
import zio._
import zio.interop.catz._
import zio.interop.catz.implicits.rts

import java.time.LocalDateTime

object trackService {

  trait TrackService {
    def readDataFromCfpDevoxx(): Task[Int]
    def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlotByCriterias(userID: String, isActiveFunction: domain.Slot => Boolean): Task[Seq[domain.Slot]]
    def loadSlot(id: String): Task[Option[domain.Slot]]
    def loadAllSlots: Task[Seq[domain.Slot]]
    def roomById(id: String): Task[Option[String]]
    def rooms: Task[Map[Room.Id, Room.Name]]
    def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]]
  }

  case class TrackServiceImpl(slotRepo: SlotRepo, config: Configuration) extends TrackService {

    val logger: Logger = LoggerFactory.getLogger(this.getClass)

    override def readDataFromCfpDevoxx(): Task[Int] = {
      @Deprecated //todo ("to reworked !!! ")
      def s(url: String) =
        BlazeClientBuilder[Task].resource
          .use { client =>
            import io.circe.parser._
            logger.info(s"URL resquested ${url}")
            client.get(url) { r: Response[Task] =>
              r.as[String].map { rt =>
                parse(rt).fold(
                  e => {
                    logger.error(s"Parsing Error :  ${rt}", e)
                    List.empty[domain.Slot]
                  },
                  j => {
                    j.hcursor.downField("slots").as[Seq[domain.Slot]] match {
                      case Right(l) => l.toList
                      case Left(e) =>
                        logger.error("No slot found", e)
                        List.empty[domain.Slot]
                    }

                  }
                )
              }
            }
          }
          .mapError(t => HttpExternalCallError(s"cause :${t.getCause} - message :${t.getMessage}"))
      logger.debug("read from CFP")

      import cats.implicits._

      for {
        conf <- config.getConf
        urlCfp = conf.cfp.url
        urlByDay = conf.cfp.days.map(d => {
          val url = s"${urlCfp}${d.dayValue.value}"
          url
        })
        slots <- urlByDay.map(s).traverse(identity).map(_.fold(Nil)((a, b) => a ::: b))

        nbLine <- computeRoomKey(slots) >>= slotRepo.addSlots

      } yield nbLine

    }

    override def loadSlotByCriterias(isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
      for {
        slots <- slotRepo.allSlots
      } yield slots.filter(isActiveFilter)

    override def loadSlotByCriterias(userId: String, isActiveFilter: domain.Slot => Boolean): Task[Seq[domain.Slot]] =
      for {
        slots <- slotRepo.allSlotsWithUserId(userId)
        slot <- Task(slots.filter(isActiveFilter).toSeq)
      } yield slot

    override def loadSlot(id: String): Task[Option[domain.Slot]] = slotRepo.getSlotById(id)

    override def roomById(id: String): Task[Option[String]] =
      config.getRooms.map(_(id))

    override def loadAllSlots: Task[Seq[domain.Slot]] = slotRepo.allSlots

    override def loadAllForCurrentUser(userId: SimpleUser.Id): Task[Seq[domain.Slot]] = slotRepo.allSlotsByUserId(userId)

    override def rooms: Task[Map[Room.Id, Room.Name]] =
      config.getRooms.map(rs => rs.map { case (k, v) => Room.Id(k) -> Room.Name(v.getOrElse("None name")) })

    private def computeRoomKey(slots: List[domain.Slot]): Task[List[domain.Slot]] =
      config.getConf >>= (
            conf =>
              Task.succeed(
                slots
                  .filter(_.talk.isDefined)
                  .flatMap(s => {
                    conf.roomsMapping.get(s.roomId.value).map { r =>
                      val sId = s"${s.day.value}_${s.roomId.value}_${s.fromTime.value}-${s.toTime.value}"
                      s.copy(slotId = domain.Slot.Id(sId), roomId = Room.Id(r.getOrElse("")))
                    }
                  })
              )
          )
@deprecated
    private def currentSlotForUser(s: Set[domain.Slot], userId: String): Task[Option[domain.Slot]] =
      s.toSeq match {
        case s if (s.size > 1) => {
          logger.warn(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}")
          Task.fail(IllegalStateError(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}"))
        }
        case s => IO.succeed(s.headOption)
      }

  }

  def layer: RLayer[Has[SlotRepo] with Has[Configuration], Has[TrackService]] = (TrackServiceImpl(_, _)).toLayer

  def readDataFromCfpDevoxx(): RIO[Has[TrackService], Int] = ZIO.serviceWith[TrackService](_.readDataFromCfpDevoxx())
  def loadSlotByCriterias(isActiveFunction: domain.Slot => Boolean): RIO[Has[TrackService], Seq[domain.Slot]] =
    ZIO.serviceWith[TrackService](_.loadSlotByCriterias(isActiveFunction))
  def loadSlotByCriterias(userID: String, isActiveFunction: domain.Slot => Boolean): RIO[Has[TrackService], Seq[domain.Slot]] =
    ZIO.serviceWith[TrackService](_.loadSlotByCriterias(userID, isActiveFunction))
  def loadSlot(id: String): RIO[Has[TrackService], Option[domain.Slot]]   = ZIO.serviceWith[TrackService](_.loadSlot(id))
  def roomById(id: String): RIO[Has[TrackService], Option[String]] = ZIO.serviceWith[TrackService](_.roomById(id))
  def rooms: RIO[Has[TrackService], Map[Room.Id, Room.Name]]       = ZIO.serviceWith[TrackService](_.rooms)
  def loadAllSlots: RIO[Has[TrackService], Seq[domain.Slot]]              = ZIO.serviceWith[TrackService](_.loadAllSlots)
  def loadAllForCurrentUser(userId: SimpleUser.Id): RIO[Has[TrackService], Seq[domain.Slot]] =
    ZIO.serviceWith[TrackService](_.loadAllForCurrentUser(userId))

}
