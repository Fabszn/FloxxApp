package org.floxx.service

import org.floxx.service.globalService.Message
import org.floxx.{BusinessError, BusinessVal}

trait ScanService {

  def linked(idAttendee: Long, idSponsor: Long):BusinessVal[Message]

}

class ScanServiceImpl extends ScanService {

  private var holdLinkedMock: Map[Long, Long] = Map.empty[Long, Long]

  override def linked(idAttendee: Long, idSponsor: Long): BusinessVal[Message] = {
    holdLinkedMock = holdLinkedMock + (idAttendee -> idSponsor)
    Right[BusinessError,Message](Message(s"Linked has been done between attendee  $idAttendee & sponsor $idSponsor"))
  }
}
