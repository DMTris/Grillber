//Creating an appointment
import renterTotal from './renterdata.js';
import grillTotal from './grilldata.js';
import Appointment from './appointments.js';
import {getCollection} from '../db.js';
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

//Sending and wiping the calendar to mongodb
export const loadCalendarData = async() => {
  const calendar = await getCollection('calendar');
  const loadResult = await calendar.insertMany([ appointmentOne ]);
}

export const delCalendarData = async() => {
  const calendar = await getCollection('calendar');
  const result = await calendar.remove({});
}
