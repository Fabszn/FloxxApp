import Dependencies._
import sbt.Keys.libraryDependencies
import sbt.io.IO

import scala.sys.process.Process
import scala.util.{ Failure, Try }



lazy val frontProd      = taskKey[Unit]("package Prod mode")
lazy val frontDev      = taskKey[Unit]("package Dev mode")
lazy val webpackProd     = taskKey[Unit]("package Prod mode")
lazy val floxxCopyFile   = taskKey[Unit]("prepare and copy file to engine directory")
lazy val floxxCleanFiles   = taskKey[Unit]("clean directories")
lazy val yarnInstall     = taskKey[Unit]("install front project")
lazy val httpResourceDir = settingKey[File]("resource directory of http engine")
lazy val handleFrontFile = taskKey[Unit]("Add, commit, tag, push front files")
lazy val prodDeliveryTask    = taskKey[Unit]("push last version to prod")
lazy val gotToMaster     = taskKey[Unit]("put index on master")

def yarnInstall(file: File) =
  Process("yarn install", file) !

def buildFront(file: File, mode: String) =
  Process(
    s"yarn vite build --mode ${mode}",
    file
  ) !

def addCompiledFrontFile() =
  Process(
    "git add ."
  ) !

def commitFrontFile =
  Process(
    "git commit -m 'release front files'"
  ) !

def delivery(branch:String) = {
  Process(
    s"git push origin ${branch}"
  ) !
}

handleFrontFile := {
  addCompiledFrontFile()
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

prodDeliveryTask := {
  checkout("prod")
  mergeMaster
  delivery("prod")
}

httpResourceDir := (httpEngine / Compile / resourceDirectory).value
ThisBuild / useCoursier := false

floxxCopyFile := {
  Try {

    //clean
    IO.delete((httpResourceDir.value / "assets"))
    IO.createDirectory((httpResourceDir.value / "assets"))

    IO.copyDirectory(
      (front / baseDirectory).value / "dist/assets",
      (httpResourceDir.value / "assets/")
    )
    IO.copyFile(
      (front / baseDirectory).value / "dist"/"index.html",
      (httpResourceDir.value / "assets/index.html")
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

frontDev := {
  if (buildFront(front.base, "development") != 0) throw new Exception("Something went wrong when running yarn.")
}

frontProd := {
  if (buildFront(front.base, "production") != 0) throw new Exception("Something went wrong when running webpack.")
}

front / yarnInstall := {
  if (yarnInstall(front.base) != 0) throw new Exception("Something went wrong when running yarn install.")
}

ThisBuild / scalaVersion := "2.13.8"

lazy val commonsSettings = wartRemoverSettings ++ Seq(
  testFrameworks += new TestFramework("zio.test.sbt.ZTestFramework")
)

lazy val model = (project in file("model"))
  .configs(IntegrationTest)
  .settings(Defaults.itSettings)
  .settings(commonsSettings)
  .settings(
    libraryDependencies += http4sCircle,
    libraryDependencies ++= circe,
    libraryDependencies ++= zio,
    libraryDependencies ++= quill,
    libraryDependencies += `zio-interop-cats`
  )
addCompilerPlugin("org.typelevel" % "kind-projector" % "0.13.2" cross CrossVersion.full)

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging, BuildInfoPlugin)
  .configs(IntegrationTest)
  .settings(Defaults.itSettings)
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
    libraryDependencies += flyway,
    libraryDependencies += shapeless,
    libraryDependencies ++= circe,
    libraryDependencies ++= testcontainers,
    libraryDependencies ++= sttp,
    libraryDependencies += scalaTest,
    libraryDependencies += chimney,
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

lazy val front  = (project in file("front"))

addCommandAlias(
  "runDev",
  ";frontDev;floxxCopyFile;httpEngine/run"
)
addCommandAlias(
  "runProd",
  ";frontProd;floxxCopyFile;httpEngine/run"
)
addCommandAlias(
  "build2Prod",
  ";clean;frontProd;floxxCopyFile;dist"
)

addCommandAlias(
  "goToProd",
  ";gotToMaster;frontProd;floxxCopyFile;handleFrontFile;release"
)

val pushVersionToProd = ReleaseStep(action = st => {
  // extract the build state
  val extracted = Project.extract(st)
  // val releaseVersion = extracted.get(Keys.version)
  checkout("prod")
  mergeMaster
  delivery("prod")
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
