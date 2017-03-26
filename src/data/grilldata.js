import Grill from './grills.js';
/**
  * constructor method
  * @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
*/
let grillOne = new Grill( 'Weber', 'Spirit', 'S-210', 'Gas', 'Medium');
let grillTwo = new Grill( 'Weber', 'Summit', 'S-470', 'Gas', 'Large');
let grillThree = new Grill( 'Weber', 'Q', '1200', 'Gas', 'Small');

let grillTotal = [ grillOne, grillTwo, grillThree ];

export default grillTotal;
