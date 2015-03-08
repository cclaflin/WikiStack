var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('addPage', { title: 'WikiStack' })
});

router.post('/submit', function(req, res) {
  // this is the /add/submit route
  var models = require('../models/');

  var generateUrlName = function(name) {
    if (typeof name != "undefined" &amp;&amp; name !== "") {
      // Removes all non-alphanumeric characters from name
      // And make spaces underscore
      return name.replace(/\s/ig,"_").replace(/\W/ig,"");
    } else {
      // Generates random 5 letter string
      return Math.random().toString(36).substring(2,7);
    }
  };

  var url_name = generateUrlName(req.name);

  var p = new models.Page({ "title": title, "body":body, "url_name":url_name });
  p.save();
  res.redirect('/');
});



module.exports = router;