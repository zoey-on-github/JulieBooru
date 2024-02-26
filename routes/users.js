var express = require('express');
var router = express.Router();
const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:admin@localhost:5432/julieBooru')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next)  {
	res.send("new user i guess");

})
db.one('SELECT epicness_count FROM users;')
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
module.exports = router;
