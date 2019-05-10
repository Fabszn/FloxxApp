package org.floxx.repository






trait GlobalRepository {

  import scredis._

  val redis = Redis()

}
