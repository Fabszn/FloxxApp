package org.floxx.model

import cats.effect.IO
import org.http4s.circe.jsonOf
import io.circe.generic.auto._


case class Room(id: String, name: String, capacity: Int, setup: String)

object Room {
  implicit val format = jsonOf[IO, Room]
}
