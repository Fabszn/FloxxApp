package org.floxx.env.repository

import org.floxx.domain._
import org.floxx.domain.HitLatest
import org.floxx.domain.Hit
import org.floxx.domain.Overflow.AffectedRoom
import zio._

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
    def save(hit: Hit): Task[Long]
    def deleteOverflow(slotId: Slot.Id): Task[Unit]

  }

  case class HitRepoCfg(dataSource: DataSource) extends HitRepo {
    import QuillContext._

    def save(hit: Hit): Task[Long] = {
      val nextHitId = UUID.randomUUID.toString
      transaction {
        run(quote(hitHistory.insertValue(lift(hit.copy(hitid = Some(nextHitId))))))
          .flatMap(
            _ =>
              run(
                quote(
                  hitLatest
                    .insertValue(lift(HitLatest(hit.hitSlotId, nextHitId)))
                    .onConflictUpdate(_.hitSlotId)((t, e) => t.hitid -> e.hitid)
                )
              )
          )
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
  }

}
