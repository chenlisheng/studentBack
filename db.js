var tribe = require('tribedb');
//配置模块
var config = require('./config');

tribe.config.db('student',config.config);
  
module.exports = tribe;