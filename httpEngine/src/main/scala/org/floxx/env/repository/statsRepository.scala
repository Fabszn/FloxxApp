package org.floxx.env.repository

import org.floxx.model.stats.StatItem
import zio._
import doobie.implicits._
import zio.interop.catz._
import org.floxx.env.repository.DbTransactor.TxResource

object statsRepository {

  trait StatsRepo {

    def hitsListWithPercentage(): Task[Seq[StatItem]]
  }

  case class StatsRepoPg(r:TxResource) extends StatsRepo {

    override def hitsListWithPercentage(): Task[Seq[StatItem]] =
      sql"""select s.slotId, talk, percentage, roomid, fromtime,totime, s.day  from
      ( select max(datetime) as md, hitslotid from hit group by hitslotid) r
      inner join hit h on r.md=h.datetime and r.hitslotid=h.hitslotid
      right join slot s on h.hitslotid=s.slotid""".query[StatItem].to[Seq].transact(r.xa)

  }

  val layer:RLayer[Has[TxResource], Has[StatsRepoPg]]= (StatsRepoPg(_)).toLayer

  def hitsListWithPercentage:URIO[Has[StatsRepo], Seq[StatItem]] = ZIO.serviceWith[StatsRepo](_.hitsListWithPercentage())


}
