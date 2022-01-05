const MongoClient = require('mongodb').MongoClient;
const database_url = require('./config').database_url;

var DbConnection = function () {
  var db = null;
  var instance = 0;

  async function DbConnect() {
    try {
      let url = database_url;
      let _db = await MongoClient.connect(url);
      return _db
    } catch (e) {
      return e;
    }
  }

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