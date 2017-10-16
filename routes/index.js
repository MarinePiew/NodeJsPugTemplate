var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', sayHello: 'Hello Buddy' });
});
router.get('/coucou-pug', function(req, res, next) {
  res.render('coucou', { title: 'Express', sayHello: 'Hello Buddy' });
});


module.exports = router;
