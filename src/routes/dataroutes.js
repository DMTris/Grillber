import {Router} from 'Express';
import grillTotal from '../data/grilldata.js';
import ownerTotal from '../data/ownerdata.js';
import renterTotal from '../data/renterdata.js';

const app = new Router();

app.route('/grills').get((req, res) => { return res.json(grillTotal); });

app.route('/renters').get((req, res) => { return res.json(renterTotal); });

app.route('/owners').get((req, res) => { return res.json(ownerTotal); });

export default app;
