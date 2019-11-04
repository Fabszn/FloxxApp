package org.floxx.repository.redis

import org.floxx.repository.redis.Keys.SecurityInfo

class SecurityRepo extends FloxxRepository[SecurityInfo]{
  override val _key: SecurityInfo = SecurityInfo()


}
