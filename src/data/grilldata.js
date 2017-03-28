import Grill from './grills.js';
/**
  * constructor method
  * @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
  * @param price
  * @param rented
*/
let grillOne = new Grill( 'Weber', 'Spirit', 'S-210', 'Gas', 'Medium', 4.99, 'Yes' );
let grillTwo = new Grill( 'Weber', 'Summit', 'S-470', 'Gas', 'Large', 7.99, 'No' );
let grillThree = new Grill( 'Weber', 'Q', '1200', 'Gas', 'Small', 2.99, 'No' );
let grillFour = new Grill( 'Weber', 'Original Kettle', 'The 22', 'Charcoal', 'Medium', 4.99, 'No' );
let grillFive = new Grill( 'Weber', 'Ranch Kettle', 'The 44', 'Charcoal', 'Large', 7.99, 'Yes' );

let grillTotal = [ grillOne, grillTwo, grillThree, grillFour, grillFive ];

export default grillTotal;
