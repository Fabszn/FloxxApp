package org.floxx.env.repository

import org.floxx.domain.ConfDay.DayValue
import org.floxx.domain.{ AggPercentageItem, StatItem }
import org.floxx.env.configuration.config.Configuration
import zio._

import javax.sql.DataSource

@SuppressWarnings(Array("org.wartremover.warts.Product"))
object statsRepository {

  val layer: RLayer[DataSource with Configuration, StatsRepo] =
    ZLayer {
      for {
        dataSource <- ZIO.service[DataSource]
        conf <- ZIO.service[Configuration]
      } yield StatsRepository(dataSource, conf)
    }

  trait StatsRepo {
    def hitsListWithPercentage(): Task[Seq[StatItem]]
    def aggregatePercentageByDay(dayValue: DayValue): Task[Seq[AggPercentageItem]]
    def aggregatePercentageGlobal: Task[Seq[AggPercentageItem]]
  }

  case class StatsRepository(dataSource: DataSource, conf: Configuration) extends StatsRepo {
    import QuillContext._
    override def hitsListWithPercentage(): Task[Seq[StatItem]] =
      conf.getConf
        .flatMap { c =>
          run(
            quote(
              stats
                .join(slots)
                .on((s, sl) => s.slotId.contains(sl.slotId))
                .filter {
                  case (_, sl) => sl.yearSlot == lift(c.cfp.currentYear)
                }
                .map(_._1)
            )
          )
        }
        .provideEnvironment(ZEnvironment(dataSource))

    override def aggregatePercentageByDay(dayValue: DayValue): Task[Seq[AggPercentageItem]] =
      run(quote(statsPerc.filter(_.day == lift(dayValue)))).provideEnvironment(ZEnvironment(dataSource)) flatMap (
          l => ZIO.attempt(l.map(v => AggPercentageItem(v.percentage, v.label)))
      )

    override def aggregatePercentageGlobal: Task[List[AggPercentageItem]] =
      run(quote(statsPercGlobal)).provideEnvironment(ZEnvironment(dataSource)) flatMap (
          l => ZIO.attempt(l.map(v => AggPercentageItem(v.percentage, v.label)))
      )
  }


}
