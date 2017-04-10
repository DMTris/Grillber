//This is creating routes for my data
import {Router} from 'Express';
import grillTotal from '../data/grilldata.js';
import ownerTotal from '../data/ownerdata.js';
import renterTotal from '../data/renterdata.js';
import appCalendar from '../data/calendar.js';

const appRoute = new Router();

appRoute.route('/grills').get((req, res) => { return res.json(grillTotal); });

appRoute.route('/renters').get((req, res) => { return res.json(renterTotal); });

appRoute.route('/owners').get((req, res) => { return res.json(ownerTotal); });

appRoute.route('/calendar').get((req, res) => { return res.json(appCalendar); });

export default appRoute;
