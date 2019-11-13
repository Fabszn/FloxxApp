package org.floxx.repository.redis



trait GlobalRepository {

  import scredis._

  val redis = Redis()

}
