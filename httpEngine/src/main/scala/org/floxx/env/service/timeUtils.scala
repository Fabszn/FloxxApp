package org.floxx.env.service

import org.floxx.domain
import org.floxx.domain.Slot
import org.floxx.domain.Slot.{Day, Kind}
import org.floxx.env.configuration.config.GlobalConfig
import org.joda.time.format.DateTimeFormat
import org.joda.time.{DateTime, DateTimeZone, LocalTime}
import org.slf4j.{Logger, LoggerFactory}

object timeUtils {

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  def extractDayAndStartTime(
      currentDay: Day        = Day(DateTime.now(DateTimeZone.getDefault).dayOfWeek().getAsText.toLowerCase),
      currentTime: LocalTime = DateTime.now(DateTimeZone.getDefault).toLocalTime,
      config: GlobalConfig
  )(
      slot: domain.Slot
  ): Boolean =
    if (config.track.devMode.isActivated) {
      logger.warn("#################################################################################")
      logger.warn("#####################  DEV-MODE ACTIVATED    ####################################")
      logger.warn("#####################  DEV-MODE ACTIVATED    ####################################")
      logger.warn("#####################  DEV-MODE ACTIVATED    ####################################")
      logger.warn(s"#####################  ${config.track.devMode}    ####################################")
      logger.warn("#################################################################################")
      computingRules(
        Day(config.track.devMode.currentDay),
        LocalTime.parse(config.track.devMode.currentTime),
        config,
        slot
      )
    } else {
      computingRules(currentDay, currentTime, config, slot)
    }

  private def computingRules(currentDay: Day, currentTime: LocalTime, config: GlobalConfig, slot: domain.Slot) = {
    val trackStartTime = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.fromTime.value}:00").toLocalTime
    val trackEndTime   = DateTimeFormat.forPattern("kk:mm:ss").parseDateTime(s"${slot.toTime.value}:00").toLocalTime

    logger.debug(s">>>>>>>>>>>>>>>>>>>>>>${LocalTime.now(DateTimeZone.getDefault)}")
    logger.debug(s">>>>>>>>>>>>>>${currentDay}")
    logger.debug(s">>>>>>>>>>>>>> slot : ${slot.day} from ${trackStartTime} to ${trackEndTime}")

    //filters
    (currentDay == slot.day) &&
    (currentTime.isAfter(trackStartTime.minusMinutes(config.track.delayBefore))
    || currentTime.isEqual(trackStartTime.minusMinutes(config.track.delayBefore))) &&
    (currentTime.isBefore(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config)))
    || currentTime.isEqual(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config)))) &&
    (currentTime.isBefore(trackEndTime)
    || currentTime.isEqual(trackEndTime)) &&
    !(slot.roomId.value.startsWith("22") ||
    slot.roomId.value.startsWith("23") ||
    slot.roomId.value.startsWith("21") ||
    slot.roomId.value.startsWith("20"))
  }

  def computeDelayAfterTime(kind: Slot.Kind, config: GlobalConfig): Int =
    kind match {
      case Kind("University") => config.track.delayAfterUniversity
      case Kind("Tools-in-Action") => config.track.delayAfterTia
      case Kind("Conference") => config.track.delayAfterConf
      case Kind("Quickie") => config.track.delayAfterQuickie
      case Kind("Keynote") => config.track.delayAfterKeynote
      case Kind("Hands-on Labs") => config.track.delayAfterHol
    }

}
