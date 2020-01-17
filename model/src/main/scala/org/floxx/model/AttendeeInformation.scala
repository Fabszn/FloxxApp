package org.floxx.model

import org.floxx.model.jsonModel.Slot

case class AttendeeInformation(hitSlotId: String, slot: Slot, hitInfo: Option[Hit])
