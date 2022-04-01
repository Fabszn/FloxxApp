package org.floxx.env.repository

import doobie.implicits._
import org.floxx.env.repository.DbTransactor.TxResource
import org.floxx.model.stats.StatItem
import zio._
import zio.interop.catz._

object statsRepository {

  trait StatsRepo {

    def hitsListWithPercentage(): Task[Seq[StatItem]]
  }

  case class StatsRepository(r: TxResource) extends StatsRepo {

    override def hitsListWithPercentage(): Task[Seq[StatItem]] =

      sql"""SELECT hl.slotId,
       s.talk,
       hh.percentage,
       s.roomid,
       s.fromtime,
       s.totime,
       s.day
        FROM hit_latest hl
        INNER JOIN hit_history hh ON hl.fkid_hit=hh.hitid
        INNER JOIN slot s ON s.slotid=hh.hitslotid
        """.query[StatItem].to[Seq].transact(r.xa)
  }

  val layer: RLayer[Has[TxResource], Has[StatsRepo]] = (StatsRepository(_)).toLayer

  def hitsListWithPercentage: RIO[Has[StatsRepo], Seq[StatItem]] = ZIO.serviceWith[StatsRepo](_.hitsListWithPercentage())

}
