package org.floxx.env.service

import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.env.service.trackService.TrackService
import org.floxx.{FloxxError, IOVal, model}
import org.floxx.model.{Hit, SlotId, TrackHitInfo}
import org.floxx.service.timeUtils
import zio._

object hitService {


  trait HitService {

    def hit(hit: Hit): Task[Int]
    def currentTracks: Task[Map[SlotId, model.Hit]]
    def currentTracksWithHitInfo: Task[Map[SlotId, model.TrackHitInfo]]
    def allTracksWithHitInfo: Task[Map[SlotId , model.TrackHitInfo]]

  }

  case class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo, config:Configuration) extends HitService {
    override def hit(hit: Hit): Task[Int] = hitRepo.save(hit)

    def transform(hits: Set[Hit]): Task[Map[SlotId, Hit]] =
      IO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (SlotId(k), vs.maxBy(_.dateTime)) })

    override def currentTracks: Task[Map[SlotId, model.Hit]] =
      for {
        conf <- config.getConf
        currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filtered <- transform(hits)

      } yield {
        filtered
      }

    override def currentTracksWithHitInfo: Task[Map[SlotId, TrackHitInfo]] =
      for {
        conf <- config.getConf
        currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config=conf))
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filteredHits <- transform(hits)
        filtered <- {

         Task.succeed(currentSloIds.map { s =>
          {
            val hitInfo = filteredHits.get(s.slotId) //.find(h => h.hitSlotId == s.slotId)

            (s.slotId -> TrackHitInfo(s.slotId, s, hitInfo))
          }
          }.toMap)
        }
      } yield {
        filtered
      }

    override def allTracksWithHitInfo: Task[Map[SlotId, TrackHitInfo]] =
      for {
        currentSloIds <- trackService.loadSlotByCriterias(_ => true)
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filteredHits <- transform(hits)
        filtered <- {

         Task.succeed(currentSloIds.map { s =>
          {
            val hitInfo = filteredHits.get(s.slotId) //.find(h => h.hitSlotId == s.slotId)

            (s.slotId -> TrackHitInfo(s.slotId, s, hitInfo))
          }
          }.toMap)
        }
      } yield {
        filtered
      }
  }

  val layer:RLayer[Has[TrackService] with Has[HitRepo] with Has[Configuration],Has[HitService]]=(HitServiceImpl(_,_,_)).toLayer

  def hit(hit: Hit): RIO[Has[HitService],Int] = ZIO.serviceWith[HitService](_.hit(hit))
  def currentTracks: RIO[Has[HitService],Map[SlotId, model.Hit]] = ZIO.serviceWith[HitService](_.currentTracks)
  def currentTracksWithHitInfo:RIO[Has[HitService],Map[SlotId, model.TrackHitInfo]] = ZIO.serviceWith[HitService](_.currentTracksWithHitInfo)
  def allTracksWithHitInfo:RIO[Has[HitService],Map[SlotId , model.TrackHitInfo]] = ZIO.serviceWith[HitService](_.allTracksWithHitInfo

}
