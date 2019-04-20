package org.floxx

import org.floxx.controller.ScanApi
import org.floxx.service.{ScanService, ScanServiceImpl}

object AppLoader {

  trait AppContext {
    /*def attendeeService: AttendeeService
    def sponsorService: SponsorService
    def attendeeApi: AttendeeApi*/
    def scanApi: ScanApi
  }

  private case class ApplicationContext(
      /*attendeeService: AttendeeService,
      sponsorService: SponsorService,
      attendeeApi: AttendeeApi,*/
      scanApi: ScanApi
  ) extends AppContext

  final def initialize: AppContext = {

    //val attendeeService: AttendeeService = new AttendeeServiceImpl()
    //val sponsorService: SponsorService   = new SponsorServiceImpl()
    val scanService: ScanService   = new ScanServiceImpl()

    ApplicationContext(
      /*attendeeService,
      sponsorService,
      AttendeeApi(attendeeService),*/
      controller.ScanApi(scanService)
    )
  }

}
