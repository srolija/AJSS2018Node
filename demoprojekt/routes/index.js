var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ atribut1: 'vrijednost1' });
});

module.exports = router;
