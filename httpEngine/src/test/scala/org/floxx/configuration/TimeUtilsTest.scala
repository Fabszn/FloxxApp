package org.floxx.configuration

import org.floxx.configuration.config.GlobalConfig
import org.floxx.domain.Slot._
import org.floxx.domain.{ CurrentYear, Room, Slot }
import org.floxx.service.timeUtils
import org.joda.time.LocalTime
import org.scalatest.funsuite.AnyFunSuite
import pureconfig.ConfigSource
import pureconfig.generic.auto._

class TimeUtilsTest extends AnyFunSuite {

  val slot1 = Slot(
    Slot.Id("wednesday_neu253_t_09:30-12:30_2022"),
    Room.Name("neu253_t"),
    Room.Id(321),
    Slot.FromTime("09:30"),
    Slot.ToTime("12:30"),
    Kind("Conference"),
    Title("test1"),
    Slot.Day("Friday"),
    CurrentYear(2022)
  )
  val slot2 = Slot(
    Slot.Id("wednesday_b_amphi_13:30-16:30_2022"),
    Room.Name("b_amphi"),
    Room.Id(765),
    Slot.FromTime("13:30"),
    Slot.ToTime("16:30"),
    Kind("test2"),
    Title("test2"),
    Slot.Day("monday"),
    CurrentYear(2022)
  )
  val slot3 = Slot(
    Slot.Id("wednesday_b_amphi_10:30-11:30_2022"),
    Room.Name("b_amphi"),
    Room.Id(987),
    Slot.FromTime("10:30"),
    Slot.ToTime("11:30"),
    Kind("Conference"),
    Title("test3"),
    Slot.Day("Friday"),
    CurrentYear(2022)
  )

  test("Load config test") {

    val conf = ConfigSource.default.loadOrThrow[GlobalConfig]

    println(conf.cfp.currentYear)
    val ctx =  timeUtils.extractDayAndStartTime(
      Day("Friday"),
      LocalTime.parse("09:35"),
      conf.copy(cfp = conf.cfp.copy(CurrentYear(2022))))(_)

    val resultSlot1 = ctx(slot1)
    val resultSlot2 = ctx(slot2)

    assert(resultSlot1)
    assert(!resultSlot2)
  }

}
