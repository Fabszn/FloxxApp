package org.floxx.repository

class GlobalRepository {


  import scalikejdbc._

  // initialize JDBC driver & connection pool
  Class.forName("org.postgresql.Driver")
  val cp = ConnectionPool.singleton("jdbc:postgresql://localhost/leadscan", "admin", "admin")




}
