package org.floxx.env.repository

import org.floxx.domain._
import org.floxx.model.HitLatest
import org.floxx.domain.Hit
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
    def createOrUpdateOverflow(o: Overflow): Task[Long]
    def save(hit: Hit): Task[Long]

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

    override def createOrUpdateOverflow(o: Overflow): Task[Long] =
      run(
        quote(
          overflow.insertValue(o).onConflictUpdate(_.slotId)((t, e) => t.level -> e.level)
        )
      ).provideEnvironment(ZEnvironment(dataSource))
  }

}
