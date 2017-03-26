import Owner from './owners.js';
/**
  * constructor method
  * @param name
  * @param email
  * @param location
  * @param history
  * @param UUID
*/
let ownerOne = new Owner( 'Jim Bob', 'jimbob@aol.com', '1234 South Street, West Jordan, UT', undefined, undefined );
let ownerTwo = new Owner( 'Ed Hughes', 'edhughes@aol.com', '2345 North Street, Orem, UT', undefined, undefined );
let ownerThree = new Owner( 'Tom Clancy', 'tomclancy@aol.com', '6789 West Street, Tooele, UT', undefined, undefined );

let ownerTotal = [ ownerOne, ownerTwo, ownerThree ];

export default ownerTotal;
