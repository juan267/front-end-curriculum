var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var grandma = req.query.grandma
  res.render('index', { grandma: grandma});
});

module.exports = router;
