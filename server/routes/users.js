var db = require('../database/database');
var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(db.getUser(req.query.emailAddress))
});

router.post('/', function (req, res, next) {
  if (!req.query.emailAddress.includes('@')) {
    res.send('Email address is not valid.');
    return;
  }

  res.send(db.createUser(req.query.username, req.query.emailAddress, req.query.password));
});

router.delete('/', function (req, res, next) {
  if (!req.query.emailAddress.includes('@')) {
    res.send('Email address is not valid.');
    return;
  }

  res.send(db.deleteUser(req.query.emailAddress))
});

router.patch('/', function (req, res, next) {
  if (!req.query.emailAddress.includes('@')) {
    res.send('Email address is not valid.');
    return;
  }

  res.send(db.updateUser(req.query.username, req.query.emailAddress, req.query.password))
});

module.exports = router;
