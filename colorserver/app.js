const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const blocksRouter = require('./routes/blocks');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const db = mongoose.connect('mongodb://axilis:axilis@ds119070.mlab.com:19070/jsschool2018node')
  .then(() => {
    console.info('Successfully connected to MONGO database');
  })
  .catch((err) => {
    console.error(err);
  });

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/block', blocksRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.sendStatus(404);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
