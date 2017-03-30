//This is creating routes for my data
import {Router} from 'Express';
import grillTotal from '../data/grilldata.js';
import ownerTotal from '../data/ownerdata.js';
import renterTotal from '../data/renterdata.js';
import calendar from '../data/calendar.js';

const app = new Router();

app.route('/grills').get((req, res) => { return res.json(grillTotal); });

app.route('/renters').get((req, res) => { return res.json(renterTotal); });

app.route('/owners').get((req, res) => { return res.json(ownerTotal); });

app.route('/calendar').get((req, res) => { return res.json(calendar); });

export default app;
