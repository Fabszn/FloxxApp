package org.floxx.model

import io.circe.parser._
import org.floxx.domain.Slot
import zio.ZIO
import zio.test.Assertion.equalTo
import zio.test.environment.TestEnvironment
import zio.test._

import scala.io.Source

object MapCfpToSlotsTest extends DefaultRunnableSpec {
  override def spec: Spec[TestEnvironment, TestFailure[Any], TestSuccess] =
    suite("A slots' list")(
      testM("json is parsed") {
        val json = Source.fromResource("test.json")
        for {
          j <- ZIO.fromEither(parse(json.mkString)).mapError(e => new Exception(s"Slots' Json file cannot be parsed ${e.message} ${e.getCause}"))
          l <- ZIO.fromEither(j.hcursor.downField("slots").as[Seq[Slot]]).mapError(e => new Exception(s"decode to List[slot] doesn't work ${e.getMessage} - ${e.getCause}"))
        } yield assert(l.size)(equalTo(2))
      }
    )

}
