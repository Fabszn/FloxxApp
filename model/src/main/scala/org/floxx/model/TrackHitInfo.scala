package org.floxx.model

import cats.effect.IO
import org.floxx.domain._
import io.circe.generic.auto._
import org.http4s.circe.jsonOf

@deprecated
case class TrackHitInfo(hitSlotId: Slot.Id, slot: Slot, hitInfo: Option[Hit])

object TrackHitInfo {

  implicit val format = jsonOf[IO, TrackHitInfo]
}
