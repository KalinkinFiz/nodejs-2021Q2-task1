const express = require('express');
const tourRouter = require('./resources/tours/tour.router');
const scheduleRouter = require('./resources/schedules/schedule.router');
const priceRouter = require('./resources/prices/price.router');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/tours', tourRouter);

app.use('/schedules', scheduleRouter);

app.use('/prices', priceRouter);

module.exports = app;
