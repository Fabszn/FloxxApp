package org.floxx.repository.postgres

import doobie.free.connection.ConnectionIO
import doobie.implicits._
import org.floxx.IOVal
import org.floxx.model.stats.StatItem

trait StatsRepo[F[_]] {

  def hitsListWithPercentage(): ConnectionIO[IOVal[Seq[StatItem]]]
}

class StatsRepoPg extends StatsRepo[ConnectionIO] {

  override def hitsListWithPercentage(): ConnectionIO[IOVal[Seq[StatItem]]] =
    sql"""select s.slotId, talk, percentage, roomid, fromtime,totime, s.day  from
      ( select max(datetime) as md, hitslotid from hit group by hitslotid) r
      inner join hit h on r.md=h.datetime and r.hitslotid=h.hitslotid
      right join slot s on h.hitslotid=s.slotid""".query[StatItem].to[Seq].map(Right(_))

}
