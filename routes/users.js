var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
//TODO: fix this
const db = pgp('postgres://julie:admin@localhost:5432/julieBooru')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next)  {
	res.send("new user i guess");
})
module.exports = router;
