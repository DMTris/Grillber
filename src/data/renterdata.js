import Renter from './renters.js';
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