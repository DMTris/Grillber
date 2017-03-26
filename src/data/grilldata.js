import Grill from './grills.js';
/**
  * constructor method
  * @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
  * @param rented
*/
let grillOne = new Grill( 'Weber', 'Spirit', 'S-210', 'Gas', 'Medium', 'Yes' );
let grillTwo = new Grill( 'Weber', 'Summit', 'S-470', 'Gas', 'Large', 'No' );
let grillThree = new Grill( 'Weber', 'Q', '1200', 'Gas', 'Small', 'No' );
let grillFour = new Grill( 'Weber', 'Original Kettle', 'The 22', 'Charcoal', 'Medium', 'No' );
let grillFive = new Grill( 'Weber', 'Ranch Kettle', 'The 44', 'Charcoal', 'Large', 'Yes' );

let grillTotal = [ grillOne, grillTwo, grillThree, grillFour, grillFive ];

export default grillTotal;
