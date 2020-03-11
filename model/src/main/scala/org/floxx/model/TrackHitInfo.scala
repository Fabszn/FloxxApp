package org.floxx.model

import org.floxx.model.jsonModel.Slot
import io.circe.generic.semiauto._
import io.circe.{ Decoder, Encoder }

case class TrackHitInfo(hitSlotId: SlotId, slot: Slot, hitInfo: Option[Hit])

object TrackHitInfo {

  implicit val dec: Decoder[TrackHitInfo] = deriveDecoder[TrackHitInfo]
  implicit val enc: Encoder[TrackHitInfo] = deriveEncoder[TrackHitInfo]
}
