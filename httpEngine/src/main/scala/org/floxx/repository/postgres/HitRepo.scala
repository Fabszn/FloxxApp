package org.floxx.repository.postgres

import java.util.UUID

import doobie.free.connection.ConnectionIO
import doobie.implicits._
import doobie.util.fragment
import org.floxx.model.Hit
import org.floxx.{ model, IOVal, SlotId }

trait HitRepo[F[_]] {
  def loadHitBy(slotIds: Set[String]): ConnectionIO[IOVal[Set[model.Hit]]]
  def save(hit: Hit): ConnectionIO[IOVal[Int]]

}

class HitRepoCfg extends HitRepo[ConnectionIO] {

  def save(hit: Hit): ConnectionIO[IOVal[Int]] =
    sql"insert into hit (hitid,hitslotid,percentage,datetime) values (${UUID
      .randomUUID()
      .toString}, ${hit.hitSlotId}, ${hit.percentage},${hit.dateTime} )".update.run
      .map(Right(_))

  def loadHitBy(slotIds: Set[String]): ConnectionIO[IOVal[Set[Hit]]] = {

    val root: fragment.Fragment = sql"select hitid,hitslotid,percentage,datetime from hit where"
    val criteria                = fr"${slotIds.map(id => s"hitslotid=$id").mkString(",")}"

    (root ++ criteria).query[Hit].to[Set].map(Right(_))
  }

  /*(for {
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
    } yield hits).mapFutureRight*/
}
