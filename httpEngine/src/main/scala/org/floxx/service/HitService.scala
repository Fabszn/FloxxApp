package org.floxx.service

import org.floxx.BusinessVal
import org.floxx.repository.repo.HitRepo

import scala.concurrent.Future

trait HitService {

  def hit(slotId: String, percentage: String): Future[BusinessVal[Long]]

}

class HitServiceImpl(hitRepo: HitRepo) extends HitService {
  override def hit(slotId: String, percentage: String): Future[BusinessVal[Long]] = hitRepo.push(percentage, Some(slotId))
}
