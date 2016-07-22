var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send(`Implementa esta ruta tu mismo <br /> Params: ${JSON.stringify(req.body)}`);
});

module.exports = router;
