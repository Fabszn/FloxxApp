package org.floxx.env.repository

import doobie.implicits._
import doobie.util.fragment
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.{FloxxError, model}
import org.floxx.model.{Hit, SlotId}
import zio._
import zio.interop.catz._

import java.util.UUID

object hitRepository {

  trait HitRepo {
    def loadHitBy(slotIds: Set[SlotId]): IO[FloxxError,Set[model.Hit]]
    def save(hit: Hit): IO[FloxxError,Int]

  }

  case class HitRepoCfg(r: TxResource) extends HitRepo  {

    def save(hit: Hit): IO[FloxxError,Int] =
      sql"insert into hit (hitid,hitslotid,percentage,datetime) values (${UUID
        .randomUUID()
        .toString}, ${hit.hitSlotId}, ${hit.percentage},${hit.dateTime} )".update.run.transact(r.xa).mapError(errorProc)

    def loadHitBy(slotIds: Set[SlotId]): IO[FloxxError,Set[Hit]] = {

      val root: fragment.Fragment = sql"select hitid,hitslotid,percentage,datetime from hit where"
      val criteria                = fr"${slotIds.map(id => s"hitslotid=$id").mkString(",")}"

      (root ++ criteria).query[Hit].to[Set].transact(r.xa).mapError(errorProc)
    }

  }

  val layer: RLayer[Has[TxResource], Has[HitRepo]] = (HitRepoCfg(_)).toLayer

  def save(hit: Hit): URIO[Has[HitRepo], Int] = ZIO.serviceWith[HitRepo](_.save(hit))
  def loadHitBy(slotIds: Set[SlotId]): URIO[Has[HitRepo], Set[Hit]] =
    ZIO.serviceWith[HitRepo](_.loadHitBy(slotIds))

}
