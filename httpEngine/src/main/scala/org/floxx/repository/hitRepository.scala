package org.floxx.repository

import org.floxx.domain.HitShare.{DateCreation, Percentage, Response, Status}
import org.floxx.domain.Overflow.AffectedRoom
import org.floxx.domain._
import org.floxx.domain.error.DatabaseError
import zio._
import zio.stream.ZStream

import java.util.UUID
import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object hitRepository {
  val layer: RLayer[DataSource, HitRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
      } yield HitRepoCfg(dataSource)
    }

  trait HitRepo {
    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[Hit]]
    def overflowBySlotId(slotIds: Seq[Slot.Id]): Task[Seq[Overflow]]
    def createOrUpdateOverflowLevel(o: Overflow): Task[Long]
    def updateOverflowAffectedRoom(slot: Slot, affectedRoom: Option[AffectedRoom]): Task[Long]
    def save(hit: Hit): Task[Unit]

    def updateHitShare(id: HitShare.Id, status: Status, response: Response): Task[Unit]

    def streamHitShare: ZStream[Any, DatabaseError, HitShare]
    def deleteOverflow(slotId: Slot.Id): Task[Unit]

  }

  case class HitRepoCfg(dataSource: DataSource) extends HitRepo {
    import QuillContext._

    override def streamHitShare: ZStream[Any, DatabaseError, HitShare] =
      stream[HitShare](
        quote {
          hitShare.filter(_.status == lift(Status(false)))
        }
      ).provideEnvironment(ZEnvironment(dataSource)).mapError(ex => DatabaseError(ex.getMessage))

    def save(hit: Hit): Task[Unit] = {
      val nextHitId = UUID.randomUUID.toString
      transaction {
        for {
          _ <- run(quote(hitHistory.insertValue(lift(hit.copy(hitid = Some(nextHitId))))))
          _ <- run(
            quote(
              hitLatest
                .insertValue(lift(HitLatest(hit.hitSlotId, nextHitId)))
                .onConflictUpdate(_.hitSlotId)((t, e) => t.hitid -> e.hitid)
            )
          )
          slot <- run(quote(slots.filter(_.slotId == lift(Slot.Id(hit.hitSlotId))))).map(_.headOption)
          _ <- ZIO
            .fromOption(slot)
            .flatMap(
              sid =>
                run(
                  quote(
                    hitShare.insertValue(
                      lift(
                        HitShare(
                          HitShare.Id(UUID.randomUUID),
                          sid.slotId,
                          sid.roomId,
                          Percentage(hit.percentage),
                          Status(false),
                          DateCreation.now()
                        )
                      )
                    )
                  )
                )
            )
            .mapError(e => new Throwable(s"Error $e")) //TODO to be reviewed this part of code should be better
            .catchAll(e => ZIO.logWarning(s"One Slot hasn't been found $e") *> ZIO.succeed(()))
        } yield { () }
      }
    }.provideEnvironment(ZEnvironment(dataSource))

    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[Hit]] =
      run(quote(hitHistory.filter(h => liftQuery(slotIds).contains(h.hitSlotId)))).provideEnvironment(ZEnvironment(dataSource))

    override def overflowBySlotId(slotIds: Seq[Slot.Id]): Task[Seq[Overflow]] =
      run(quote(overflow.filter(o => liftQuery(slotIds).contains(o.slotId)))).provideEnvironment(ZEnvironment(dataSource))

    override def createOrUpdateOverflowLevel(o: Overflow): Task[Long] =
      run(
        quote(
          overflow
            .insertValue(lift(o))
            .onConflictUpdate(_.slotId)(
              (t, e) => t.level -> e.level,
              (t, e) => t.datetime -> e.datetime
            )
        )
      ).provideEnvironment(ZEnvironment(dataSource))

    override def updateOverflowAffectedRoom(slot: Slot, affectedRoom: Option[AffectedRoom]): Task[Long] =
      transaction {
        for {
          existingOverflow <- run {
            quote {
              slots
                .join(overflow)
                .on((s, o) => s.slotId == o.slotId)
                .filter {
                  case (s, o) =>
                    s.fromTime == lift(slot.fromTime) &&
                    s.day == lift(slot.day) &&
                    s.yearSlot == lift(slot.yearSlot) && o.affectedRoom == lift(affectedRoom)
                }
                .map(_._2)
            }
          }
          _ <- run {
            quote { liftQuery(existingOverflow).foreach(_ => overflow.update(_.affectedRoom -> Option.empty[AffectedRoom])) }
          }
          n <- run { quote { overflow.filter(_.slotId == lift(slot.slotId)).update(_.affectedRoom -> lift(affectedRoom)) } }

        } yield n

      }.provideEnvironment(ZEnvironment(dataSource))

    override def deleteOverflow(slotId: Slot.Id): Task[Unit] =
      run(quote(overflow.filter(_.slotId == lift(slotId)).delete)).provideEnvironment(ZEnvironment(dataSource)).map(_ => ())

    override def updateHitShare(id: HitShare.Id, status: Status, response: Response): Task[Unit] =
      run(
        quote(
          hitShare.filter(_.id == lift(id)).update(_.status -> lift(status), _.response -> lift(Option(response)))
        )
      ).provideEnvironment(ZEnvironment(dataSource)).map(_ => ())
  }

}
