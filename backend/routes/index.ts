
import express  from 'express'
const app = express()

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
export default function indexRouter() {
        app.get('/', async(req, res) => {
                res.send("yes");
                }
                ,
               )
}
