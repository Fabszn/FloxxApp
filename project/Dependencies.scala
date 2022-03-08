import Dependencies.Version._
import sbt._

object Dependencies {

  object Version {
    lazy val zioVersion     = "1.0.13"
    lazy val `zio-interop`  = "3.2.9.0"
    lazy val Http4sVersion  = "0.23.10"
    lazy val chimneyVersion = "0.6.1"
    lazy val circeVersion   = "0.14.1"
    lazy val doobieVersion  = "1.0.0-RC2"
  }

  lazy val circe = Seq(
    "io.circe" %% "circe-core"    % Version.circeVersion,
    "io.circe" %% "circe-generic" % Version.circeVersion,
    "io.circe" %% "circe-parser"  % Version.circeVersion
  )

  lazy val doobie = Seq(
    "org.tpolecat" %% "doobie-core"      % doobieVersion,
    "org.tpolecat" %% "doobie-postgres"  % doobieVersion, // Postgres driver 42.2.8 + type mappings.
    "org.tpolecat" %% "doobie-hikari"    % doobieVersion,
    "org.tpolecat" %% "doobie-specs2"    % doobieVersion % "test", // Specs2 support for typechecking statements.
    "org.tpolecat" %% "doobie-scalatest" % doobieVersion % "test"
  )

  lazy val chimney = "io.scalaland" %% "chimney" % chimneyVersion

  lazy val zio = "dev.zio" %% "zio" % zioVersion
  lazy val http4sBlazeServer =
    "org.http4s" %% "http4s-blaze-server" % Http4sVersion
  lazy val http4sBlazeClient =
    "org.http4s" %% "http4s-blaze-client" % Http4sVersion
  lazy val http4sDsl          = "org.http4s"            %% "http4s-dsl"       % Http4sVersion
  lazy val http4sCircle       = "org.http4s"            %% "http4s-circe"     % Http4sVersion
  lazy val `zio-interop-cats` = "dev.zio"               %% "zio-interop-cats" % Version.`zio-interop`
  lazy val logback            = "ch.qos.logback"        % "logback-classic"   % "1.2.3"
  lazy val pureConfig         = "com.github.pureconfig" %% "pureconfig"       % "0.14.1"

}
