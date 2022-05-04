import Dependencies.Version._
import sbt._

object Dependencies {

  object Version {
    lazy val zioVersion                 = "1.0.13"
    lazy val zioLoggingVersion          = "0.5.14"
    lazy val `zio-interop`              = "3.2.9.0"
    lazy val Http4sVersion              = "0.23.10"
    lazy val chimneyVersion             = "0.6.1"
    lazy val circeVersion               = "0.14.1"
    lazy val quillVersion               = "3.16.3"
    lazy val testcontainersVersion      = "1.16.3"
    lazy val testcontainersScalaVersion = "0.39.12"
    lazy val driverPostgresVersion      = "42.2.23"
  }

  lazy val circe = Seq(
    "io.circe" %% "circe-core"    % Version.circeVersion,
    "io.circe" %% "circe-generic" % Version.circeVersion,
    "io.circe" %% "circe-parser"  % Version.circeVersion
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
    "org.testcontainers" % "testcontainers" % testcontainersVersion % Test,
    "org.testcontainers" % "database-commons" % testcontainersVersion % Test,
    "org.testcontainers" % "postgresql" % testcontainersVersion % Test,
    "org.testcontainers" % "jdbc" % testcontainersVersion % Test,
    postgresDriver       % Test,
    "com.dimafeng"       %% "testcontainers-scala-postgresql" % testcontainersScalaVersion % Test
  )

  lazy val postgresDriver = "org.postgresql" % "postgresql" % driverPostgresVersion

  lazy val chimney = "io.scalaland" %% "chimney" % chimneyVersion

  lazy val zio = Seq(
    "dev.zio" %% "zio"          % zioVersion,
    "dev.zio" %% "zio-test"     % zioVersion % Test,
    "dev.zio" %% "zio-test-sbt" % zioVersion % Test
  )
  lazy val zioLogging      = "dev.zio" %% "zio-logging"       % zioLoggingVersion
  lazy val zioLoggingSlf4j = "dev.zio" %% "zio-logging-slf4j" % zioLoggingVersion
  lazy val http4sBlazeServer =
    "org.http4s" %% "http4s-blaze-server" % Http4sVersion
  lazy val http4sBlazeClient =
    "org.http4s" %% "http4s-blaze-client" % Http4sVersion
  lazy val http4sDsl          = "org.http4s"            %% "http4s-dsl"       % Http4sVersion
  lazy val http4sCircle       = "org.http4s"            %% "http4s-circe"     % Http4sVersion
  lazy val `zio-interop-cats` = "dev.zio"               %% "zio-interop-cats" % Version.`zio-interop`
  lazy val logback            = "ch.qos.logback"        % "logback-classic"   % "1.2.3"
  lazy val pureConfig         = "com.github.pureconfig" %% "pureconfig"       % "0.14.1"

  lazy val sttpVersion = "3.5.1"
  lazy val sttp = Seq(
    "com.softwaremill.sttp.client3" %% "cats" % sttpVersion,
    "com.softwaremill.sttp.client3" %% "core" % sttpVersion,
    "com.softwaremill.sttp.client3" %% "fs2" % sttpVersion,
    "com.softwaremill.sttp.client3" %% "circe" % sttpVersion,
    "com.softwaremill.sttp.client3" %% "http4s-backend" % sttpVersion
  )

}
