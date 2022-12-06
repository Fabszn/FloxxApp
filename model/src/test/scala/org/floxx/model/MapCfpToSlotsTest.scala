package org.floxx.model

import io.circe.parser._
import org.floxx.domain.Slot
import zio.ZIO
import zio.test.Assertion.equalTo
import zio.test._

import scala.io.Source
import zio.test.ZIOSpecDefault

object MapCfpToSlotsTest extends ZIOSpecDefault {
  override def spec =
    suite("A slots' list")(
      test("json is parsed") {
        val json = Source.fromResource("test.json")
        for {
          j <- ZIO.fromEither(parse(json.mkString)).mapError(e => new Exception(s"Slots' Json file cannot be parsed ${e.message} ${e.getCause}"))
          l <- ZIO.fromEither(j.hcursor.downField("slots").as[Seq[Slot]]).mapError(e => new Exception(s"decode to List[slot] doesn't work ${e.getMessage} - ${e.getCause}"))
        } yield assert(l.size)(equalTo(2))
      }
    )

}
