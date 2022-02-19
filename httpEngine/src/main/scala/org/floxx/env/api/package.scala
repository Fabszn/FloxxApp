package org.floxx.env

import org.floxx.Environment.AppEnvironment
import zio.RIO

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

}
