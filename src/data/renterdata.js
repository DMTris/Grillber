//The data for renters
import Renter from './renters.js';
import {getCollection} from '../db.js';

/**
  * constructor method
  * @param name
  * @param email
  * @param location
  * @param history
  * @param UUID
*/
let renterOne = new Renter( 'Jack Nun', 'jacknun@aol.com', '4567 Somer Street, Salt Lake City, UT', 'Noob', undefined );
let renterTwo = new Renter( 'Tom Young', 'tomyoung@aol.com', '2468 Even Street, Cedar City, UT', 'Good', undefined );

let renterTotal = [ renterOne, renterTwo ];

export default renterTotal;

//Sending and wiping the renters to mongodb
export const loadRenterData = async() => {
  const renters = await getCollection('renters');
  const loadResult = await renters.insertMany([ renterOne, renterTwo ]);
}

export const delRenterData = async() => {
  const renters = await getCollection('renters');
  const result = await renters.remove({});
}
