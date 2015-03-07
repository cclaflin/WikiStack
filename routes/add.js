var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('addPage', {title: 'Add Page'});
});

module.exports = router;