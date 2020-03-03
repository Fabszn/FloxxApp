package org.floxx.service

import java.time.LocalDateTime

import cats.effect.IO
import doobie.`enum`.JdbcType.Timestamp
import org.floxx.{ IOVal, IllegalStateError }
import org.floxx.config.Config
import org.floxx.model.jsonModel.Slot
import org.floxx.repository.postgres.CfpRepoPg
import org.floxx.utils.floxxUtils._
import org.slf4j.{ Logger, LoggerFactory }

trait TrackService[F[_]] {

  def readDataFromCfpDevoxx(): F[IOVal[Int]]
  def loadSlotByCriterias(isActiveFunction: Slot => Boolean): F[IOVal[Set[Slot]]]
  def loadSlotByCriterias(userID: String, isActiveFunction: Slot => Boolean): F[IOVal[Option[Slot]]]
  def loadSlot(id: String): F[IOVal[Option[Slot]]]
  def roomById(id: String): F[IOVal[Option[String]]]

}

class TrackServiceImpl(repoPg: CfpRepoPg) extends TrackService[IO] with WithTransact {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val urlCfp = Config.cfp.url
  val urlByDay = Config.cfp.days.map(d => {
    val url = s"${urlCfp}${d}"
    url
  })

  import org.http4s.client.blaze._

  import scala.concurrent.ExecutionContext.Implicits.global

  override def readDataFromCfpDevoxx(): IO[IOVal[Int]] = {

    def s(url: String): IO[List[Slot]] =
      BlazeClientBuilder[IO](global).resource.use { client =>
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
      }

    logger.debug("read from CFP")

    import cats.implicits._

    for {

      slots <- urlByDay.map(s).traverse(identity).map(_.fold(Nil)((a, b) => a ::: b))

      nbLine <- run(repoPg.addSlots(computeRoomKey(slots)))

    } yield nbLine

  }

  override def loadSlotByCriterias(isActiveFilter: Slot => Boolean): IO[IOVal[Set[Slot]]] =
    (for {
      slots <- run(repoPg.allSlotIds).eitherT
    } yield slots.filter(isActiveFilter)).value

  override def loadSlotByCriterias(userId: String, isActiveFilter: Slot => Boolean): IO[IOVal[Option[Slot]]] =
    (for {
      slots <- run(repoPg.allSlotIdsWithUserId(userId)).eitherT
      slot <-
        currentSlotForUser(slots.filter(isActiveFilter), userId).eitherT
    } yield slot).value

  override def loadSlot(id: String): IO[IOVal[Option[Slot]]] =
    (for {
      slot <- run(repoPg.getSlotById(id)).eitherT
    } yield slot).value

  override def roomById(id: String): IO[IOVal[Option[String]]] =
    IO(Right(Config.rooms.roomsMapping(id)))

  private def computeRoomKey(slots: List[Slot]): List[Slot] =
    slots
      .filter(_.talk.isDefined)
      .flatMap(s => {
        Config.rooms.roomsMapping(s.roomId).map { r =>
          val sId = s"${s.day}_${s.roomId}_${s.fromTime}-${s.toTime}"
          s.copy(slotId = sId, roomId = r)
        }
      })

  private def currentSlotForUser(s: Set[Slot], userId: String): IO[IOVal[Option[Slot]]] = {
    IO(s.toSeq match {
      case s if (s.size > 1) => {
        logger.warn(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}")
        Left(IllegalStateError(s"Too much slots selected for the following user ${userId} at ${LocalDateTime.now}"))
      }
      case s => Right(s.headOption)
    })
  }

}
