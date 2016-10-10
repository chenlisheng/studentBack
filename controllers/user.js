var tribe = require('tribedb');
var db = new tribe.Query('mytable');

module.exports.list = function(req, res) {
  console.log(req.params);
  db.where('firstname',req.params.firstname).select(function(err,data){
    console.log(data);
    if (err) {
      return res.status(500).json({ error: err })
    }
    res.json(data);
  });
};