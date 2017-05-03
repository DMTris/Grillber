//importing requirements
import { Router } from 'express';
import { getCollection } from '../db.js';
import Renter from '../data/renters.js';

const router = new Router();
//methods for getting renters
const getAllRenters = async() => {
  const rentersCollection = await getCollection('renters');
  return await (await rentersCollection.find({}).toArray());
}
//method for getting a renter by email
const getRenterByEmail = async(email) => {
  const rentersCollection = await getCollection('renters');
  return await (await rentersCollection.find({ email }).toArray());
}
//method for posting a new renter
const addRenter = async(renter) => {
  const rentersCollection = await getCollection('renters');
  return await (await rentersCollection.insertOne(renter));
}
//method for removing a renter (does not fully delete)
const remRenter = async(email) => {
  const rentersCollection = await getCollection('renters');
  return await (await rentersCollection.remove({email: { $eq: 'email' }}));
}
//routes for renters
router.get('/', (req, res) => {
  return getAllRenters().then(renters => res.json(renters));
})
//route for a renter by email
router.get('/:renter', (req, res) => {
  return getRenterByEmail(req.params.renter).then(renter => res.json(renter));
})
//route to post a renter
/** @param name
* @param email
* @param password
* @param location
* @param history
*/
router.post('/', (req, res) => {
  let renter = new Renter(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.location,
    req.body.history
  );
  addRenter(renter);
  return res.json(renter);
})
//route to remove a renter
router.delete('/emaildelete/:email', (req, res) => {
  remRenter(req.params.email);
  return res.send(`The renter with the email: ${req.params.email} has been removed.`);
})
export default router;
