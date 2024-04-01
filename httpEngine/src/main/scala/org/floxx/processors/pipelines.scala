package org.floxx.processors

import org.floxx.processors.shareHitProcessor.ShareHitProcessor
import org.floxx.repository.hitRepository.HitRepo
import zio._
import zio.stream.ZSink

object pipelines {

  object shareHitPipeline {

    val layer: URLayer[HitRepo with ShareHitProcessor, ShareHitPipeline] = ZLayer {
      for {
        hitRepo <- ZIO.service[HitRepo]
        processor <- ZIO.service[ShareHitProcessor]
      } yield ShareHitPipelineService(hitRepo,processor)
    }

    trait ShareHitPipeline{
      def run : Task[Unit]
    }

    private final case class ShareHitPipelineService(hitRepo: HitRepo, shareHitProcessor: ShareHitProcessor) extends ShareHitPipeline{
      override def run: Task[Unit] = {
        ZIO.logInfo("start stream Share Hit") *>
        hitRepo.
        streamHitShare
        .run(ZSink.foreach(shareHitProcessor.process))
        .schedule(Schedule.spaced(10.seconds))
        .flatMap(_ => ZIO.unit)
        .retry(Schedule.exponential(30.second))
      }

    }


    def run: RIO[ShareHitPipeline, Unit] = ZIO.serviceWithZIO[ShareHitPipeline](_.run)

  }

}
