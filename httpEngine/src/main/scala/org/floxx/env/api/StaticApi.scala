package org.floxx.env.api

import org.http4s.{HttpRoutes, Request, StaticFile}
import org.http4s.dsl.Http4sDsl
import zio.interop.catz._


/**
  * Helper to expose static files of app
  */
object StaticApi {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._


  def api=  HttpRoutes.of[ApiTask] {
    case req @ GET -> Root  => static("/assets/index.html", req)

    case req @ GET -> Root / "floxx.js"   => static("/assets/floxx.js", req)

    case req @ GET -> Root/ "desktop"  => static("/assets/desktop/index.html", req)

    case req @ GET -> Root / "desktop.js"   => static("/assets/desktop/desktop.js", req)

  }


  def static(file: String, request: Request[ApiTask]) =
    StaticFile.fromResource(file, Some(request)).getOrElseF(NotFound())

}
