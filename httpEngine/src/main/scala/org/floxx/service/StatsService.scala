package org.floxx.service

import cats.effect.IO
import doobie.free.connection.ConnectionIO
import org.floxx.IOVal
import org.floxx.model.stats.StatItem
import org.floxx.repository.postgres.StatsRepo

trait StatsService[F[_]] {

  def slotsStatus: IO[IOVal[Seq[StatItem]]]

}

class StatsServiceImpl(statRepo: StatsRepo[ConnectionIO]) extends StatsService[IO] with WithTransact {
  override def slotsStatus: IO[IOVal[Seq[StatItem]]] = run(statRepo.hitsListWithPercentage())
}
