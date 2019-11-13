package org.floxx.repository.redis


@deprecated
trait GlobalRepository {

  import scredis._

  val redis = Redis()

}
