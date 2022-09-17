package org.floxx.env.api


import io.circe.Encoder
import org.floxx.UserInfo
import org.floxx.env.service.statService
import org.floxx.domain.StatItem
import org.http4s.AuthedRoutes
import org.http4s.circe.CirceEntityCodec._
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._
import io.circe.generic.semiauto._
import org.floxx.domain.ConfDay.DayIndexVar

object statsApi {

  val dsl = Http4sDsl[ApiTask]

  final case class Result(labels: Seq[Int], percentages: Seq[Int])
  object Result{
    implicit val enc: Encoder[Result] = deriveEncoder[Result]
  }


  import dsl._

  def api = AuthedRoutes.of[UserInfo, ApiTask] {
    case GET -> Root / "stats" / "slots" as _ =>
      statService.slotsStatus >>= (statItems => {
          val byDay: Map[String, Seq[StatItem]] = statItems.groupBy(_.day)
          Ok(byDay.map { case (k, s) => (k, s.groupBy(_.fromtime)) })
        })
    case GET -> Root / "stats" / "slots" / "_filling" / DayIndexVar(dayIdx) as _ =>
      statService.globalPercentageStatus(dayIdx) >>= (aggItems => {
          Ok(Result(aggItems.map(_.percentage), aggItems.map(_.label)))
        })
  }

}
