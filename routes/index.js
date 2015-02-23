var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WikiStack' });
});

router.get('/', function(req, res, next) {
  res.render('addPage', { title: 'AddPage' });
});

module.exports = router;
