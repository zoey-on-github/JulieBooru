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
testCommand(epicnessCount) {
	return this.db.oneOrNone('Select epicness_Count FROM $1', users, a => !!a);
}
db.testCommand()
	.then(exists => {
		console.log("yeah");
	})
	.catch(error => {
	});
module.exports = router;
