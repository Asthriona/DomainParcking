var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sirius Media Group | Domain Parcking' });
});
router.get('/lol', function(req, res, next) {
  res.render('lol', { title: 'Sirius Media Group | LOL' });
});
module.exports = router;
