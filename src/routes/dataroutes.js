//This is creating routes for my data
import { Router } from 'Express';

import { renters, grills, calendar } from '../data/thedata.js';

const appRoute = new Router();

appRoute.route('/grills').get((req, res) => { return res.json(grills); });

appRoute.route('/renters').get((req, res) => { return res.json(renters); });

appRoute.route('/calendar').get((req, res) => { return res.json(calendar); });

export default appRoute;
