package org.floxx.repository.redis

import org.floxx.BusinessVal
import org.floxx.repository.redis.Keys.RedisKey
import org.slf4j.{Logger, LoggerFactory}

import scala.concurrent.{ExecutionContext, Future}

@deprecated
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

  def get(key: String): Future[BusinessVal[Option[String]]] = {

    if (!key.startsWith(_key._root_key)) {
      Left("Key doesn't start with the right root value").future
    }
    redis.get(key).mapFutureRight
  }

  def getDefault(key: String): Future[BusinessVal[Option[String]]] = {
    logger.warn(_key._root_key + ":" + key)
    redis.get(_key._root_key + ":" + key).mapFutureRight
  }

  def push(value: String, id: Option[String] = None): Future[BusinessVal[Long]] = {
    val _id = id match {
      case Some(i) =>
        s"${_key._root_key}:${i}"
      case None => _key.next
    }

    redis.lPush(_id, value).mapFutureRight
  }

  def list(key: String): Future[BusinessVal[List[String]]] = {
    if (!key.startsWith(_key._root_key)) {
      Left("Key doesn't start with the right root value").future
    }

    redis.lRange[String](key).mapFutureRight
  }

  def pub[M](channel: String, message: Array[Byte]): Unit =
    redis.publish(channel, message)

  def sub[M](channel: String, callback: Array[Byte] => Unit)(implicit ec: ExecutionContext): Unit = Unit
  /* redis.subscriber.subscribe(channel) {
      case _ @ PubSubMessage.Message(_, msg) => callback(msg)
    }.onComplete {
      case Success(channelsCount) => // the client successfully subscribed to both channels
      case Failure(e) => {
        // an error occurred while subscribing to the channels, e.g. NOAUTH when trying to subscribe
        // without being authenticated
      }
    }*/

  protected def cleanKey(composedKey: String): String =
    composedKey.replace(s"${_key._root_key}:", "")

}
