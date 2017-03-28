export default class {
/**
  * constructor method
  * @param renter
  * @param grill
  * @param extras
  * @param location
  * @param date deliver
  * @param date pickup
*/
  constructor( renter = {}, grill = {}, extras, location, dateDeliver, datePickup ){
    this.renter = renter;
    this.grill = grill;
    this.extras = extras;
    this.location = location;
    this.dateDeliver = dateDeliver;
    this.datePickup = datePickup;
  }
}
