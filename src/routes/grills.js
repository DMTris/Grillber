//importing requirements
import { Router } from 'Express';
import { getCollection } from '../db.js';
import { Grill } from '../data/grills.js';
import { grills } from '../data/thedata.js';

const router = new Router();
//methods for getting grills
const getAllGrills = async() => {
  const grillCollection = await getCollection('grills');
  return await (await grillCollection.find({}).toArray());
}
//method for getting a grill by size
const getGrillBySize = async(size) => {
  const grillCollection = await getCollection('grills');
  return await (await grillCollection.find({ size }).toArray());
}
//method to add a grill
const addGrill = async(grill) =>{
  const grillCollection = await getCollection('grill');
  return await (await grillCollection.insertOne(grill));
}
//get route for grills
router.get('/', (req, res) => {
  return getAllGrills().then(grills => res.json(grills));
})
//get route for grill by size
router.get('/:grill', (req, res) => {
  return getGrillBySize(req.params.grill).then(grill => res.json(grill));
})
//post route for adding a grill to mongodb
/** @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
  * @param price
  * @param isRented
**/
router.post('/', (req, res) => {
  let grill = new Grill(
    req.body.brand,
    req.body.series,
    req.body.name,
    req.body.fuel,
    req.body.size,
    req.body.price,
    req.body.isRented
  );
  addGrill(grill);
  return res.json(grill);
})
export default router;
