//This is creating routes for my data
import { Router } from 'Express';
import Parser from 'body-parser';
import { getCollection } from '../db.js';

import { renters, grills, calendar } from '../data/thedata.js';

const router = new Router();

router.route('/grills').get((req, res) => { return res.json(grills); });

router.route('/renters').get((req, res) => { return res.json(renters); });

router.route('/calendar').get((req, res) => { return res.json(calendar); });

router.route('/renters/:email').get((req, res) => {
  let renterEmail = renters.filter( renter => renter.email === req.params.email );
  return res.json( renterEmail );
})

router.route('/grills/:grillname').get((req, res) => {
  let grillName = grills.filter( grill => grill.name === req.params.grillname );
  return res.json( grillName );
})

router.post('/testing', (req, res) => {
  console.log('Heeeeeeeeellllllooooooo');
});

export default router;
