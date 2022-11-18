package org.floxx

import org.floxx.env.configuration.config.Configuration
import org.floxx.env.service._
import org.floxx.env.service.trackService.TrackService

object environment {

  type AppEnvironment =
    Configuration
      with TrackService
      with hitService.HitService
      with securityService.SecurityService
      with statService.StatsService
      with adminService.AdminService

}
