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
  * @param status
*/
let appointmentOne = new Appointment( renterTotal[0], grillTotal[0], null, '123 Downtown, Salt Lake City UT', '20 March 12:00', '20 March 16:00', 'Pending' );
let appointmentTwo = new Appointment( renterTotal[1], grillTotal[1], null, '456 Uptown, Orem UT', '20 April 17:00', '20 April 19:00', 'Pending' );

let appCalendar = [ appointmentOne, appointmentTwo ];

export default appCalendar;

//Sending and wiping the calendar to mongodb
export const loadCalendarData = async() => {
  const calendar = await getCollection('calendar');
  const loadResult = await calendar.insertMany( appCalendar );
}

export const delCalendarData = async() => {
  const calendar = await getCollection('calendar');
  const result = await calendar.remove({});
}
