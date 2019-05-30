val akkaVersion = "2.5.19"

version := "1.0-SNAPSHOT"

scalaVersion in ThisBuild := "2.12.8"

lazy val commonsSettings = wartRemoverSettings

lazy val model = (project in file("model"))
  .settings(commonsSettings)
  .settings(
    libraryDependencies ++= Seq(
      "com.typesafe.play" %% "play-json" % "2.7.2"
    )
  )

lazy val databaseJdbcSetting = Seq(
  "org.scalikejdbc" %% "scalikejdbc"       % "3.3.2",
  "org.postgresql" % "postgresql" % "42.2.5",
  "ch.qos.logback"  %  "logback-classic"   % "1.2.3"
)

lazy val databaseRedisSetting = Seq(
  "com.github.scredis" %% "scredis" % "2.2.4"
)

lazy val httpEngine = (project in file("httpEngine"))
  .enablePlugins(JavaAppPackaging)
  .settings(commonsSettings)
  .settings(
    name := "Floxx",
    libraryDependencies ++= databaseRedisSetting,
    libraryDependencies ++= Seq(
      "com.typesafe.akka" %% "akka-http"           % "10.1.4",
      "ch.megard"         %% "akka-http-cors"      % "0.4.0",
      "ch.qos.logback"    % "logback-classic"      % "1.1.7",
      "com.typesafe.akka" %% "akka-actor"          % akkaVersion,
      "com.typesafe.akka" %% "akka-stream"         % akkaVersion,
      "com.lihaoyi"       %% "requests"            % "0.1.7",
      "org.typelevel"     %% "cats-core"           % "1.6.0",
      "de.heikoseeberger" %% "akka-http-play-json" % "1.25.2",
      "com.github.nscala-time" %% "nscala-time" % "2.22.0"
    )
  )
  .dependsOn(model)

mainClass := Some("org.floxx.FloxxMain")

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
