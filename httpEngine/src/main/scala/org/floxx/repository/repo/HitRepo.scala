package org.floxx.repository.repo

import org.floxx.repository.FloxxRepository
import org.floxx.repository.Keys.Hit



class HitRepo extends FloxxRepository[Hit] {
  override val _key: Hit = Hit()
}

