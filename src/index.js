//express connection and inserting my data to mongodb
import Express from 'express';
import Parser from 'body-parser';
import cors from 'cors';

import { loadData, delData } from './data/thedata.js';

import renterRoute from './routes/renters.js';
import grillRoute from './routes/grills.js';
import calendarRoute from './routes/calendar.js';

const app = Express();
const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;


app.use(cors());
app.use(Parser.json());
app.use('/renters', renterRoute);
app.use('/grills', grillRoute);
app.use('/calendar', calendarRoute);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

//delete data and load data to mongodb from renterdata.js
if( ENV === 'development'){
  delData();
  loadData();
};

export default app;
