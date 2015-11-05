var express = require('express');
var index = require('./index');

module.exports = function() {
  var router = express.Router();
  router.get('*', index);
  return router;
};