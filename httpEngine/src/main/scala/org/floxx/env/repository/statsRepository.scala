package org.floxx.env.repository

import org.floxx.domain.ConfDay.DayValue
import org.floxx.domain.{ AggPercentageItem, StatItem }
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object statsRepository {

  trait StatsRepo {
    def hitsListWithPercentage(): Task[Seq[StatItem]]
    def aggregatePercentageByDay(dayValue: DayValue): Task[Seq[AggPercentageItem]]
    def aggregatePercentageGlobal: Task[Seq[AggPercentageItem]]
  }

  case class StatsRepository(dataSource: DataSource) extends StatsRepo {
    import QuillContext._
    val env = Has(dataSource)
    override def hitsListWithPercentage(): Task[Seq[StatItem]] =
      run(quote(stats)).provide(env)

    override def aggregatePercentageByDay(dayValue: DayValue): Task[Seq[AggPercentageItem]] =
      run(quote(statsPerc.filter(_.day == lift(dayValue)))) .provide(env) >>= (l => Task(l.map(v => AggPercentageItem(v.percentage, v.label))))

    override def aggregatePercentageGlobal: Task[List[AggPercentageItem]] =
      run(quote(statsPercGlobal)).provide(env) >>= (l => Task(l.map(v => AggPercentageItem(v.percentage, v.label))))
  }

  val layer: RLayer[Has[DataSource], Has[StatsRepo]] = (StatsRepository(_)).toLayer

  def hitsListWithPercentage: RIO[Has[StatsRepo], Seq[StatItem]] = ZIO.serviceWith[StatsRepo](_.hitsListWithPercentage())

}
