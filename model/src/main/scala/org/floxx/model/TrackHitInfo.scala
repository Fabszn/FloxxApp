package org.floxx.model

import cats.effect.IO
import org.floxx.domain._
import io.circe.generic.auto._
import io.circe.{Decoder, Encoder}
import org.http4s.circe.jsonOf

case class TrackHitInfo(hitSlotId: Slot.Id, slot: Slot, hitInfo: Option[Hit])

object TrackHitInfo {


/*  implicit val dec: Decoder[TrackHitInfo] = deriveDecoder[TrackHitInfo]
  implicit val enc: Encoder[TrackHitInfo] = deriveEncoder[TrackHitInfo]*/

  implicit val format = jsonOf[IO, TrackHitInfo]
}
