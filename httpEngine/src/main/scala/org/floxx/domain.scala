package org.floxx

import cats.effect.IO
import io.circe._

import io.circe.generic.extras.semiauto._
import io.circe.generic.semiauto.{ deriveDecoder, deriveEncoder }

import org.http4s.circe.jsonOf
import org.floxx.domain.AuthUser._
import org.floxx.domain.ConfDay.{ DayIndex, DayValue }
import org.floxx.domain.Information.{ Content, DateCreate, Title }
import org.floxx.domain.Mapping.UserSlot
import org.floxx.domain.Overflow.{ AffectedRoom, DateTime, Level }
import org.floxx.domain.Slot.Day
import org.floxx.domain.User.SimpleUser
import org.http4s.EntityDecoder

import java.text.SimpleDateFormat
import java.time.{ ZoneId, ZonedDateTime }
import scala.util.Try

object domain {

  val defaultZoneId: ZoneId = ZoneId.of("Europe/Paris")

  final case class AuthUser(
      userId: Option[SimpleUser.Id],
      login: Login,
      firstName: Firstname,
      lastName: Lastname,
      mdp: Mdp,
      isAdmin: Boolean = false
  )

  object AuthUser {
    final case class Id(value: String) extends AnyVal
    final case class Login(value: String) extends AnyVal
    object Login {
      implicit val enc: Encoder[Login] = deriveUnwrappedEncoder[Login]
      implicit val dec: Decoder[Login] = deriveUnwrappedDecoder[Login]
    }
    final case class Firstname(value: String) extends AnyVal
    final case class Lastname(value: String) extends AnyVal
    final case class Mdp(value: String) extends AnyVal
    object Mdp {
      implicit val MdpIdDecoder: Decoder[Mdp] = deriveUnwrappedDecoder[Mdp]
      implicit val MdpIdEncoder: Encoder[Mdp] = deriveUnwrappedEncoder[Mdp]
    }
  }

  final case class CurrentYear(value: Int) extends AnyVal

  final case class ConfDay(dayIndex: DayIndex, dayValue: DayValue)

  object ConfDay {

    final case class DayIndex(value: Int) extends AnyVal
    object DayIndex {
      implicit val dayIndexDecoder: Decoder[DayIndex] = deriveUnwrappedDecoder[DayIndex]
    }
    object DayIndexVar {
      def unapply(s: String): Option[DayIndex] =
        if (s.nonEmpty) {
          Try(DayIndex(s.toInt)).toOption
        } else {
          Option.empty[DayIndex]
        }

    }
    final case class DayValue(value: String) extends AnyVal
    object DayValue {
      implicit val dayValueDecoder: Decoder[DayValue] = deriveUnwrappedDecoder[DayValue]
    }
    implicit val confDayDecoder: Decoder[ConfDay] = deriveDecoder[ConfDay]

  }

  final case class AggPercentageItem(percentage: Int, label: Int)

  final case class AggregatePercenteItem(percentage: Int, label: Int, day: DayValue, year: Int)

  final case class GlobalAggregatePercenteItem(percentage: Int, label: Int, year: Int)

  object GlobalAggregatePercenteItem {

    implicit val dec: Decoder[GlobalAggregatePercenteItem] = deriveDecoder[GlobalAggregatePercenteItem]
    implicit val enc: Encoder[GlobalAggregatePercenteItem] = deriveEncoder[GlobalAggregatePercenteItem]

  }

  case class StatItem(
      slotId: Option[Slot.Id],
      talk: Talk,
      percentage: Option[Int],
      roomid: String,
      fromtime: String,
      totime: String,
      day: String
  )

  object Mapping {
    case class UserSlot(user: Option[User.SimpleUser], slot: Slot)

    object UserSlot {

      implicit val ordering: Ordering[UserSlot] = (x: UserSlot, y: UserSlot) =>
        x.slot.fromTime.value.compareTo(y.slot.fromTime.value)
    }
  }

  object User {

    case class SimpleUser(userId: SimpleUser.Id, nom: SimpleUser.Nom, prenom: SimpleUser.Prenom)
    object SimpleUser {
      final case class Id(value: String) extends AnyVal
      object Id {
        implicit val dec: Decoder[SimpleUser.Id] = deriveUnwrappedDecoder[SimpleUser.Id]
        implicit val enc: Encoder[SimpleUser.Id] = deriveUnwrappedEncoder[SimpleUser.Id]
      }
      final case class Nom(value: String) extends AnyVal
      final case class Prenom(value: String) extends AnyVal
    }

  }

  case class Room(id: Room.Id, name: Room.Name, capacity: Room.Capacity, setup: Room.Setup)

  object Room {
    import io.circe.generic.semiauto._

    final case class Id(value: String) extends AnyVal

    final case class Name(value: String) extends AnyVal
    final case class Capacity(value: Int) extends AnyVal
    final case class Setup(value: String) extends AnyVal

    object Id {
      implicit val enc: Encoder[Room.Id] = deriveEncoder[Room.Id]
      implicit val dec: Decoder[Room.Id] = deriveDecoder[Room.Id]

      implicit val ordering: Ordering[Room.Id] = (x: Room.Id, y: Room.Id) => x.value.compareTo(y.value)

    }
    object Name {
      implicit val enc: Encoder[Room.Name] = deriveEncoder[Room.Name]
      implicit val dec: Decoder[Room.Name] = deriveDecoder[Room.Name]

    }
  }

  final case class Talk(talkType: String, title: String)
  object Talk {

    def fromString(t: Talk): String = s"${t.talkType}%${t.title}"
    def toString(t: String): Talk = {
      val vs = t.split("%")
      Talk(vs(0), vs(1))
    }
    implicit val talkDecoder: Decoder[Talk] = deriveDecoder[Talk]
    implicit val talkEncoder: Encoder[Talk] = deriveEncoder[Talk]
  }

  final case class Slot(
      slotId: Slot.Id,
      roomId: Room.Id,
      fromTime: Slot.FromTime,
      toTime: Slot.ToTime,
      talk: Option[Talk],
      day: Slot.Day,
      yearSlot: CurrentYear
  )

  object Slot {

    private def millis2Year(m: Long): CurrentYear = {
      val ldt = new SimpleDateFormat("yyyy")
      CurrentYear(ldt.format(m).toInt)
    }

    final case class Id(value: String) extends AnyVal
    object Id {
      implicit val idDecoder: Decoder[Id] = deriveUnwrappedDecoder[Id]

    }
    final case class FromTime(value: String) extends AnyVal
    final case class ToTime(value: String) extends AnyVal
    final case class Day(value: String) extends AnyVal
    object Day {
      implicit val ordering: Ordering[Day] = (x: Day, y: Day) => x.value.compareTo(y.value)
    }

    implicit val ordering: Ordering[Slot] = (x: Slot, y: Slot) =>
      s"${x.fromTime.value}-${x.roomId}".compareTo(s"${y.fromTime.value}-${y.roomId}")

    implicit val decodeSlot: Decoder[Slot] = (c: HCursor) => {
      for {
        slotId <- c.downField("slotId").as[String]
        roomId <- c.downField("roomId").as[String]
        fromTime <- c.downField("fromTime").as[String]
        toTime <- c.downField("toTime").as[String]
        talk <- c.downField("talk").as[Option[Talk]]
        day <- c.downField("day").as[String]
        currentYear <- c.downField("fromTimeMillis").as[Long]
      } yield {
        new Slot(
          Slot.Id(slotId),
          Room.Id(roomId),
          FromTime(fromTime),
          ToTime(toTime),
          talk,
          Slot.Day(day),
          millis2Year(currentYear)
        )
      }
    }

  }

  final case class PlanningDayItem(roomId: Room.Id, slots: Seq[UserSlot])
  final case class Planning(day: Day, rooms: Seq[PlanningDayItem])

  case class TrackHitInfo(
      hitSlotId: Slot.Id,
      slot: Slot,
      hitInfo: Option[Hit],
      overflow: Option[Overflow] = Option.empty[Overflow]
  )

  object TrackHitInfo {

    implicit val trackHitInfoDecoder: Decoder[TrackHitInfo] = deriveDecoder[TrackHitInfo]
    implicit val format: EntityDecoder[IO, TrackHitInfo]    = jsonOf[IO, TrackHitInfo]
  }

  final case class Overflow(
      slotId: Slot.Id,
      level: Level,
      datetime: DateTime                 = DateTime(ZonedDateTime.now(defaultZoneId)),
      affectedRoom: Option[AffectedRoom] = Option.empty[AffectedRoom]
  )

  object Overflow {

    final case class Level(value: Int) extends AnyVal
    object Level {
      implicit val levelDecoder: Decoder[Level] = deriveUnwrappedDecoder[Level]
    }
    final case class DateTime(value: ZonedDateTime) extends AnyVal
    object DateTime {
      implicit val dateTimeDecoder: Decoder[DateTime] = deriveUnwrappedDecoder[DateTime]
    }
    final case class AffectedRoom(value: String) extends AnyVal
    object AffectedRoom {
      implicit val affectedRoomDecoder: Decoder[AffectedRoom] = deriveUnwrappedDecoder[AffectedRoom]
    }

    implicit val overflowDecoder: Decoder[Overflow] = deriveDecoder[Overflow]
  }

  case class Hit(
      hitid: Option[String] = None,
      hitSlotId: String,
      percentage: Int,
      dateTime: Long = System.currentTimeMillis(),
      userId: domain.User.SimpleUser.Id
  )
  object Hit {
    implicit val hitDecoder: Decoder[Hit] = deriveDecoder[Hit]
  }

  final case class HitLatest(hitSlotId: String, hitid: String)

  case class Information(
      id: Information.Id = Information.Id(-1),
      title: Title,
      content: Content,
      dateCreate: DateCreate = DateCreate.now(),
      isArchived: Boolean    = false
  )

  object Information {
    final case class Id(value: Long) extends AnyVal
    object Id {
      implicit val idDecoder: Decoder[Id] = deriveUnwrappedDecoder[Id]

    }
    final case class Title(value: String) extends AnyVal
    object Title {
      implicit val titleDecoder: Decoder[Title] = deriveUnwrappedDecoder[Title]

    }
    final case class Content(value: String) extends AnyVal
    object Content {
      implicit val contentDecoder: Decoder[Content] = deriveUnwrappedDecoder[Content]

    }
    final case class DateCreate(value: ZonedDateTime) extends AnyVal

    object DateCreate {
      implicit val dateCreateDecoder: Decoder[DateCreate] = deriveUnwrappedDecoder[DateCreate]
      def now(): DateCreate                               = DateCreate(ZonedDateTime.now())
    }

    implicit val informationDecoder: Decoder[Information] = deriveDecoder[Information]
    implicit val format: EntityDecoder[IO, Information]   = jsonOf[IO, Information]

  }

  final case class InformationReadStatus(userId: SimpleUser.Id, infoId: Information.Id)

  object jwt {

    case class UserInfo(userId: SimpleUser.Id, firstname: Login, isAdmin: Boolean)

    object UserInfo {

      implicit val enc: Encoder[UserInfo] = deriveEncoder[UserInfo]
      implicit val dec: Decoder[UserInfo] = deriveDecoder[UserInfo]

      def empty: UserInfo = UserInfo(SimpleUser.Id("-"), Login("-"), isAdmin = false)
    }

  }

  object error {

    sealed trait FloxxError extends Exception {
      def msg: String
    }
    final case class LoadCfpDataError(msg: String) extends FloxxError

    final case class AuthentificationError(msg: String) extends FloxxError

    final case class ParsingError(msg: String) extends FloxxError

    final case class DatabaseError(msg: String) extends FloxxError

    final case class ConfigurationError(msg: String) extends FloxxError

  }

}
