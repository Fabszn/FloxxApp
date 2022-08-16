package org.floxx.env.service

import org.floxx.env.repository.statsRepository.StatsRepo
import org.floxx.model.stats.{AggregatePercenteItem, StatItem}
import zio._

object statService {

  trait StatsService {

    def slotsStatus: Task[Seq[StatItem]]
    def globalPercentageStatus: Task[Seq[AggregatePercenteItem]]

  }

  case class StatsServiceImpl(statRepo: StatsRepo) extends StatsService {
    override def slotsStatus: Task[Seq[StatItem]] = statRepo.hitsListWithPercentage()

    override def globalPercentageStatus: Task[Seq[AggregatePercenteItem]] = statRepo.aggregatePercentage()
  }

  def layer: RLayer[Has[StatsRepo], Has[StatsService]] = (StatsServiceImpl(_)).toLayer

  def slotsStatus: RIO[Has[StatsService], Seq[StatItem]] = ZIO.serviceWith[StatsService](_.slotsStatus)
  def globalPercentageStatus: RIO[Has[StatsService], Seq[AggregatePercenteItem]] = ZIO.serviceWith[StatsService](_.globalPercentageStatus)


}
