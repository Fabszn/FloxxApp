package org.floxx.env.service

import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.cfpRepository.CfpRepo
import org.floxx.model.SlotId
import org.floxx.model.jsonModel.Slot
import org.floxx.{ HttpExternalCallError, IllegalStateError }
import org.http4s.blaze.client.BlazeClientBuilder
import org.slf4j.{ Logger, LoggerFactory }
import zio._
import zio.interop.catz._
import zio.interop.catz.implicits.rts

import java.time.LocalDateTime

object trackService {

  trait TrackService {
    def readDataFromCfpDevoxx(): Task[Int]
    def loadSlotByCriterias(isActiveFunction: Slot => Boolean): Task[Set[Slot]]
    def loadSlotByCriterias(userID: String, isActiveFunction: Slot => Boolean): Task[Option[Slot]]
    def loadSlot(id: String): Task[Option[Slot]]
    def roomById(id: String): Task[Option[String]]
  }

  case class TrackServiceImpl(repoPg: CfpRepo, config: Configuration) extends TrackService {

    val logger: Logger = LoggerFactory.getLogger(this.getClass)

    override def readDataFromCfpDevoxx(): Task[Int] = {
      def s(url: String) =
        BlazeClientBuilder[Task].resource
          .use { client =>
            import io.circe.parser._
            import org.floxx.model.jsonModel._

            client.get(url) { r =>
              r.as[String].map { rt =>
                parse(rt).fold(
                  e => {
                    logger.error(s"Parsing Error", e)
                    List.empty[Slot]
                  },
                  j => {
                    j.hcursor.downField("slots").as[Seq[Slot]] match {
                      case Right(l) => l.toList
                      case Left(e) =>
                        logger.error("No slot found", e)
                        List.empty[Slot]
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
          val url = s"${urlCfp}${d}"
          url
        })
        slots <- urlByDay.map(s).traverse(identity).map(_.fold(Nil)((a, b) => a ::: b))

        nbLine <- computeRoomKey(slots) >>= repoPg.addSlots

      } yield nbLine

    }

    override def loadSlotByCriterias(isActiveFilter: Slot => Boolean): Task[Set[Slot]] =
      for {
        slots <- repoPg.allSlotIds
      } yield slots.filter(isActiveFilter)

    override def loadSlotByCriterias(userId: String, isActiveFilter: Slot => Boolean): Task[Option[Slot]] =
      for {
        slots <- repoPg.allSlotIdsWithUserId(userId)
        slot <- currentSlotForUser(slots.filter(isActiveFilter), userId)
      } yield slot

    override def loadSlot(id: String): Task[Option[Slot]] =
      for {
        slot <- repoPg.getSlotById(id)
      } yield slot

    override def roomById(id: String): Task[Option[String]] =
      config.getRooms.map(_(id))

    private def computeRoomKey(slots: List[Slot]): Task[List[Slot]] =
      config.getConf >>= (
            conf =>
              Task.succeed(
                slots
                  .filter(_.talk.isDefined)
                  .flatMap(s => {
                    conf.roomsMapping.get(s.roomId).map { r =>
                      val sId = s"${s.day}_${s.roomId}_${s.fromTime}-${s.toTime}"
                      s.copy(slotId = SlotId(sId), roomId = r.getOrElse(""))
                    }
                  })
              )
          )

    private def currentSlotForUser(s: Set[Slot], userId: String): Task[Option[Slot]] =
      s.toSeq match {
        case s if (s.size > 1) => {
          logger.warn(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}")
          Task.fail(IllegalStateError(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}"))
        }
        case s => IO.succeed(s.headOption)
      }

  }

  def layer: RLayer[Has[CfpRepo] with Has[Configuration], Has[TrackService]] = (TrackServiceImpl(_, _)).toLayer

  def readDataFromCfpDevoxx(): RIO[Has[TrackService], Int] = ZIO.serviceWith[TrackService](_.readDataFromCfpDevoxx())
  def loadSlotByCriterias(isActiveFunction: Slot => Boolean): RIO[Has[TrackService], Set[Slot]] =
    ZIO.serviceWith[TrackService](_.loadSlotByCriterias(isActiveFunction))
  def loadSlotByCriterias(userID: String, isActiveFunction: Slot => Boolean): RIO[Has[TrackService], Option[Slot]] =
    ZIO.serviceWith[TrackService](_.loadSlotByCriterias(userID, isActiveFunction))
  def loadSlot(id: String): RIO[Has[TrackService], Option[Slot]]   = ZIO.serviceWith[TrackService](_.loadSlot(id))
  def roomById(id: String): RIO[Has[TrackService], Option[String]] = ZIO.serviceWith[TrackService](_.roomById(id))

}
