package org.floxx.env.repository

import doobie.implicits._
import org.floxx.domain._
import doobie.util.fragment
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model
import org.floxx.model.Hit
import zio._
import zio.interop.catz._

import java.util.UUID

object hitRepository {

  trait HitRepo {
    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[model.Hit]]
    def save(hit: Hit): Task[Int]

  }

  case class HitRepoCfg(r: TxResource) extends HitRepo {

    def save(hit: Hit): Task[Int] = {

      val nextHitId = UUID.randomUUID

      (sql"insert into hit_history (hitid,hitslotid,percentage,datetime) values (${nextHitId.toString}, ${hit.hitSlotId}, ${hit.percentage},${hit.dateTime})".update.run
        .flatMap(
          _ =>
            sql"insert into hit_latest (slotid, fkid_hit) values (${hit.hitSlotId} , ${nextHitId.toString} ) ON CONFLICT (slotid) DO UPDATE SET fkid_hit=${nextHitId.toString}".update.run
        ))
        .transact(r.xa)

    }

    def loadHitBy(slotIds: Seq[Slot.Id]): Task[Seq[Hit]] = {

      val root: fragment.Fragment = sql"select hitid,hitslotid,percentage,datetime from hit_history where"
      val criteria                = fr"${slotIds.map(id => s"hitslotid=$id").mkString(",")}"

      (root ++ criteria).query[Hit].to[Seq].transact(r.xa)
    }

  }

  val layer: RLayer[Has[TxResource], Has[HitRepo]] = (HitRepoCfg(_)).toLayer

  def save(hit: Hit): RIO[Has[HitRepo], Int] = ZIO.serviceWith[HitRepo](_.save(hit))
  def loadHitBy(slotIds: Seq[Slot.Id]): RIO[Has[HitRepo], Seq[Hit]] =
    ZIO.serviceWith[HitRepo](_.loadHitBy(slotIds))

}
