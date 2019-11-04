package org.floxx.repository.redis

import java.util.UUID

object Keys {

  sealed trait RedisKey {

    val _root_key: String
    val description: String

    def next: String = s"${_root_key}:${UUID.randomUUID}"

  }

  case class SecurityInfo() extends RedisKey {
    override val _root_key: String   = "security"
    override val description: String = "contains id for role"
  }

  case class SchedulesCfp() extends RedisKey {

    override val _root_key: String   = "shedulecfp"
    override val description: String = "contains all schedules for 3 days (Json format)"
  }

  case class Hit() extends RedisKey {
    override val _root_key: String   = "hit"
    override val description: String = "contains all percentage"
  }

}
