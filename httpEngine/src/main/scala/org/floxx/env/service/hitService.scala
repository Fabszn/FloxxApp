package org.floxx.env.service

import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.model
import org.floxx.model.{Hit, SlotId, TrackHitInfo}
import org.floxx.service.{TrackService, timeUtils}
import zio.Task

object hitService {


  trait HitService[F[_]] {

    def hit(hit: Hit): Task[Int]
    def currentTracks: Task[Map[SlotId, model.Hit]]
    def currentTracksWithHitInfo: Task[Map[SlotId, model.TrackHitInfo]]
    def allTracksWithHitInfo: Task[Map[SlotId , model.TrackHitInfo]]

  }

  class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo) extends HitService {
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

}
