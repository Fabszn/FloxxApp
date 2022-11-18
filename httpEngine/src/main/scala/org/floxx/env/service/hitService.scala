package org.floxx.env.service

import org.floxx.domain.Slot
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.env.service.trackService.TrackService
import org.floxx.model
import org.floxx.model.{Hit, TrackHitInfo}
import zio._

object hitService {

  trait HitService {

    def hit(hit: Hit): Task[Long]
    def currentTracks: Task[Map[Slot.Id, model.Hit]]
    def currentTracksWithHitInfo: Task[Seq[model.TrackHitInfo]]
    def allTracksWithHitInfo: Task[Seq[model.TrackHitInfo]]

  }

  case class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo, config: Configuration) extends HitService {
    override def hit(hit: Hit): Task[Long] = hitRepo.save(hit)

    def transform(hits: Seq[Hit]): Task[Map[Slot.Id, Hit]] =
      ZIO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (Slot.Id(k), vs.maxBy(_.dateTime)) })

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

          ZIO.succeed(currentSloIds.map { s =>
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

          ZIO.succeed(currentSloIds.map { s =>
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

  val layer: RLayer[TrackService with HitRepo with Configuration, HitService] =
    ZLayer {
      for {
        trackService <- ZIO.service[TrackService]
        hitRepo <- ZIO.service[HitRepo]
        conf <- ZIO.service[Configuration]
      } yield HitServiceImpl(trackService, hitRepo, conf)
    }


  def hit(hit: Hit): RIO[HitService, Long]                    = ZIO.serviceWithZIO[HitService](_.hit(hit))
  def currentTracks: RIO[HitService, Map[Slot.Id, model.Hit]] = ZIO.serviceWithZIO[HitService](_.currentTracks)
  def currentTracksWithHitInfo: RIO[HitService, Seq[model.TrackHitInfo]] =
    ZIO.serviceWithZIO[HitService](_.currentTracksWithHitInfo)
  def allTracksWithHitInfo: RIO[HitService, Seq[model.TrackHitInfo]] = ZIO.serviceWithZIO[HitService](_.allTracksWithHitInfo)

}
