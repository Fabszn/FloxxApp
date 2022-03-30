package org.floxx

import io.circe.{Decoder, Encoder, KeyEncoder}
import io.circe.generic.semiauto._

package object model {

  val notInitializedId: Long = -1

  @deprecated("must be replace by domain.Slot")
  class SlotId(val id: String) extends AnyVal

  object SlotId{
    def apply(id: String): SlotId = new SlotId(id)

    implicit val dec: Decoder[SlotId] = deriveDecoder[SlotId]
    implicit val enc: Encoder[SlotId] = deriveEncoder[SlotId]

    implicit val fooKeyEncoder: KeyEncoder[SlotId] = new KeyEncoder[SlotId] {
      override def apply(slotId: SlotId): String = slotId.id
    }
  }

  type UserId = String

}
