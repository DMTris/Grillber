//express connection and inserting my data to mongodb
import Express from 'express';
import Parser from 'body-parser';

import { loadData, delData } from './data/thedata.js';

import GrillberRoute from './routes/dataroutes.js';

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const app = Express();
const port = process.env.PORT || 3000;

app.use(Parser.json());
app.use('/grillber', GrillberRoute);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

//loading data to mongodb from renterdata.js
if( ENV === 'development'){
  delData();
  loadData();
};


export default app;
