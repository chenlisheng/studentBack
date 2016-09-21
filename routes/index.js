var express = require('express');
var users = require('../models/user');

var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res, next) {
  users.queryAll(req, res, next);
});

module.exports = router;
