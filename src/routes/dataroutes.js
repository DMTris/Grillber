//This is creating routes for my data
import { Router } from 'Express';
import Parser from 'body-parser';
import { getCollection } from '../db.js';

import { renters, grills, calendar } from '../data/thedata.js';

const appRoute = new Router();

appRoute.route('/grills').get((req, res) => { return res.json(grills); });

appRoute.route('/renters').get((req, res) => { return res.json(renters); });

appRoute.route('/calendar').get((req, res) => { return res.json(calendar); });

appRoute.route('/renters/:email').get((req, res) => {
  let renterEmail = renters.filter( renter => renter.email === req.params.email );
  return res.json( renterEmail );
})

appRoute.route('/grills/:grillname').get((req, res) => {
  let grillName = grills.filter( grill => grill.name === req.params.grillname );
  return res.json( grillName );
})

export default appRoute;
