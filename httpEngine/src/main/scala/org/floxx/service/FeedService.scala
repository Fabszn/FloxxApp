package org.floxx.service

import akka.stream.javadsl.SourceQueue
import org.floxx.model.Hit
import org.floxx.{SlotId, model}

trait FeedService {

  def publish(channel: String, message: String): Unit
  def subscribe(stream: SourceQueue[Map[SlotId, model.Hit]]):Unit

}

class FeedServiceImpl() extends FeedService {

  override def publish(channel: String, message: String): Unit = ???

  override def subscribe(stream: SourceQueue[Map[SlotId, Hit]]): Unit =
    ???

}
