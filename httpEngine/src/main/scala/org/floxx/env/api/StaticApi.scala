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

  val excludePaths =Seq("infos", "favicon.ico")

  def api=  HttpRoutes.of[ApiTask] {
    case req @ GET -> Root  => {
      static("/assets/index.html", req)
    }

    case req @ GET -> Root / path if path.contains("index") && path.endsWith(".js") => {
      static(s"/assets/${path}", req)
    }
    case req @ GET -> Root / path if path.contains("index") && path.endsWith(".css") => {
      static(s"/assets/${path}", req)
    }

    case req @ GET -> Root / path if path.nonEmpty && !excludePaths.contains(path)  => {
      static("/assets/index.html", req)
    }

  }


  def static(file: String, request: Request[ApiTask]) =
    StaticFile.fromResource(file, Some(request)).getOrElseF {
      NotFound()
    }

}
