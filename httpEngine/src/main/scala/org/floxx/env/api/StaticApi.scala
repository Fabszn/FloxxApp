package org.floxx.env.api

import org.http4s.{HttpRoutes, Request, StaticFile}
import org.http4s.dsl.Http4sDsl
import org.http4s._
import org.http4s.dsl.io._
import fs2.io.file.Path
import zio.interop.catz._


/**
  * Helper to expose static files of app
  */
object StaticApi {

  val dsl =  Http4sDsl[ApiTask]

  import dsl._


  def api=  HttpRoutes.of[ApiTask] {
    case req @ GET -> Root  => static("/assets/index.html", req)

    case req @ GET -> Root / path if path.startsWith("floxx") && path.endsWith(".js")  => {
      static(s"/assets/${path}", req)}

  }


  def static(file: String, request: Request[ApiTask]) =
    StaticFile.fromResource(file, Some(request)).getOrElseF(NotFound())

}
