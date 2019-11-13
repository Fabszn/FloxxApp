package org.floxx.repository.redis

import java.util.UUID

object Keys {

  sealed trait RedisKey {

    val _root_key: String
    val description: String

    def next: String = s"${_root_key}:${UUID.randomUUID}"

  }

  

}
