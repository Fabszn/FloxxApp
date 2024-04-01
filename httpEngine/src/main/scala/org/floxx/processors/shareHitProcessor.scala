package org.floxx.processors

import io.circe.generic.semiauto.{deriveDecoder, deriveEncoder}
import io.circe.syntax.EncoderOps
import io.circe.{Decoder, Encoder}
import org.floxx.domain.HitShare
import org.floxx.domain.HitShare.{Response, Status}
import org.floxx.repository.hitRepository.HitRepo
import org.floxx.service.http.Http
import zio.{Task, URLayer, ZIO, ZLayer}

import java.time.ZonedDateTime

object shareHitProcessor {

  case class VoxxrinJsonBody(capacityFillingRatio: Float, recordedAt: ZonedDateTime)
  object VoxxrinJsonBody {
    implicit val dec: Decoder[VoxxrinJsonBody] = deriveDecoder[VoxxrinJsonBody]
    implicit val enc: Encoder[VoxxrinJsonBody] = deriveEncoder[VoxxrinJsonBody]
  }

  val layer: URLayer[Http with HitRepo, ShareHitProcessor] = ZLayer {
    for {
      http <- ZIO.service[Http]
      repo <- ZIO.service[HitRepo]
    } yield ShareHitProcessorService(http, repo)
  }

  trait ShareHitProcessor {
    def process(hitShare: HitShare): Task[Unit]
  }

  private final case class ShareHitProcessorService(http: Http, hitRepo: HitRepo) extends ShareHitProcessor {
    override def process(hitShare: HitShare): Task[Unit] = {
      ZIO.logInfo(s"Start processing hit ${hitShare.id}") *>
      ZIO
        .succeed(
          VoxxrinJsonBody(
            capacityFillingRatio = ((hitShare.perc.value / 100).toFloat),
            recordedAt           = hitShare.dateCreation.value
          )
        )
        .flatMap(
          body =>
            ZIO.logInfo(s"${body.asJson}") *>
            http
              .shareHit(hitShare.roomId,body)
              .tapError(err => ZIO.logError(s"An error occured ${err.msg}") )
              .fold(
                er =>
                  ZIO.logWarning(s"An error occured while share hit with Voxxrin : [${er}]") *>
                  hitRepo.updateHitShare(
                    hitShare.id,
                    Status(false),
                    Response(s"Error Reponse from service : [$er]")
                  ),
                rep =>
                  ZIO.logInfo("Success on share hit with Voxxrin") *>
                  hitRepo.updateHitShare(
                    hitShare.id,
                    Status(true),
                    Response(s"Success Reponse from service : [$rep] : [${rep}]")
                  )
              )
        )
    }

  }

}
