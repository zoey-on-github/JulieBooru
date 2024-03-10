import createError = require('http-errors');
import express from 'express';
import { RequestHandler } from 'express'
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import indexRouter = require('./routes/index');
import usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/', (req, res) => {
  res.send('nice POST request loser')
})

// error handler
app.use(function(err, req: express.Request, res: express.Response, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(express.static('public'))


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;