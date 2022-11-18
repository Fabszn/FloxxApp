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

    def save(hit: Hit): Task[Long] = {
      val nextHitId = UUID.randomUUID.toString
      transaction {
        run(quote(hitHistory.insertValue(lift(hit.copy(hitid = Some(nextHitId))))))
          .provideEnvironment(ZEnvironment(dataSource))
          .flatMap(
            _ =>
              run(
                quote(
                  hitLatest
                    .insertValue(lift(HitLatest(hit.hitSlotId, nextHitId)))
                    .onConflictUpdate(_.hitSlotId)((t, e) => t.hitid -> e.hitid)
                )
              ).provideEnvironment(ZEnvironment(dataSource))
          )

      }
    }.provideEnvironment(ZEnvironment(dataSource))

    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[Hit]] =
      run(quote(hitHistory.filter(h => liftQuery(slotIds).contains(h.hitSlotId)))).provideEnvironment(ZEnvironment(dataSource))

  }

  val layer: RLayer[DataSource, HitRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
      } yield HitRepoCfg(dataSource)
    }


  def save(hit: Hit): RIO[HitRepo, Long] = ZIO.serviceWithZIO[HitRepo](_.save(hit))
  def loadHitBy(slotIds: Seq[Slot.Id]): RIO[HitRepo, Seq[Hit]] =
    ZIO.serviceWithZIO[HitRepo](_.loadHitBy(slotIds))

}
