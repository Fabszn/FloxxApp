package org.floxx

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.server.Route
import akka.stream.ActorMaterializer
import org.floxx.AppLoader.AppContext
import org.floxx.config.Config
import akka.http.scaladsl.server.Directives._
import ch.megard.akka.http.cors.scaladsl.model.HttpOriginMatcher
import ch.megard.akka.http.cors.scaladsl.settings.CorsSettings
import ch.megard.akka.http.cors.scaladsl.CorsDirectives.cors

import scala.concurrent.ExecutionContextExecutor

object FloxxMainAkkaHttp {//extends App {


  //override def run(args: List[String]): IO[ExitCode] = {

  /*implicit val system: ActorSystem = ActorSystem("floxx", Config.configuration)
  sys.addShutdownHook(system.terminate())
  implicit val materializer: ActorMaterializer            = ActorMaterializer()
  implicit val executionContext: ExecutionContextExecutor = system.dispatcher
  val context: AppContext                                 = AppLoader.initialize

  val globalRoute: Route = cors(CorsSettings.defaultSettings.withAllowedOrigins(HttpOriginMatcher.*)) {
    /*context.hitApi.route ~
    context.cfpApi.route ~
    context.securityApi.route*/
  }

  val bindingFuture = Http().bindAndHandle(
    globalRoute,
    "0.0.0.0",
    Config.floxx.floxxPort
  )*/



  //}

}
