package org.floxx.service

import cats.effect.IO
import cats.instances.future._
import doobie.free.connection.ConnectionIO
import org.floxx.model.Hit
import org.floxx.repository.postgres.HitRepo
import org.floxx.utils.floxxUtils._
import org.floxx.{BusinessVal, IOVal, SlotId, model}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

trait HitService[F[_]] {

  def hit(hit: Hit): F[IOVal[Int]]
  def currentTrack: F[IOVal[Map[SlotId, model.Hit]]]

}

class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo[ConnectionIO]) extends HitService[IO]  with WithTransact {
  override def hit(hit: Hit): IO[IOVal[Int]] = run(hitRepo.save(hit))

  override def currentTrack: IO[IOVal[Map[SlotId, model.Hit]]] =
    (for {
      currentSloIds <- trackService.loadActiveSlotIds.eitherT
      hits <- run(hitRepo.loadHitBy(currentSloIds.map(_.slotId))).eitherT
    } yield hits.map(h => (h.hitSlotId, h)).toMap).value
}
