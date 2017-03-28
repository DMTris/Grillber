import renterTotal from './renterdata.js';
import grillTotal from './grilldata.js';
import Appointment from './appointments.js';
/**
  * constructor method
  * @param renter
  * @param grill
  * @param extras
  * @param location
  * @param date deliver
  * @param date pickup
*/
let appointmentOne = new Appointment( renterTotal[0], grillTotal[0], null, '123 Downtown, Salt Lake City UT', '20 March 12:00', '20 March 16:00' );

let calendar = [ appointmentOne ];

export default calendar;
