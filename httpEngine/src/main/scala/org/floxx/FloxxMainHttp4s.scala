package org.floxx

import cats.effect.{ExitCode, IO, IOApp}
import org.http4s.HttpRoutes
import org.http4s.dsl.impl.Root
import org.http4s.dsl.io._
import org.http4s.implicits._
import cats.effect._
import cats.implicits._
import org.http4s.HttpRoutes
import org.http4s.syntax._
import org.http4s.dsl.io._
import org.http4s.implicits._
import org.http4s.server.blaze._

object FloxxMainHttp4s extends IOApp{

  val helloWorldService = HttpRoutes.of[IO] {
    case GET -> Root / "hello" / name =>
      Ok(s"Hello, $name.")
    case POST -> Root / "hello" / name =>
      Ok(s"Hello, $name.")
  }.orNotFound

  @SuppressWarnings(Array("org.wartremover.warts.Any"))
  override def run(args: List[String]): IO[ExitCode] = BlazeServerBuilder[IO]
    .bindHttp(8080, "0.0.0.0")
    .withHttpApp(helloWorldService)
    .serve
    .compile
    .drain
    .as(ExitCode.Success)
}
