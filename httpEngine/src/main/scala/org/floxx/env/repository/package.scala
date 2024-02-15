package org.floxx.env

import com.zaxxer.hikari.{ HikariConfig, HikariDataSource }
import io.getquill.{ Literal, PostgresZioJdbcContext }
import org.floxx.domain._

import org.floxx.env.api.adminApi.Mapping
import org.floxx.env.configuration.config.{ getConf, Configuration }


import org.floxx.domain.AuthUser
import org.floxx.domain.User.SimpleUser
import zio._

import javax.sql.DataSource

package object repository {

  object QuillContext extends PostgresZioJdbcContext(Literal) {

    val dataSourceLayer: RLayer[Configuration with Scope, DataSource] =
      ZLayer.scoped {
        getConf.flatMap { conf =>
          ZIO.acquireRelease(ZIO.attempt {
            new HikariDataSource(
              new HikariConfig {
                setJdbcUrl(conf.db.url)
                setUsername(conf.db.user)
                setPassword(conf.db.password)
                setDriverClassName(conf.db.driver)
                setMaximumPoolSize(conf.db.maximumPoolSize)
                setMinimumIdle(conf.db.minimumIdleSize)
              }
            )
          })(ds => ZIO.attempt(ds.close()).orDie)

        }
      }

    implicit val informationInsertMeta = insertMeta[Information](_.id)


    val authUser = quote(
      querySchema[AuthUser](
        "users",
        _.userId -> "userid",
        _.login -> "email",
        _.firstName -> "firstname",
        _.lastName -> "lastname",
        _.mdp -> "mdp",
        _.isAdmin -> "isAdmin"
      )
    )

    val simpleUser = quote(
      querySchema[SimpleUser](
        "users",
        _.userId -> "userid",
        _.nom -> "lastname",
        _.prenom -> "firstname"
      )
    )

    val user = quote(
      querySchema[User.SimpleUser](
        "users",
        _.userId -> "userid",
        _.nom -> "lastname",
        _.prenom -> "firstname"
      )
    )

    val stats = quote(
      querySchema[StatItem](
        "stats_hit",
        _.slotId -> "slotId",
        _.percentage -> "percentage",
        _.roomid -> "roomid",
        _.fromtime -> "fromtime",
        _.totime -> "totime",
        _.day -> "day"
      )
    )

    val statsPerc = quote(
      querySchema[AggregatePercenteItem](
        "stats_percentage_by_day",
        _.label -> "nbhit"
      )
    )

    val statsPercGlobal = quote(
      querySchema[GlobalAggregatePercenteItem](
        "stats_percentage_global",
        _.label -> "nbhit"
      )
    )

    val slots = quote(
      querySchema[Slot](
        "slot",
        _.slotId -> "slotId",
        _.roomId -> "roomId",
        _.fromTime -> "fromTime",
        _.toTime -> "toTime",
        _.day -> "day",
        _.yearSlot -> "year_slot"
      )
    )

    val hitHistory = quote(
      querySchema[Hit](
        "hit_history",
        _.hitid -> "hitid",
        _.hitSlotId -> "hitslotid",
        _.percentage -> "percentage",
        _.dateTime -> "datetime",
        _.userId -> "fkuserId"
      )
    )

    val hitLatest = quote(
      querySchema[HitLatest](
        "hit_latest",
        _.hitSlotId -> "slotid",
        _.hitid -> "fkid_hit"
      )
    )

    val userSlots = quote(
      querySchema[Mapping](
        "user_slots",
        _.userId -> "userId",
        _.slotId -> "slotId"
      )
    )

    val overflow = quote(
      querySchema[Overflow](
        "overflow",
        _.slotId -> "fkslotid"
      )
    )

    val information = quote(
      querySchema[Information]("informations", _.id -> "pkid_information")
    )

    val informationReadStatus = quote(
      querySchema[InformationReadStatus]("information_read_status", _.userId -> "userid", _.infoId -> "fkid_information")
    )

  }
}
