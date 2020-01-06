package org.floxx.model

import cats.effect.IO
import org.http4s.circe.jsonOf
import io.circe.generic.auto._

case class Hit(hitid: Option[String] = None, hitSlotId: String, percentage: Int, dateTime: Long = System.currentTimeMillis())
object Hit {

  implicit val format = jsonOf[IO, Hit]
}
