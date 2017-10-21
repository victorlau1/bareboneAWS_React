var mysql = require('mysql');
// You May Need to Move Everything Here into a Config File

var connection = mysql.createConnection({
  host     : "RDS_HOSTNAME",
  user     : "RDS_USERNAME",
  password : "RDS_PASSWORD",
  database: "RDS_DB_NAME",
  port: "RDS_PORT"
});

// Returns something from the database
var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
//module.exports = {
  //selectAll: selectAll
//}