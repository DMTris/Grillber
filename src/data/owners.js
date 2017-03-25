import Renter from './renters.js';

export default class extends Renter{
  /**
    * constructor method
    * @param name
    * @param email
    * @param location
    * @param history
    * @param UUID
  */
  constructor( name, email, location, history, UUID ){
    super( name, email, location, history, UUID )
  }
}
