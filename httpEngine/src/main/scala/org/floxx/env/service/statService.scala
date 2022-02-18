package org.floxx.env.service

import org.floxx.env.repository.statsRepository.StatsRepo
import org.floxx.model.stats.StatItem
import zio._

object statService {


  trait StatsService {

    def slotsStatus: Task[Seq[StatItem]]]

  }

  case class StatsServiceImpl(statRepo: StatsRepo) extends StatsService{
    override def slotsStatus: Task[Seq[StatItem]] = statRepo.hitsListWithPercentage()
  }


  def layer:RLayer[Has[StatsRepo], Has[StatsService]] = (StatsServiceImpl(_)).toLayer

}
