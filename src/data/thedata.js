import Renter from './renters.js';
import Grill from './grills.js';
import Appointment from './appointments.js';

import { getCollection } from '../db.js';

//Create renters
/**
  * constructor method
  * @param name
  * @param email
  * @param password
  * @param location
  * @param history
*/
let JackNun = new Renter( 'Jack Nun', 'jacknun@aol.com', '1234567a','4567 Somer Street, Salt Lake City, UT', 'Novice' );
let TomYoung = new Renter( 'Tom Young', 'tomyoung@aol.com', '2345678b','2468 Even Street, Cedar City, UT', 'Good' );
let BretNoles = new Renter( 'Bret Noles', 'bretnoles@aol.com', '3456789c', '4689 Later Street, Orem, UT', 'Good' );
let NicoleFrets = new Renter( 'Nicole Frets', 'nicolefrets@aol.com', '2468246d', '1357 Other Lane, Ogden, UT', 'Novice' );

export const renters = [ JackNun, TomYoung, BretNoles, NicoleFrets ];

//Create grills
/**
  * constructor method
  * @param brand
  * @param series
  * @param name
  * @param fuel
  * @param size
  * @param price
  * @param isRented
*/
let WeberSpirit = new Grill( 'Weber', 'Spirit', 'S-210', 'Gas', 'Medium', 4.99, 'Yes' );
let WeberSummit = new Grill( 'Weber', 'Summit', 'S-470', 'Gas', 'Large', 7.99, 'No' );
let WeberQ = new Grill( 'Weber', 'Q', '1200', 'Gas', 'Small', 2.99, 'No' );
let WeberOKettle = new Grill( 'Weber', 'Original Kettle', 'The 22', 'Charcoal', 'Medium', 4.99, 'No' );
let WeberRKettle = new Grill( 'Weber', 'Ranch Kettle', 'The 44', 'Charcoal', 'Large', 7.99, 'Yes' );

export const grills = [ WeberSpirit, WeberSummit, WeberQ, WeberOKettle, WeberRKettle ];

//Create appointments
/**
  * constructor method
  * @param renter
  * @param grill
  * @param extras
  * @param location
  * @param date deliver
  * @param date pickup
  * @param cost
  * @param status
*/
let appOne = new Appointment( renters[0], grills[0], null, '123 Downtown, Salt Lake City UT', '20 March 12:00', '20 March 16:00', 'Finished' );
let appTwo = new Appointment( renters[1], grills[1], null, '456 Uptown, Orem UT', '20 April 17:00', '20 April 19:00', 'Pending' );
let appThree = new Appointment( renters[3], grills[4], null, '864 North Go Street, Provo UT', '04 July 13:00', '04 July 19:00', 'Pending' )

export const calendar = [ appOne, appTwo, appThree ];

//Insert to mongodb
export const loadData = async() => {
  const renterCollection = await getCollection('renters');
  const grillCollection = await getCollection('grills');
  const calendarCollection = await getCollection('calendar');

  await renterCollection.insertMany( renters );
  await grillCollection.insertMany( grills );
  await calendarCollection.insertMany( calendar );
}

//Remove from mongodb
export const delData = async() => {
  const renterCollection = await getCollection('renters');
  const grillCollection = await getCollection('grills');
  const calendarCollection = await getCollection('calendar');

  await renterCollection.remove({});
  await grillCollection.remove({});
  await calendarCollection.remove({});
}
