var router = express.Router();
// const db = pgp('postgres://postgres:admin@localhost:5432/julieBooru')
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(300).send('respond with a resource');
});
/*
router.post('/', function(req,res,next)  {
    //res.send("new user i guess");
        db.any('select * from users where active = $1', [true])
            .then(data => {
                console.log("no error")
                JSON.stringify(data)
                res.status(300).send('DATA:', data); // print data;
            })
            .catch(error => {
                console.log("test")
                JSON.stringify(error)
                res.status(500).send('ERROR:', error); // print the error;
            });
})
/*
db.any('select * from users where active = $1', [true])
    .then(data => {
        console.log('DATA:', data); // print data;
    })
    .catch(error => {
        console.log('ERROR:', error); // print the error;
    });
    */
module.exports = router;
export {};
