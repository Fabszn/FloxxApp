package org.floxx.env.service

import org.floxx.domain.ConfDay.DayIndex
import org.floxx.domain.{AggPercentageItem, StatItem}
import org.floxx.env.configuration.config.Configuration
import org.floxx.env.repository.statsRepository.StatsRepo
import zio._
import org.floxx.domain


object statService {

  trait StatsService {

    def slotsStatus: Task[Seq[StatItem]]
    def globalPercentageStatus(idxDay: DayIndex): Task[Seq[AggPercentageItem]]
    def globalPercentageStatus: Task[Seq[AggPercentageItem]]

  }

  case class StatsServiceImpl(statRepo: StatsRepo, conf: Configuration) extends StatsService {
    override def slotsStatus: Task[Seq[StatItem]] = statRepo.hitsListWithPercentage()

    override def globalPercentageStatus(idxDay: DayIndex): Task[Seq[AggPercentageItem]] =
      conf.getConf flatMap { conf =>
        val cd: Option[domain.ConfDay] = conf.cfp.days.find(_.dayIndex == idxDay)
        cd.fold(
          statRepo.aggregatePercentageGlobal
        )(selectedDay => statRepo.aggregatePercentageByDay(selectedDay.dayValue))
      }

    override def globalPercentageStatus: Task[Seq[AggPercentageItem]] = statRepo.aggregatePercentageGlobal
  }

  def layer: RLayer[StatsRepo with Configuration, StatsService] =
    ZLayer {
      for {
        statsRepo <- ZIO.service[StatsRepo]
        conf <- ZIO.service[Configuration]
      } yield StatsServiceImpl(statsRepo, conf)
    }


  def slotsStatus: RIO[StatsService, Seq[StatItem]] = ZIO.serviceWithZIO[StatsService](_.slotsStatus)
  def globalPercentageStatus(idxDay: DayIndex): RIO[StatsService, Seq[AggPercentageItem]] =
    ZIO.serviceWithZIO[StatsService](_.globalPercentageStatus((idxDay)))


}
