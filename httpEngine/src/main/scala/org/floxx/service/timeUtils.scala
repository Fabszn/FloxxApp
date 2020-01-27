package org.floxx.service

import com.github.nscala_time.time.StaticForwarderImports.DateTimeFormat
import org.floxx.config.Config
import org.floxx.model.jsonModel.Slot
import org.joda.time.{ DateTime, DateTimeZone, LocalTime }
import org.slf4j.{ Logger, LoggerFactory }

object timeUtils {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  def extractDayAndStartTime(
      currentDay: String     = DateTime.now(DateTimeZone.UTC).dayOfWeek().getAsText.toLowerCase,
      currentTime: LocalTime = DateTime.now().toLocalTime
  )(
      slot: Slot
  ): Boolean = {

    val trackStartTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.fromTime}:00").toLocalTime
    val trackEndTime   = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.toTime}:00").toLocalTime

    logger.info(s"${trackStartTime.plusMinutes(Config.track.delayAfter)}")

    //filters
    (currentDay == slot.day) &&
    (currentTime.isAfter(trackStartTime.minusMinutes(Config.track.delayBefore))
    || currentTime.isEqual(trackStartTime.minusMinutes(Config.track.delayBefore))) &&
    (currentTime.isBefore(trackStartTime.plusMinutes(Config.track.delayAfter))
    || currentTime.isEqual(trackStartTime.plusMinutes(Config.track.delayAfter))) &&
    (currentTime.isBefore(trackEndTime)
    || currentTime.isEqual(trackEndTime)) &&
    !(slot.roomId.startsWith("22") ||
    slot.roomId.startsWith("23") ||
    slot.roomId.startsWith("21") ||
    slot.roomId.startsWith("20"))

  }

}
