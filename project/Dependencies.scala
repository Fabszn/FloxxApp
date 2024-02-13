import Dependencies.Version._
import sbt._

object Dependencies {

  object Version {
    lazy val zioVersion                 = "2.0.21"
    lazy val zioLoggingVersion          = "2.2.0"
    lazy val `zio-interop`              = "23.1.0.0"
    lazy val sttpZioClient              = "4.0.0-M8"
    lazy val Http4sVersion              = "0.23.14"
    lazy val Http4sBlazeVersion         = "0.23.16"
    lazy val chimneyVersion             = "0.6.2"
    lazy val circeVersion               = "0.14.1"
    lazy val quillVersion               = "4.8.1"
    lazy val testcontainersVersion      = "1.16.3"
    lazy val testcontainersScalaVersion = "0.39.12"
    lazy val driverPostgresVersion      = "42.2.23"
    lazy val flywayVersion              = "7.4.0"
    lazy val shapelessVersion           = "2.3.3"
    lazy val sttpVersion                = "3.5.1"
    lazy val scalaTestVersion           = "3.2.13"

  }

  lazy val flyway = "org.flywaydb" % "flyway-core" % flywayVersion

  lazy val shapeless = "com.chuusai" %% "shapeless" % shapelessVersion

  lazy val circe = Seq(
    "io.circe" %% "circe-core"    % circeVersion,
    "io.circe" %% "circe-generic" % circeVersion,
    "io.circe" %% "circe-generic-extras" % circeVersion,
    "io.circe" %% "circe-parser"  % circeVersion
  )

  lazy val quill = Seq(
    "io.getquill" %% "quill-jdbc-zio" % quillVersion,
    "io.getquill" %% "quill-zio"      % quillVersion,
    "io.getquill" %% "quill-jdbc"     % quillVersion,
    "io.getquill" %% "quill-sql"      % quillVersion,
    "io.getquill" %% "quill-core"     % quillVersion,
    "io.getquill" %% "quill-engine"   % quillVersion
  )

  lazy val testcontainers = Seq(
    "org.testcontainers" % "testcontainers"                   % testcontainersVersion      % "test,it",
    "org.testcontainers" % "database-commons"                 % testcontainersVersion      % "test,it",
    "org.testcontainers" % "postgresql"                       % testcontainersVersion      % "test,it",
    "org.testcontainers" % "jdbc"                             % testcontainersVersion      % "test,it",
    "com.dimafeng"       %% "testcontainers-scala-postgresql" % testcontainersScalaVersion % "test,it"
  )

  lazy val postgresDriver = "org.postgresql" % "postgresql" % driverPostgresVersion

  lazy val chimney = "io.scalaland" %% "chimney" % chimneyVersion

  lazy val zio = Seq(
    "dev.zio" %% "zio"          % zioVersion,
    "dev.zio" %% "zio-test"     % zioVersion % "test,it",
    "dev.zio" %% "zio-test-sbt" % zioVersion % "test,it"
  )
  lazy val zioLogging      = "dev.zio" %% "zio-logging"       % zioLoggingVersion
  lazy val zioLoggingSlf4j = "dev.zio" %% "zio-logging-slf4j" % zioLoggingVersion
  lazy val http4sBlazeServer =
    "org.http4s" %% "http4s-blaze-server" % Http4sBlazeVersion
  lazy val http4sBlazeClient =
    "org.http4s" %% "http4s-blaze-client" % Http4sBlazeVersion
  lazy val http4sDsl          = "org.http4s"            %% "http4s-dsl"       % Http4sVersion
  lazy val http4sCircle       = "org.http4s"            %% "http4s-circe"     % Http4sVersion
  lazy val `zio-interop-cats` = "dev.zio"               %% "zio-interop-cats" % `zio-interop`
  lazy val logback            = "ch.qos.logback"        % "logback-classic"   % "1.2.3"
  lazy val pureConfig         = "com.github.pureconfig" %% "pureconfig"       % "0.15.0"

  lazy val sttp = Seq(
    "com.softwaremill.sttp.client4" %% "zio"   % sttpZioClient,
    "com.softwaremill.sttp.client4" %% "circe" % sttpZioClient,
    "com.softwaremill.sttp.client4" %% "fs2" % sttpZioClient,
    "com.softwaremill.sttp.client4" %% "http4s-backend" % sttpZioClient
  )

  lazy val scalaTest = "org.scalatest" %% "scalatest" % scalaTestVersion % "test"

}
