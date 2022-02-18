package org.floxx.env

import org.floxx.AppLoader.appEnv.AppEnvironment
import zio.RIO

package object api {
  type ApiTask[A] = RIO[AppEnvironment, A]

}
