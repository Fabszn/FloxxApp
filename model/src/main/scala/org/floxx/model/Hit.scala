package org.floxx.model

import play.api.libs.json.Json

case class Hit(hitSlotId: String, percentage: String, dateTime: Long = System.currentTimeMillis())
object Hit {
  implicit val format = Json.format[Hit]
}
