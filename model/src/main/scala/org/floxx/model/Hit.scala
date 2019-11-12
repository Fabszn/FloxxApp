package org.floxx.model

import play.api.libs.json.Json

case class Hit(hitid: Option[String] = None, hitSlotId: String, percentage: Int, dateTime: Long = System.currentTimeMillis())
object Hit {
  implicit val format = Json.format[Hit]
}
