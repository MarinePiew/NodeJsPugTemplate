var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey ! It\'s a GET');
});

/* GET user with ID. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.send('Hey ! It\'s a GET with ID ' + req.params.id);
});

/* POST user creation. */
router.post('/', function(req, res, next) {
  res.send('Hey ! It\'s a POST');
});

/* PUT user creation. */
router.put('/:id(\\w+)', function(req, res) {
  res.send('Hey my name is ' + req.params.id);
});

/* DELETE user. */
router.delete('/:id(\\d+)', function(req, res) {
  res.send('Hey ! It\'s a DELETE with ID ' + req.params.id);
});

module.exports = router;