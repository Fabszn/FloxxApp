package org.floxx.env.service

import org.floxx.domain.{ Slot, TrackHitInfo }
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.env.service.trackService.TrackService

import org.floxx.domain._
import zio._

object hitService {

  val layer: RLayer[TrackService with HitRepo with Configuration, HitService] =
    ZLayer {
      for {
        trackService <- ZIO.service[TrackService]
        hitRepo <- ZIO.service[HitRepo]
        conf <- ZIO.service[Configuration]
      } yield HitServiceImpl(trackService, hitRepo, conf)
    }

  trait HitService {

    def hit(hit: Hit): Task[Long]
    def saveOrUpdateOverflow(overflow: Overflow): Task[Long]
    def currentTracks: Task[Map[Slot.Id, Hit]]
    def currentTracksWithHitInfo: Task[Seq[TrackHitInfo]]
    def allTracksWithHitInfo: Task[Seq[TrackHitInfo]]

  }

  case class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo, config: Configuration) extends HitService {
    override def hit(hit: Hit): Task[Long] = hitRepo.save(hit)

    def transform(hits: Seq[Hit]): Task[Map[Slot.Id, Hit]] =
      ZIO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (Slot.Id(k), vs.maxBy(_.dateTime)) })

    //todo refactor to return TrackInfo (make things standard)
    override def currentTracks: Task[Map[Slot.Id, Hit]] =
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
        currentSlots <- trackService.loadSlotByCriterias(timeUtils.extractDayAndStartTime(config = conf))
        currentSlotIds = currentSlots.map(_.slotId)
        hits <- hitRepo.loadHitBy(currentSlotIds)
        overflows <- hitRepo.overflowBySlotId(currentSlotIds)
        filteredHits <- transform(hits)
        filtered = currentSlots.map { s =>
          TrackHitInfo(
            s.slotId,
            s,
            filteredHits.get(s.slotId),
            overflows.find(_.slotId == s.slotId)
          )
        }

      } yield {
        filtered
      }

    override def allTracksWithHitInfo: Task[Seq[TrackHitInfo]] =
      for {
        currentSlots <- trackService.loadSlotByCriterias(_ => true)
        currentSlotIds = currentSlots.map(_.slotId)
        hits <- hitRepo.loadHitBy(currentSlotIds)
        overflows <- hitRepo.overflowBySlotId(currentSlotIds)
        filteredHits <- transform(hits)
        filtered = currentSlots.map { s =>
          TrackHitInfo(
            s.slotId,
            s,
            filteredHits.get(s.slotId),
            overflows.find(_.slotId == s.slotId)
          )
        }

      } yield {
        filtered
      }

    override def saveOrUpdateOverflow(overflow: Overflow): Task[Long] = hitRepo.createOrUpdateOverflow(overflow)
  }

  def hit(hit: Hit): RIO[HitService, Long]                    = ZIO.serviceWithZIO[HitService](_.hit(hit))
  def currentTracksWithHitInfo: RIO[HitService, Seq[TrackHitInfo]] =
    ZIO.serviceWithZIO[HitService](_.currentTracksWithHitInfo)
  def allTracksWithHitInfo: RIO[HitService, Seq[TrackHitInfo]] = ZIO.serviceWithZIO[HitService](_.allTracksWithHitInfo)
  def saveOrUpdateOverflow(o: Overflow): RIO[HitService, Long] = ZIO.serviceWithZIO[HitService](_.saveOrUpdateOverflow(o))

}
