var express = require('express');
var users = require('./controllers/user');

var router = express.Router();

router.get('/users/:firstname', users.list);

module.exports = router;
