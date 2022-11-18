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
    override def hitsListWithPercentage(): Task[Seq[StatItem]] =
      run(quote(stats)).provideEnvironment(ZEnvironment(dataSource))

    override def aggregatePercentageByDay(dayValue: DayValue): Task[Seq[AggPercentageItem]] =
      run(quote(statsPerc.filter(_.day == lift(dayValue)))) .provideEnvironment(ZEnvironment(dataSource)) flatMap (l => ZIO.attempt(l.map(v => AggPercentageItem(v.percentage, v.label))))

    override def aggregatePercentageGlobal: Task[List[AggPercentageItem]] =
      run(quote(statsPercGlobal)).provideEnvironment(ZEnvironment(dataSource)) flatMap (l => ZIO.attempt(l.map(v => AggPercentageItem(v.percentage, v.label))))
  }

  val layer: RLayer[DataSource, StatsRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
      } yield StatsRepository(dataSource)
    }

  def hitsListWithPercentage: RIO[StatsRepo, Seq[StatItem]] = ZIO.serviceWithZIO[StatsRepo](_.hitsListWithPercentage())

}
