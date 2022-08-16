package org.floxx.env.repository

import org.floxx.model.stats.{AggregatePercenteItem, StatItem}
import zio._

import javax.sql.DataSource

object statsRepository {

  trait StatsRepo {
    def hitsListWithPercentage(): Task[Seq[StatItem]]
    def aggregatePercentage(): Task[Seq[AggregatePercenteItem]]
  }

  case class StatsRepository(dataSource: DataSource) extends StatsRepo {
    import QuillContext._
    val env                                                    = Has(dataSource)
    override def hitsListWithPercentage(): Task[Seq[StatItem]] = run(quote(stats)).provide(env)

    override def aggregatePercentage(): Task[Seq[AggregatePercenteItem]] = run(
      quote(
        statsPerc
      )
    ).provide(env)
  }

  val layer: RLayer[Has[DataSource], Has[StatsRepo]] = (StatsRepository(_)).toLayer

  def hitsListWithPercentage: RIO[Has[StatsRepo], Seq[StatItem]] = ZIO.serviceWith[StatsRepo](_.hitsListWithPercentage())

}
