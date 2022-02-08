package org.floxx.env.service

import org.floxx.AppLoader.appEnv.AppEnvironment
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.cfpRepository.CfpRepo
import org.floxx.model.SlotId
import org.floxx.model.jsonModel.Slot
import org.floxx.{FloxxError, IllegalStateError}
import org.http4s.client.blaze.BlazeClientBuilder
import org.slf4j.{Logger, LoggerFactory}
import zio._
import zio.interop.catz._

import java.time.LocalDateTime

object trackService {

  trait TrackService {

    def readDataFromCfpDevoxx(): IO[FloxxError,Int]
    def loadSlotByCriterias(isActiveFunction: Slot => Boolean): IO[FloxxError,Set[Slot]]
    def loadSlotByCriterias(userID: String, isActiveFunction: Slot => Boolean): IO[FloxxError,Option[Slot]]
    def loadSlot(id: String): IO[FloxxError,Option[Slot]]
    def roomById(id: String): IO[FloxxError,Option[String]]

  }

  class TrackServiceImpl(repoPg: CfpRepo, config:Configuration) extends TrackService {

    val logger: Logger = LoggerFactory.getLogger(this.getClass)

    override def readDataFromCfpDevoxx(): IO[FloxxError,Int] = {

      def s(url: String): IO[FloxxError,List[Slot]] = ???

ZIO.runtime[AppEnvironment].flatMap(r => r.)

        Task{
          BlazeClientBuilder[Task](global).resource.use { client =>
          import io.circe.parser._
          import org.floxx.model.jsonModel._

          client.get(url) { r =>
            r.as[String].map { rt =>
              parse(rt) match {
                case Left(e) => {
                  logger.error(s"Parsing Error", e)
                  List.empty[Slot]
                }
                case Right(j) => {
                  j.hcursor.downField("slots").as[Seq[Slot]] match {
                    case Right(l) => l.toList
                    case Left(e) =>
                      logger.error("No slot found", e)
                      List.empty[Slot]
                  }
                }
              }
            }
          }
        }}

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

    override def loadSlotByCriterias(isActiveFilter: Slot => Boolean): IO[FloxxError,Set[Slot]] =
      for {
        slots <-repoPg.allSlotIds
      } yield slots.filter(isActiveFilter)

    override def loadSlotByCriterias(userId: String, isActiveFilter: Slot => Boolean): IO[FloxxError,Option[Slot]] =
      for {
        slots <- repoPg.allSlotIdsWithUserId(userId)
        slot <- currentSlotForUser(slots.filter(isActiveFilter), userId)
      } yield slot

    override def loadSlot(id: String): IO[FloxxError,Option[Slot]] =
      for {
        slot <- repoPg.getSlotById(id)
      } yield slot

    override def roomById(id: String): IO[FloxxError,Option[String]] =
      config.getRooms.map(_(id))

    private def computeRoomKey(slots: List[Slot]): IO[FloxxError,List[Slot]] = {
      config.getConf >>= (conf =>
      IO.succeed(slots
        .filter(_.talk.isDefined)
        .flatMap(s => {
          conf.roomsMapping.get(s.roomId).map { r =>
            val sId = s"${s.day}_${s.roomId}_${s.fromTime}-${s.toTime}"
            s.copy(slotId = SlotId(sId), roomId = r)
          }
        })))
    }

    private def currentSlotForUser(s: Set[Slot], userId: String): IO[FloxxError, Option[Slot]] = {
      s.toSeq match {
        case s if (s.size > 1) => {
          logger.warn(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}")
          IO.fail(IllegalStateError(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}"))
        }
        case s => IO.succeed(s.headOption)
      }
    }

  }

}
