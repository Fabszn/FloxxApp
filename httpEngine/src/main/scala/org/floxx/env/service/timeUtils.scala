package org.floxx.env.service

import org.floxx.domain
import org.floxx.domain.Slot.Day
import org.floxx.env.configuration.config.GlobalConfig
import org.joda.time.format.DateTimeFormat
import org.joda.time.{DateTime, DateTimeZone, LocalTime}
import org.slf4j.{Logger, LoggerFactory}

object timeUtils {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  def extractDayAndStartTime(
      currentDay:Day     = Day(DateTime.now(DateTimeZone.getDefault).dayOfWeek().getAsText.toLowerCase),
      currentTime: LocalTime = DateTime.now(DateTimeZone.getDefault).toLocalTime,
      config:GlobalConfig
  )(
      slot: domain.Slot
  ): Boolean = {

    val trackStartTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.fromTime.value}:00").toLocalTime
    val trackEndTime   = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.toTime.value}:00").toLocalTime

    logger.debug(s">>>>>>>>>>>>>>>>>>>>>>${LocalTime.now(DateTimeZone.getDefault)}")
    logger.debug(s">>>>>>>>>>>>>>${currentDay}")
    logger.debug(s">>>>>>>>>>>>>>${slot.day}")

    //filters
    (currentDay == slot.day) &&
    (currentTime.isAfter(trackStartTime.minusMinutes(config.track.delayBefore))
    || currentTime.isEqual(trackStartTime.minusMinutes(config.track.delayBefore))) &&
    (currentTime.isBefore(trackStartTime.plusMinutes(config.track.delayAfter))
    || currentTime.isEqual(trackStartTime.plusMinutes(config.track.delayAfter))) &&
    (currentTime.isBefore(trackEndTime)
    || currentTime.isEqual(trackEndTime)) &&
    !(slot.roomId.value.startsWith("22") ||
    slot.roomId.value.startsWith("23") ||
    slot.roomId.value.startsWith("21") ||
    slot.roomId.value.startsWith("20"))

  }

}
