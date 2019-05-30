package org.floxx.model

import play.api.libs.json.Json

case class Hit(slotId: String, percentage: String)
object Hit {
  implicit val format = Json.format[Hit]
}
