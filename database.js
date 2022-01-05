const MongoClient = require('mongodb').MongoClient;
const database_url = require('./configs/config').database_url;

/*
Function   : DbConnection 
Description: Create database connection and Returns Instance to it
Parameters : N/A
Return     : Returns Get funtion to get database instance
*/

var DbConnection = function () {
  var db = null;
  var instance = 0;

  /*
  Function   : DbConnect 
  Description: Create database connection
  Parameters : N/A
  Return     : Returns database instance
  */
  async function DbConnect() {
    try {
      let url = database_url;
      let _db = await MongoClient.connect(url);
      return _db
    } catch (e) {
      return e;
    }
  }

  /*
  Function   : Get 
  Description: Singleton logic to call Dbconnect and return Database instance
  Parameters : N/A
  Return     : Returns database instance
  */

  async function Get() {
    try {
      instance++;
      if (db != null) {
        console.log(`db connection is already alive`);
        return db;
      } else {
        console.log(`getting new db connection`);
        db = await DbConnect();
        return db; 
      }
    } catch (e) {
      return e;
    }
  }

  return {Get}
}

module.exports = DbConnection();