package org.floxx.api

import io.circe.Encoder
import io.circe.generic.semiauto.deriveEncoder
import org.floxx.service.statService
import org.floxx.domain.StatItem
import org.http4s.AuthedRoutes
import org.http4s.circe.CirceEntityCodec._
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._
import org.floxx.domain.ConfDay.DayIndexVar
import org.floxx.domain.jwt.UserInfo
import org.floxx.util.CirceValueClassCustomAuto._

import scala.collection.immutable.SortedMap

object statsApi {

  val dsl = Http4sDsl[ApiTask]

  final case class Result(labels: Seq[Int], percentages: Seq[Int])
  object Result {
    implicit val enc: Encoder[Result] = deriveEncoder[Result]
  }

  import dsl._

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case GET -> Root / "stats" / "slots" as _ =>
      statService.slotsStatus flatMap (statItems => {
        val byDay: Map[String, Seq[StatItem]] = statItems.groupBy(_.day)
        Ok(byDay.map { case (day, s) => (day, orderMapKey(s.groupBy(_.fromtime))) })
      })
    case GET -> Root / "stats" / "slots" / "_filling" / DayIndexVar(dayIdx) as _ =>
      statService.globalPercentageStatus(dayIdx) flatMap (aggItems => {
        Ok(Result(aggItems.map(_.percentage), aggItems.map(_.label)))
      })
    case GET -> Root / "stats" / "slots" / "_filling" as _ =>
      statService.slotsStatus flatMap (Ok(_))

  }

  def orderMapKey(s: Map[String, Seq[StatItem]]): Map[String, Seq[StatItem]] = {
    SortedMap.from(s)

  }


}
