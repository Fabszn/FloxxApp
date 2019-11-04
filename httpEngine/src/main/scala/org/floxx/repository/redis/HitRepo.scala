package org.floxx.repository.redis

import org.floxx.repository.redis.Keys.Hit
import org.floxx.utils.floxxUtils._
import org.floxx.{BusinessVal, SlotId, model}
import play.api.libs.json.Json

import scala.concurrent.{ExecutionContext, Future}

class HitRepo extends FloxxRepository[Hit] {
  override val _key: Hit = Hit()

    def loadHitBy(slotIds: Set[String])(implicit ec: ExecutionContext): Future[BusinessVal[Map[SlotId, model.Hit]]] =
    (for {
      sIds <- slotIds.future
      allHits <- Future.sequence(sIds.map(id => redis.lRange(s"${_key._root_key}:${id}")))
      hits <- allHits
        .filter(_.nonEmpty)
        .map(hs => {
          logger.debug(s"current Hit ${hs.head}")
          val h = Json.parse(hs.head).as[model.Hit]
          (h.hitSlotId, h)
        })
        .toMap[SlotId, model.Hit]
        .future
    } yield hits).mapFutureRight



}
