import Dependencies._
import sbt.Keys.libraryDependencies
import sbt.io.IO

import scala.sys.process.Process
import scala.util.{ Failure, Try }



lazy val webpackDev      = taskKey[Unit]("package Dev mode")
lazy val webpackProd     = taskKey[Unit]("package Prod mode")
lazy val floxxCopyFile   = taskKey[Unit]("prepare and copy file to engine directory")
lazy val floxxCleanFiles   = taskKey[Unit]("clean directories")
lazy val yarnInstall     = taskKey[Unit]("install front project")
lazy val httpResourceDir = settingKey[File]("resource directory of http engine")
lazy val handleFrontFile = taskKey[Unit]("Add, commit, tag, push front files")
lazy val deliveryTask    = taskKey[Unit]("push last version to prod")
lazy val gotToMaster     = taskKey[Unit]("put index on master")

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

def checkout(branch: String) =
  Process(
    s"git checkout ${branch}"
  ) !

def pull(branch: String) =
  Process(
    s"git pull origin ${branch}"
  ) !

def mergeMaster =
  Process(
    "git merge master"
  ) !

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
    IO.copyDirectory(
      (front / baseDirectory).value / "dist/",
      (httpResourceDir.value / "assets/")
    )
  } match {
    case Failure(exception) => throw exception
    case _ => ()
  }

}
floxxCleanFiles := {
  Try {
    IO.delete((httpResourceDir.value / "dist/"))
  } match {
    case Failure(exception) => throw exception
    case _ => ()
  }

}

webpackDev := {
  if (runWebpack(front.base, "development") != 0) throw new Exception("Something went wrong when running webpack.")
}

webpackProd := {
  if (runWebpack(front.base, "production") != 0) throw new Exception("Something went wrong when running webpack.")
}

front / yarnInstall := {
  if (yarnInstall(front.base) != 0) throw new Exception("Something went wrong when running yarn install.")
}

ThisBuild / scalaVersion := "2.13.8"

scalacOptions := Seq(
  "-Ypartial-unification",
  "-Ywarn-unused:_",
  "-Ywarn-dead-code",
  "-deprecation"
)

lazy val commonsSettings = wartRemoverSettings ++ Seq(
  testFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")
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
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe,
    libraryDependencies ++= zio,
    libraryDependencies ++= quill,
    libraryDependencies += `zio-interop-cats`
  )

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging, BuildInfoPlugin)
  .settings(commonsSettings)
  .settings(
    maintainer := "Fabrice Sznajderman",
    scalacOptions := Seq(
      "-Ywarn-unused:_",
      "-Ywarn-dead-code",
      "-deprecation"
    ),
    name := "FloxxServer",
    libraryDependencies += postgresDriver ,
    libraryDependencies += http4sBlazeServer,
    libraryDependencies += http4sBlazeClient,
    libraryDependencies += http4sDsl,
    libraryDependencies ++= zio,
    libraryDependencies += zioLogging,
    libraryDependencies += zioLoggingSlf4j,
    libraryDependencies += pureConfig,
    libraryDependencies += `zio-interop-cats`,
    libraryDependencies ++= quill,
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe,
    libraryDependencies ++= Seq(
        "ch.qos.logback"         % "logback-classic" % "1.1.7",
        "com.lihaoyi"            %% "requests"       % "0.7.0",
        "com.github.nscala-time" %% "nscala-time"    % "2.22.0",
        "com.pauldijou"          %% "jwt-core"       % "3.0.1"
      ),
    buildInfoKeys := Seq[BuildInfoKey](name, version, scalaVersion, sbtVersion),
    buildInfoPackage := "org.floxx"
  )
  .dependsOn(model)

lazy val tests = (project in file("tests"))
  .dependsOn(httpEngine, db)
  .settings(commonsSettings)
  .settings(
    libraryDependencies ++= zio,
    libraryDependencies ++= testcontainers,
    libraryDependencies += "org.flywaydb" % "flyway-core" % "7.4.0",
    libraryDependencies ++= sttp
  )

///mainClass := Some("org.floxx.FloxxMainHttp4s")

Compile / packageDoc / mappings := Seq()

lazy val wartRemoverSettings = Seq(
  Compile / compile / wartremoverErrors ++= Seq(
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

lazy val front      = (project in file("front"))

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
  // val releaseVersion = extracted.get(Keys.version)
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

Global / onChangedBuildSource := ReloadOnSourceChanges
