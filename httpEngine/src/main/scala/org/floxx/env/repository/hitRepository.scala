package org.floxx.env.repository

import org.floxx.domain._
import org.floxx.model
import org.floxx.model.{ Hit, HitLatest }
import zio._

import java.util.UUID
import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object hitRepository {

  trait HitRepo {
    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[model.Hit]]
    def save(hit: Hit): Task[Long]

  }

  case class HitRepoCfg(dataSource: DataSource) extends HitRepo {
    import QuillContext._
    val env = Has(dataSource)
    def save(hit: Hit): Task[Long] = {

      val nextHitId = UUID.randomUUID.toString

      run(quote(hitHistory.insertValue(lift(hit.copy(hitid = Some(nextHitId))))))
        .provide(env)
        .flatMap(
          _ =>
            run(
              quote(
                hitLatest
                  .insertValue(lift(HitLatest(hit.hitSlotId, nextHitId)))
                  .onConflictUpdate(_.hitSlotId)((t, e) => t.hitid -> e.hitid)
              )
            ).provide(env)
        )

    }

    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[Hit]] =
      run(quote(hitHistory.filter(h => liftQuery(slotIds).contains(h.hitSlotId)))).provide(env)

  }

  val layer: RLayer[Has[DataSource], Has[HitRepo]] = (HitRepoCfg(_)).toLayer

  def save(hit: Hit): RIO[Has[HitRepo], Long] = ZIO.serviceWith[HitRepo](_.save(hit))
  def loadHitBy(slotIds: Seq[Slot.Id]): RIO[Has[HitRepo], Seq[Hit]] =
    ZIO.serviceWith[HitRepo](_.loadHitBy(slotIds))

}
