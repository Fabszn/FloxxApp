package org.floxx.config

import java.util

import com.typesafe.config.ConfigFactory
import scala.collection.JavaConversions._

object ConfigService {

  private val configName = "application.conf"
  lazy val configuration = ConfigFactory.load(configName)

  object cfp {
    lazy val url: String        = configuration.getString("cfp.url")
    lazy val days: List[String] = configuration.getStringList("cfp.days").toList
  }

}
