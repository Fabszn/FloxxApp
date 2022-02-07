package org.floxx.env.repository

import org.floxx.model.stats.StatItem
import zio._
import doobie.implicits._
import org.floxx.FloxxError
import zio.interop.catz._
import org.floxx.env.repository.DbTransactor.TxResource

object statsRepository {

  trait StatsRepo {

    def hitsListWithPercentage(): IO[FloxxError,Seq[StatItem]]
  }

  case class StatsRepoPg(r:TxResource) extends StatsRepo {

    override def hitsListWithPercentage(): IO[FloxxError,Seq[StatItem]] =
      sql"""select s.slotId, talk, percentage, roomid, fromtime,totime, s.day  from
      ( select max(datetime) as md, hitslotid from hit group by hitslotid) r
      inner join hit h on r.md=h.datetime and r.hitslotid=h.hitslotid
      right join slot s on h.hitslotid=s.slotid""".query[StatItem].to[Seq].transact(r.xa).mapError(errorProc)

  }

  val layer:RLayer[Has[TxResource], Has[StatsRepoPg]]= (StatsRepoPg(_)).toLayer

  def hitsListWithPercentage:URIO[Has[StatsRepo], Seq[StatItem]] = ZIO.serviceWith[StatsRepo](_.hitsListWithPercentage())


}
