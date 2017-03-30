//express connection
import Express from 'express';
import Parser from 'body-parser';
import {loadData} from './data/renterdata.js';

import GrillberRoute from './routes/dataroutes.js';

const app = Express();
const port = process.env.PORT || 3000;

app.use(Parser.json());
app.use('/grillber', GrillberRoute);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

loadData();

export default app;
