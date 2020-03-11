package org.floxx.model

import cats.effect.IO
import io.circe.generic.semiauto._
import io.circe.{Decoder, Encoder}
import org.http4s.circe.jsonOf

case class Hit(hitid: Option[String] = None, hitSlotId: String, percentage: Int, dateTime: Long = System.currentTimeMillis())
object Hit {

  implicit val dec: Decoder[Hit] = deriveDecoder[Hit]
  implicit val enc: Encoder[Hit] = deriveEncoder[Hit]

  implicit val format = jsonOf[IO, Hit]
}
