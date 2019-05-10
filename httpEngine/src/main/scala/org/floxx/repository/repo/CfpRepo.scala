package org.floxx.repository.repo

import org.floxx.repository.FloxxRepository
import org.floxx.repository.Keys.SchedulesCfp

class CfpRepo extends FloxxRepository[SchedulesCfp]{
  override val _key: SchedulesCfp = SchedulesCfp()
}