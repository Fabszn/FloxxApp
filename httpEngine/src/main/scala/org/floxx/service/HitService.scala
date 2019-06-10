package org.floxx.service

import akka.stream.scaladsl.SourceQueue
import cats.instances.future._
import org.floxx.model.Hit
import org.floxx.repository.repo.HitRepo
import org.floxx.utils.floxxUtils._
import org.floxx.{ model, BusinessVal, SlotId }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

trait HitService {

  def hit(hit: Hit): Future[BusinessVal[Long]]
  def currentTrack: Future[BusinessVal[Map[SlotId, model.Hit]]]

}

class HitServiceImpl(trackService: TrackService, hitRepo: HitRepo) extends HitService {
  override def hit(hit: Hit): Future[BusinessVal[Long]] = hitRepo.push(hit.toJsonStr, Some(hit.slotId))

  override def currentTrack: Future[BusinessVal[Map[SlotId, model.Hit]]] =
    (for {
      currentSloIds <- trackService.loadActiveSlotIds.eitherT
      hits <- hitRepo.loadHitBy(currentSloIds).eitherT

    } yield hits).value

}
