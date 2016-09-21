var mysql = require('mysql');
var $config = require('../config');
var $sql = require('../controllers/user');

// 使用连接池
var pool  = mysql.createPool( $config.db);

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
  console.log('json:'+ret+':'+res);
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  }else{
    res.json(ret);
  }
};

module.exports = {
  queryAll: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      connection.query('select * from mytable', function(err, result) {
        console.log('queryAll result:'+result);
        jsonWrite(res, result);
        connection.release();
      });
    });
  }
};

