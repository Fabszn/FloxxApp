import sbt.Keys.libraryDependencies

import scala.sys.process.Process

lazy val webpack = taskKey[Unit]("Run webpack when packaging the application")
lazy val yarnInstall = taskKey[Unit]("install front project")


def yarnInstall(file: File) = {
  Process("yarn install", file) !

}


def runWebpack(file: File) = {
  Process("yarn webpack --mode=development --NODE_ENV=development", file) !

}

front / webpack := {
  if(runWebpack(front.base) != 0) throw new Exception("Something went wrong when running webpack.")
}

front /yarnInstall := {
  if(yarnInstall(front.base) != 0) throw new Exception("Something went wrong when running yarn install.")
}



version := "1.0-SNAPSHOT"

scalaVersion in ThisBuild := "2.13.8"

scalacOptions += "-Ypartial-unification" // 2.11.9+

lazy val commonsSettings = wartRemoverSettings

lazy val databaseJdbcSetting = Seq(
  "org.scalikejdbc" %% "scalikejdbc"    % "3.3.2",
  "org.postgresql"  % "postgresql"      % "42.2.5",
  "ch.qos.logback"  % "logback-classic" % "1.2.3"
)

val http4sVersion = "1.0-232-85dadc2"
val circeVersion  = "0.14.1"

lazy val circe = Seq(
  "io.circe" %% "circe-core",
  "io.circe" %% "circe-generic",
  "io.circe" %% "circe-parser"
).map(_ % circeVersion)

lazy val circe4Http4s = Seq(
  "org.http4s" %% "http4s-circe" % http4sVersion
)

lazy val scalamockTest = Seq(
  "org.scalamock" %% "scalamock" % "4.4.0" % Test,
  "org.scalatest" %% "scalatest" % "3.2.10" % Test
)

lazy val dockertest = Seq(
  "com.whisk" %% "docker-testkit-scalatest"    % "0.9.9" % "test",
  "com.whisk" %% "docker-testkit-impl-spotify" % "0.9.9" % "test"
)

lazy val http4s = Seq(
  "org.http4s" %% "http4s-dsl"          % http4sVersion,
  "org.http4s" %% "http4s-blaze-server" % http4sVersion,
  "org.http4s" %% "http4s-blaze-client" % http4sVersion
)

lazy val doobie = Seq(
  "org.tpolecat" %% "doobie-core"      % "0.8.4",
  "org.tpolecat" %% "doobie-postgres"  % "0.8.4", // Postgres driver 42.2.8 + type mappings.
  "org.tpolecat" %% "doobie-hikari"     % "0.8.4",
  "org.tpolecat" %% "doobie-specs2"    % "0.8.4" % "test", // Specs2 support for typechecking statements.
  "org.tpolecat" %% "doobie-scalatest" % "0.8.4" % "test"
)


lazy val model = (project in file("model"))
  .settings(commonsSettings)
  .settings(
    libraryDependencies ++= doobie,
    libraryDependencies ++= circe4Http4s,
    libraryDependencies ++= circe
  )

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging)
  .settings(commonsSettings)
  .settings(
    name := "Floxx",
    libraryDependencies ++= http4s,
    libraryDependencies ++= dockertest,
    libraryDependencies ++= scalamockTest,
    libraryDependencies ++= doobie,
    libraryDependencies ++= circe4Http4s,
    libraryDependencies ++= circe,
    libraryDependencies ++= Seq(
        "ch.qos.logback"         % "logback-classic"      % "1.1.7",
        "com.lihaoyi"            %% "requests"            % "0.7.0",
        "org.typelevel"          %% "cats-core"           % "2.7.0",
        "com.github.nscala-time" %% "nscala-time"         % "2.22.0",
        "com.pauldijou"          %% "jwt-core"            % "3.0.1"
      )
  )
  .dependsOn(model)

mainClass := Some("org.floxx.FloxxMainHttp4s")

mappings in (Compile, packageDoc) := Seq()

lazy val wartRemoverSettings = Seq(
  wartremoverErrors in (Compile, compile) ++= Seq(
      Wart.Any,
      Wart.AsInstanceOf,
      //Wart.Nothing,
      Wart.Product,
      Wart.Return,
      //Wart.Var,
      Wart.Null,
      Wart.OptionPartial,
      Wart.EitherProjectionPartial,
      Wart.StringPlusAny
    )
)


lazy val front = (project in file("front"))





