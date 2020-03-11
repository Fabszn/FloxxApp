package org.floxx.service

import cats.effect.IO
import doobie.free.connection.ConnectionIO
import org.floxx.model.{Hit, SlotId, TrackHitInfo}
import org.floxx.repository.postgres.HitRepo
import org.floxx.utils.floxxUtils._
import org.floxx.{IOVal, model}

trait HitService[F[_]] {

  def hit(hit: Hit): F[IOVal[Int]]
  def currentTracks: F[IOVal[Map[SlotId, model.Hit]]]
  def currentTracksWithHitInfo: F[IOVal[Map[SlotId, model.TrackHitInfo]]]
  def allTracksWithHitInfo: F[IOVal[Map[SlotId , model.TrackHitInfo]]]

}

class HitServiceImpl(trackService: TrackService[IO], hitRepo: HitRepo[ConnectionIO]) extends HitService[IO] with WithTransact {
  override def hit(hit: Hit): IO[IOVal[Int]] = run(hitRepo.save(hit))

  def transform(hits: Set[Hit]): IO[IOVal[Map[SlotId, Hit]]] =
    IO(Right(hits.groupBy(_.hitSlotId).map { case (k, vs) => (SlotId(k), vs.maxBy(_.dateTime)) }))

  override def currentTracks: IO[IOVal[Map[SlotId, model.Hit]]] =
    (for {
      currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime()).eitherT
      hits <- run(hitRepo.loadHitBy(currentSloIds.map(_.slotId))).eitherT
      filtered <- transform(hits).eitherT

    } yield {
      filtered
    }).value

  override def currentTracksWithHitInfo: IO[IOVal[Map[SlotId, TrackHitInfo]]] =
    (for {
      currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime()).eitherT
      hits <- run(hitRepo.loadHitBy(currentSloIds.map(_.slotId))).eitherT
      filteredHits <- transform(hits).eitherT
      filtered <- {

        IO(Right(currentSloIds.map { s =>
          {
            val hitInfo = filteredHits.get(s.slotId) //.find(h => h.hitSlotId == s.slotId)

            (s.slotId -> TrackHitInfo(s.slotId, s, hitInfo))
          }
        }.toMap))
      }.eitherT
    } yield {
      filtered
    }).value

  override def allTracksWithHitInfo: IO[IOVal[Map[SlotId, TrackHitInfo]]] =
    (for {
      currentSloIds <- trackService.loadSlotByCriterias(_ => true).eitherT
      hits <- run(hitRepo.loadHitBy(currentSloIds.map(_.slotId))).eitherT
      filteredHits <- transform(hits).eitherT
      filtered <- {

        IO(Right(currentSloIds.map { s =>
          {
            val hitInfo = filteredHits.get(s.slotId) //.find(h => h.hitSlotId == s.slotId)

            (s.slotId -> TrackHitInfo(s.slotId, s, hitInfo))
          }
        }.toMap))
      }.eitherT
    } yield {
      filtered
    }).value
}
