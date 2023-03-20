package org.floxx.env.service

import org.floxx.domain.Overflow.AffectedRoom
import org.floxx.domain.{Slot, TrackHitInfo}
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.hitRepository.HitRepo
import org.floxx.env.service.trackService.TrackService
import org.floxx.domain._
import org.floxx.env.repository.cfpRepository.SlotRepo
import zio._

object hitService {

  val layer: RLayer[TrackService with SlotRepo with HitRepo with Configuration, HitService] =
    ZLayer {
      for {
        trackService <- ZIO.service[TrackService]
        hitRepo <- ZIO.service[HitRepo]
        slotRepo <- ZIO.service[SlotRepo]
        conf <- ZIO.service[Configuration]
      } yield HitServiceImpl(trackService, slotRepo, hitRepo, conf)
    }

  trait HitService {

    def hit(hit: Hit): Task[Long]
    def saveOrUpdateOverflow(overflow: Overflow): Task[Long]
    def saveAffectedRoom(slotId:Slot.Id,affectedRoom: Option[AffectedRoom]): Task[Long]
    def tracksWithHitInfoBy(slotId: Slot.Id): Task[Option[TrackHitInfo]]
    def currentTracksWithHitInfo: Task[Seq[TrackHitInfo]]
    def allTracksWithHitInfo: Task[Seq[TrackHitInfo]]

  }

  case class HitServiceImpl(trackService: TrackService, slotRepo: SlotRepo, hitRepo: HitRepo, config: Configuration)
      extends HitService {
    override def hit(hit: Hit): Task[Long] = hitRepo.save(hit)

    def transform(hits: Seq[Hit]): Task[Map[Slot.Id, Hit]] =
      ZIO.succeed(hits.groupBy(_.hitSlotId).map { case (k, vs) => (Slot.Id(k), vs.maxBy(_.dateTime)) })

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

    override def tracksWithHitInfoBy(slotId: Slot.Id): Task[Option[TrackHitInfo]] =
      for {
        currentSlots <- trackService.loadSlotByCriterias(_.slotId == slotId)
        currentSlotIds = currentSlots.map(_.slotId)
        hits <- hitRepo.loadHitBy(currentSlotIds)
        overflows <- hitRepo.overflowBySlotId(currentSlotIds)
        filteredHits <- transform(hits)
        filtered = currentSlots.headOption.map { s =>
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

    override def saveOrUpdateOverflow(overflow: Overflow): Task[Long] = hitRepo.createOrUpdateOverflowLevel(overflow)

    override def saveAffectedRoom(slotId:Slot.Id,affectedRoom: Option[AffectedRoom]): Task[Long] =
      (for {
        affectedRoom <- ZIO.attempt(affectedRoom)
        current <- slotRepo.getSlotById(slotId).some
        n <- hitRepo.updateOverflowAffectedRoom(current, affectedRoom)
      } yield n).orElse(ZIO.succeed(0L))
  }

  def hit(hit: Hit): RIO[HitService, Long] = ZIO.serviceWithZIO[HitService](_.hit(hit))
  def tracksWithHitInfoBy(slotId: Slot.Id): RIO[HitService, Option[TrackHitInfo]] =
    ZIO.serviceWithZIO[HitService](_.tracksWithHitInfoBy(slotId))
  def currentTracksWithHitInfo: RIO[HitService, Seq[TrackHitInfo]] =
    ZIO.serviceWithZIO[HitService](_.currentTracksWithHitInfo)
  def allTracksWithHitInfo: RIO[HitService, Seq[TrackHitInfo]] = ZIO.serviceWithZIO[HitService](_.allTracksWithHitInfo)
  def saveOrUpdateOverflow(o: Overflow): RIO[HitService, Long] = ZIO.serviceWithZIO[HitService](_.saveOrUpdateOverflow(o))
  def saveAffectedRoom(slotId:Slot.Id,affectedRoom: Option[AffectedRoom]): RIO[HitService, Long] = ZIO.serviceWithZIO[HitService](_.saveAffectedRoom(slotId, affectedRoom))

}
