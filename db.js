var mysql = require('mysql');
//配置模块
var config = require('./config');

var client = mysql.createConnection(config.db);
  
console.log('Connecting to MySQL...');
  
client.connect(function(error, results) {
  if(error) {
    console.log('Connection Error: ' + error.message);
    return;
  }
  console.log('Connected to MySQL');
});
  
module.exports = mysql;