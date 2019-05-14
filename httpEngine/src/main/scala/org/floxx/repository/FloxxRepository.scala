package org.floxx.repository

import org.floxx.BusinessVal
import org.floxx.repository.Keys.RedisKey
import org.slf4j.{Logger, LoggerFactory}

import scala.concurrent.Future

trait FloxxRepository[K <: RedisKey] extends GlobalRepository {
  import org.floxx.utils.floxxUtils._

  val logger: Logger = LoggerFactory.getLogger(this.getClass)

  val _key: K
  type ResultValue = String

  def set(value: String, id: Option[String] = None): Future[BusinessVal[Boolean]] = {
    val _id = id match {
      case Some(i) => s"${_key._root_key}:${i}"
      case None => _key.next
    }

    redis.set(_id, value).mapFutureRight
  }

  def get(key: String): Future[BusinessVal[Option[ResultValue]]] = {

    if (!key.startsWith(_key._root_key)) {
      Left("Key doesn't start with the right root value").future
    }

    redis.get(key).mapFutureRight
  }

  protected def cleanKey(composedKey: String): String = {
    val t = composedKey.replace(s"${_key._root_key}:", "")
    println(t)
    t

  }

}
