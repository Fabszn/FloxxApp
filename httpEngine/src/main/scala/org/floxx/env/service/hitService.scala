package org.floxx.env.service

import org.floxx.domain.Slot
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.env.service.trackService.TrackService
import org.floxx.model
import org.floxx.model.{ Hit, TrackHitInfo }
import zio._

object hitService {

  trait HitService {

    def hit(hit: Hit): Task[Int]
    def currentTracks: Task[Map[Slot.Id, model.Hit]]
    def currentTracksWithHitInfo: Task[Seq[model.TrackHitInfo]]
    def allTracksWithHitInfo: Task[Seq[model.TrackHitInfo]]

  }

  case class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo, config: Configuration) extends HitService {
    override def hit(hit: Hit): Task[Int] = hitRepo.save(hit)

    def transform(hits: Seq[Hit]): Task[Map[Slot.Id, Hit]] =
      IO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (Slot.Id(k), vs.maxBy(_.dateTime)) })

    override def currentTracks: Task[Map[Slot.Id, model.Hit]] =
      for {
        conf <- config.getConf
        currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filtered <- transform(hits)

      } yield {
        filtered
      }

    override def currentTracksWithHitInfo: Task[Seq[TrackHitInfo]] =
      for {
        conf <- config.getConf
        currentSloIds <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filteredHits <- transform(hits)
        filtered <- {

          Task.succeed(currentSloIds.map { s =>
            {
              val hitInfo = filteredHits.get(s.slotId)

              TrackHitInfo(s.slotId, s, hitInfo)
            }
          })
        }
      } yield {
        filtered
      }

    override def allTracksWithHitInfo: Task[Seq[TrackHitInfo]] =
      for {
        currentSloIds <- trackService.loadSlotByCriterias(_ => true)
        hits <- hitRepo.loadHitBy(currentSloIds.map(_.slotId))
        filteredHits <- transform(hits)
        filtered <- {

          Task.succeed(currentSloIds.map { s =>
            {
              val hitInfo = filteredHits.get(s.slotId) //.find(h => h.hitSlotId == s.slotId)

              TrackHitInfo(s.slotId, s, hitInfo)
            }
          })
        }
      } yield {
        filtered
      }
  }

  val layer: RLayer[Has[TrackService] with Has[HitRepo] with Has[Configuration], Has[HitService]] =
    (HitServiceImpl(_, _, _)).toLayer

  def hit(hit: Hit): RIO[Has[HitService], Int]                     = ZIO.serviceWith[HitService](_.hit(hit))
  def currentTracks: RIO[Has[HitService], Map[Slot.Id, model.Hit]] = ZIO.serviceWith[HitService](_.currentTracks)
  def currentTracksWithHitInfo: RIO[Has[HitService], Seq[model.TrackHitInfo]] =
    ZIO.serviceWith[HitService](_.currentTracksWithHitInfo)
  def allTracksWithHitInfo: RIO[Has[HitService], Seq[model.TrackHitInfo]] = ZIO.serviceWith[HitService](_.allTracksWithHitInfo)

}
