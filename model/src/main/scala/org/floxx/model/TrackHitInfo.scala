package org.floxx.model

import org.floxx.model.jsonModel.Slot

case class TrackHitInfo(hitSlotId: String, slot: Slot, hitInfo: Option[Hit])
