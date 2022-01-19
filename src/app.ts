import express from 'express';
import tourRouter from './resources/tours/tour.router';
import priceRouter from './resources/prices/price.router';
import scheduleRouter from './resources/schedules/schedule.router';
import { logging, errorHandling } from './middlewares';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(logging);

app.use('/tours', tourRouter);

app.use('/schedules', scheduleRouter);

app.use('/prices', priceRouter);

app.use(errorHandling);

export default app;
