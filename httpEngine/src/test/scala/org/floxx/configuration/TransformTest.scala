package org.floxx.configuration

import org.floxx.service.timeUtils
import org.scalatest.funsuite.AnyFunSuite
import org.scalatest.matchers.should.Matchers.convertToAnyShouldWrapper

import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

class TransformTest extends AnyFunSuite {

  test("Test extract time") {

    val from = ZonedDateTime.parse("2024-04-17T07:00:00Z")
    val to   = ZonedDateTime.parse("2024-04-17T07:00:00Z").plusHours(5)

    val fromTime = timeUtils.zdt2FormattedTime(from)
    val toTime   = timeUtils.zdt2FormattedTime(to)

    fromTime shouldEqual "07:00"
    toTime shouldEqual "12:00"

  }

  test("Test extract Day of week") {

    val day1 = ZonedDateTime.parse("2024-04-17T07:00:00Z")
    val day2   = ZonedDateTime.parse("2024-04-18T07:00:00Z")

    val fromTime = timeUtils.zdt2DayOfWeek(day1)
    val toTime   = timeUtils.zdt2DayOfWeek(day2)

    fromTime shouldEqual "Wednesday"
    toTime shouldEqual "Thursday"

  }

  test("Test extract YEar") {

    val day1 = ZonedDateTime.parse("2024-04-17T07:00:00Z")
    val day2   = ZonedDateTime.parse("2023-04-18T07:00:00Z")

    val fromTime = timeUtils.zdt2Year(day1)
    val toTime   = timeUtils.zdt2Year(day2)

    fromTime shouldEqual 2024
    toTime shouldEqual 2023

  }

}
