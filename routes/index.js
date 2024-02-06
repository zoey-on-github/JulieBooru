var express = require('express');
const app = express()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/', (req, res) => {
	res.send("nice POST request loser")
})
module.exports = router;
