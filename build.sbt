import Dependencies._
import sbt.Keys.libraryDependencies
import sbt.io.{ IO, CopyOptions }

import scala.sys.process.Process

lazy val webpack = taskKey[Unit]("Run webpack when packaging the application")
lazy val yarnInstall = taskKey[Unit]("install front project")
lazy val testDire = taskKey[Unit]("testDir")


def yarnInstall(file: File) = {
  Process("yarn install", file) !

}


def runWebpack(file: File) = {
  Process(
    "yarn webpack --mode=development --NODE_ENV=development",
    file
  ) !


}




front / webpack := {
  if(runWebpack(front.base) != 0) throw new Exception("Something went wrong when running webpack.")
  IO.delete((baseDirectory.value / "assets"))
  IO.createDirectory((baseDirectory.value / "assets"))
  IO.copyFile((front / baseDirectory).value / "dist/index.html", (baseDirectory.value / "assets/index.html")  )
  IO.copyFile((front / baseDirectory).value / "dist/floxx.js", (baseDirectory.value / "assets/floxx.js")  )
}

front /yarnInstall := {
  if(yarnInstall(front.base) != 0) throw new Exception("Something went wrong when running yarn install.")
}

version := "1.0-SNAPSHOT"

ThisBuild / scalaVersion := "2.13.8"


scalacOptions := Seq("-Ypartial-unification","-Ywarn-unused:_","-Ywarn-dead-code")

lazy val commonsSettings = wartRemoverSettings


lazy val databaseJdbcSetting = Seq(
  "org.scalikejdbc" %% "scalikejdbc"    % "3.3.2",
  "org.postgresql"  % "postgresql"      % "42.2.5",
  "ch.qos.logback"  % "logback-classic" % "1.2.3"
)


lazy val scalamockTest = Seq(
  "org.scalamock" %% "scalamock" % "4.4.0"  % Test,
  "org.scalatest" %% "scalatest" % "3.2.10" % Test
)

lazy val dockertest = Seq(
  "com.whisk" %% "docker-testkit-scalatest"    % "0.9.9" % "test",
  "com.whisk" %% "docker-testkit-impl-spotify" % "0.9.9" % "test"
)

lazy val db = (project in file("db"))
  .enablePlugins(FlywayPlugin)
  .settings(
    libraryDependencies += "org.postgresql" % "postgresql" % "42.2.23",
    flywayUrl                               := "jdbc:postgresql://localhost/floxx",
    flywayUser                              := "floxxuser",
    flywayPassword                          := "pwduser",
    flywayLocations += "db/migration"
  )

lazy val model = (project in file("model"))
  .settings(commonsSettings)
  .settings(
    libraryDependencies ++= doobie,
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe
  )

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging)
  .settings(commonsSettings)
  .settings(
    name := "FloxxServer",
    libraryDependencies += http4sBlazeServer,
    libraryDependencies += http4sBlazeClient,
    libraryDependencies += http4sDsl,
    libraryDependencies += zio,
    libraryDependencies += pureConfig,
    libraryDependencies += `zio-interop-cats`,
    libraryDependencies ++= dockertest,
    libraryDependencies ++= scalamockTest,
    libraryDependencies ++= doobie,
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe,
    libraryDependencies ++= Seq(
        "ch.qos.logback"         % "logback-classic" % "1.1.7",
        "com.lihaoyi"            %% "requests"       % "0.7.0",
        "com.github.nscala-time" %% "nscala-time"    % "2.22.0",
        "com.pauldijou"          %% "jwt-core"       % "3.0.1"
      )
  )
  .dependsOn(model)

mainClass := Some("org.floxx.FloxxMainHttp4s")

mappings in (Compile, packageDoc) := Seq()

lazy val wartRemoverSettings = Seq(
  wartremoverErrors in (Compile, compile) ++= Seq(
      /*Wart.Any,*/
      Wart.AsInstanceOf,
      Wart.Product,
      Wart.Return,
      Wart.Null,
      Wart.OptionPartial,
      Wart.EitherProjectionPartial
      /*,Wart.StringPlusAny*/
    )
)

lazy val front = (project in file("front"))

lazy val runDev = TaskKey[Unit]("all", ";a;b;c")

lazy val taskSettings = Seq(
  runDev <<= Seq(webpack,(httpEngine/run)).dependOn
)
