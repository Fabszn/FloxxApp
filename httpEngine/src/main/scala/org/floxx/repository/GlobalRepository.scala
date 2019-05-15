package org.floxx.repository

import org.floxx.config.ConfigService


trait GlobalRepository {

  import scredis._

  val redis = Redis()

}
