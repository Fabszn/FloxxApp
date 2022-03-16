import Dependencies._
import sbt.Keys.libraryDependencies
import sbt.io.IO

import scala.sys.process.Process
import scala.util.{ Failure, Try }

maintainer := "Fabrice Sznajderman"

lazy val webpackDev      = taskKey[Unit]("package Dev mode")
lazy val webpackProd     = taskKey[Unit]("package Prod mode")
lazy val floxxCopyFile   = taskKey[Unit]("prepare and copy file to engine directory")
lazy val yarnInstall     = taskKey[Unit]("install front project")
lazy val httpResourceDir = settingKey[File]("resource directory of http engine")
lazy val handleFrontFile = taskKey[Unit]("Add, commit, tag, push front files")
lazy val deliveryTask = taskKey[Unit]("push last version to prod")
lazy val gotToMaster = taskKey[Unit]("put index on master")

def yarnInstall(file: File) =
  Process("yarn install", file) !

def runWebpack(file: File, mode: String) =
  Process(
    s"yarn webpack --mode=${mode}",
    file
  ) !

def addFrontFile =
  Process(
    "git add ."
  ) !

def commitFrontFile =
  Process(
    "git commit -m 'release front files'"
  ) !

def delivery =
  Process(
    "git push origin prod"
  ) !

handleFrontFile := {
  addFrontFile
  commitFrontFile
}

def checkout(branch:String) ={
  Process(
    s"git checkout ${branch}"
  ) !
}

def pull(branch:String) ={
  Process(
    s"git pull origin ${branch}"
  ) !
}

def mergeMaster = {
  Process(
    "git merge master"
  ) !
}

gotToMaster := {
  checkout("master")
  pull("master")
}

deliveryTask := {
  checkout("prod")
  mergeMaster
  delivery
}

httpResourceDir := (httpEngine / Compile / resourceDirectory).value

floxxCopyFile := {
  Try {
    IO.delete((httpResourceDir.value / "assets"))
    IO.createDirectory((httpResourceDir.value / "assets"))
    IO.copyFile(
      (front / baseDirectory).value / "dist/index.html",
      (httpResourceDir.value / "assets/index.html")
    )
    IO.copyFile(
      (front / baseDirectory).value / "dist/floxx.js",
      (httpResourceDir.value / "assets/floxx.js")
    )
  } match {
    case Failure(exception) => throw exception
    case _ => ()
  }

}

front / webpackDev := {
  if (runWebpack(front.base, "development") != 0) throw new Exception("Something went wrong when running webpack.")
}

front / webpackProd := {
  if (runWebpack(front.base, "production") != 0) throw new Exception("Something went wrong when running webpack.")
}

front / yarnInstall := {
  if (yarnInstall(front.base) != 0) throw new Exception("Something went wrong when running yarn install.")
}

ThisBuild / scalaVersion := "2.13.8"

scalacOptions := Seq(
  "-Ypartial-unification",
  "-Ywarn-unused:_",
  "-Ywarn-dead-code"
)

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

//lazy val staticFiles = (project in file("staticFiles"))

lazy val db = (project in file("db"))
  .enablePlugins(FlywayPlugin)
  .settings(
    libraryDependencies += "org.postgresql" % "postgresql" % "42.2.23",
    flywayUrl := "jdbc:postgresql://localhost/floxx",
    flywayUser := "floxxuser",
    flywayPassword := "pwduser",
    flywayLocations += "db/migration"
  )

lazy val model = (project in file("model"))
  .settings(commonsSettings)
  .settings(
    libraryDependencies ++= doobie,
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe,
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.11" % "test"
  )

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging,BuildInfoPlugin)
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
    libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.11" % "test",
    libraryDependencies ++= Seq(
        "ch.qos.logback"         % "logback-classic" % "1.1.7",
        "com.lihaoyi"            %% "requests"       % "0.7.0",
        "com.github.nscala-time" %% "nscala-time"    % "2.22.0",
        "com.pauldijou"          %% "jwt-core"       % "3.0.1"
      ),

      buildInfoKeys := Seq[BuildInfoKey](name, version, scalaVersion, sbtVersion),
      buildInfoPackage := "org.floxx "

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

addCommandAlias(
  "runDev",
  ";webpackDev;floxxCopyFile;db/flywayMigrate;httpEngine/run"
)
addCommandAlias(
  "runProd",
  ";webpackProd;floxxCopyFile;httpEngine/run"
)
addCommandAlias(
  "build2Prod",
  ";clean;webpackProd;floxxCopyFile;dist"
)

addCommandAlias(
  "goToProd",
  ";gotToMaster;webpackProd;floxxCopyFile;handleFrontFile;release"
)

val pushVersionToProd = ReleaseStep(action = st => {
  // extract the build state
  val extracted = Project.extract(st)
  val releaseVersion = extracted.get(Keys.version)
  checkout("prod")
  mergeMaster
  delivery
  checkout("master")
  st
})


import sbtrelease.ReleasePlugin.autoImport.ReleaseTransformations._

releaseProcess := Seq[ReleaseStep](
  checkSnapshotDependencies, // : ReleaseStep
  inquireVersions, // : ReleaseStep
  runClean, // : ReleaseStep
  runTest, // : ReleaseStep
  setReleaseVersion, // : ReleaseStep
  commitReleaseVersion, // : ReleaseStep, performs the initial git checks
  tagRelease, // : ReleaseStep
  pushChanges,
  pushVersionToProd,
  setNextVersion, // : ReleaseStep
  commitNextVersion, // : ReleaseStep
  pushChanges // : ReleaseStep, also checks that an upstream branch is properly configured
)
