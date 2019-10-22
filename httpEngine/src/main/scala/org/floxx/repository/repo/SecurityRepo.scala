package org.floxx.repository.repo

import org.floxx.repository.FloxxRepository
import org.floxx.repository.Keys.SecurityInfo

class SecurityRepo extends FloxxRepository[SecurityInfo]{
  override val _key: SecurityInfo = SecurityInfo()


}
