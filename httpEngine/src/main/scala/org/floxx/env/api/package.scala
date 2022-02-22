package org.floxx.env

import org.floxx.Environment.AppEnvironment
import zio.RIO

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

  def formatRoomVal(value: String): String = {
    val t = value.split("_")
    s"${t(1)} ${t(2)}"

  }

}
