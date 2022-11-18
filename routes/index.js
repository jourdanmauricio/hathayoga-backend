const express = require('express');

const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const lessonsRouter = require('./lessons.router');
const subscriberRouter = require('./subscribers.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/lessons', lessonsRouter);
  router.use('/subscribers', subscriberRouter);
}

module.exports = routerApi;
