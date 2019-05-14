package org.floxx.model

import play.api.libs.json.Json

case class Room(id: String, name: String, capacity: Int, setup: String)

object Room {
  implicit val format = Json.format[Room]
}
