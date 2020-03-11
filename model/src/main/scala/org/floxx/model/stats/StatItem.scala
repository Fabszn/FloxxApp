package org.floxx.model.stats

import io.circe.generic.semiauto.{ deriveDecoder, deriveEncoder }
import io.circe.{ Decoder, Encoder }
import org.floxx.model.SlotId
import org.floxx.model.jsonModel.Talk

case class StatItem(
    slotId: Option[SlotId],
    talk: Talk,
    percentage: Option[Int],
    roomid: String,
    fromtime: String,
    totime: String,
    day: String
)

object StatItem {

  implicit val dec: Decoder[StatItem] = deriveDecoder[StatItem]
  implicit val enc: Encoder[StatItem] = deriveEncoder[StatItem]

}
