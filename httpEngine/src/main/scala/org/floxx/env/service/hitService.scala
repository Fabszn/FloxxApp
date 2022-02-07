package org.floxx.env.service

import org.floxx.env.configuration.config.{Configuration, GlobalConfig}
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.{FloxxError, IOVal, model}
import org.floxx.model.{Hit, SlotId, TrackHitInfo}
import org.floxx.service.{TrackService, timeUtils}
import zio.{IO, Task}

object hitService {


  trait HitService {

    def hit(hit: Hit): IO[FloxxError,Int]
    def currentTracks: IO[FloxxError,Map[SlotId, model.Hit]]
    def currentTracksWithHitInfo: IO[FloxxError,Map[SlotId, model.TrackHitInfo]]
    def allTracksWithHitInfo: IO[FloxxError,Map[SlotId , model.TrackHitInfo]]

  }

  class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo, config:Configuration) extends HitService {
    override def hit(hit: Hit): IO[FloxxError,Int] = hitRepo.save(hit)

    def transform(hits: Set[Hit]): IO[FloxxError,Map[SlotId, Hit]] =
      IO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (SlotId(k), vs.maxBy(_.dateTime)) })

    override def currentTracks: IO[FloxxError,Map[SlotId, model.Hit]] =
      (for {
        conf <- config.getConf
        currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf)
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
