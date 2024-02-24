package org.floxx.service

import org.floxx.domain
import org.floxx.domain.{ CurrentYear, Slot }
import org.floxx.domain.Slot.{ Day, Kind }
import org.floxx.configuration.config.GlobalConfig
import org.joda.time.format.DateTimeFormat
import org.joda.time.{ DateTime, DateTimeZone, LocalTime }
import org.slf4j.{ Logger, LoggerFactory }

import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

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
        config.cfp.currentYear,
        config,
        slot
      )
    } else {
      computingRules(
        currentDay,
        currentTime,
        config.cfp.currentYear,
        config,
        slot
      )
    }

  private def computingRules(
      currentDay: Day,
      currentTime: LocalTime,
      currentYear: CurrentYear,
      config: GlobalConfig,
      slot: domain.Slot
  ) = {
    val trackStartTime: LocalTime = DateTimeFormat.forPattern("kk:mm").parseDateTime(s"${slot.fromTime.value}").toLocalTime
    val trackEndTime: LocalTime   = DateTimeFormat.forPattern("kk:mm").parseDateTime(s"${slot.toTime.value}").toLocalTime
    if (currentDay.value.toLowerCase == slot.day.value.toLowerCase) {
      logger.debug(s">>>>>>>>>>>>>>>>>>>real time>${LocalTime.now(DateTimeZone.getDefault)}")
      logger.debug(s">>>>>>>>>>>>>>>>>>>Time used>${currentTime}")
      logger.debug(s">>>>>>>>>>>>>>${currentDay}")
      logger.debug(s">>>>>>>>>>>>>>${slot.kind}")
      logger.debug(s">>>>>>>>>>>>>> slot : ${slot.day} from ${trackStartTime} to ${trackEndTime}")

      logger.debug(s"(currentDay == slot.day) ${(currentDay == slot.day)}")

      logger.debug(s"(currentYear == slot.yearSlot) ${(currentYear == slot.yearSlot)}")
      logger.debug(s"isAfter ${(currentTime.isAfter(trackStartTime.minusMinutes(config.track.delayBefore))
      || currentTime.isEqual(trackStartTime.minusMinutes(config.track.delayBefore)))}")
      logger.debug(s"isBefore ${(currentTime.isBefore(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config)))
      || currentTime.isEqual(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config))))}")
      logger.debug(s"OnTime ${(currentTime.isBefore(trackEndTime) || currentTime.isEqual(trackEndTime))}")
    }

    //filters
    val isSelected = (currentDay.value.toLowerCase == slot.day.value.toLowerCase) &&
      (currentYear == slot.yearSlot) &&
      (currentTime.isAfter(trackStartTime.minusMinutes(config.track.delayBefore))
      || currentTime.isEqual(trackStartTime.minusMinutes(config.track.delayBefore))) &&
      (currentTime.isBefore(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config)))
      || currentTime.isEqual(trackStartTime.plusMinutes(computeDelayAfterTime(slot.kind, config)))) &&
      (currentTime.isBefore(trackEndTime)
      || currentTime.isEqual(trackEndTime))
    logger.debug(s">>>>>>>>>${slot.slotId}>>>>isSelected>${isSelected}")
    isSelected
  }

  def computeDelayAfterTime(kind: Slot.Kind, config: GlobalConfig): Int =
    kind match {
      case Kind("University") => config.track.delayAfterUniversity
      case Kind("Tools-in-Action") => config.track.delayAfterTia
      case Kind("Conference") => config.track.delayAfterConf
      case Kind("Quickie") => config.track.delayAfterQuickie
      case Kind("Keynote") => config.track.delayAfterKeynote
      case Kind("Hands-on Labs") => config.track.delayAfterHol
      case _ => -1000
    }

  def zdt2FormattedTime(zdt: ZonedDateTime): String = zdt.toLocalTime.format(DateTimeFormatter.ofPattern("HH:mm"))
  def zdt2DayOfWeek(zdt: ZonedDateTime): String     = zdt.toLocalDateTime.getDayOfWeek.toString.toLowerCase.capitalize
  def zdt2Year(zdt: ZonedDateTime): Int             = zdt.toLocalDateTime.getYear

}
