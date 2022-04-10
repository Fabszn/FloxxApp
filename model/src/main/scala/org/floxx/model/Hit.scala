package org.floxx.model

import io.circe.generic.auto._
import org.floxx.domain

case class Hit(
    hitid: Option[String] = None,
    hitSlotId: String,
    percentage: Int,
    dateTime: Long = System.currentTimeMillis(),
    userId: domain.User.SimpleUser.Id
)

