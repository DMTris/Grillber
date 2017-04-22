import { Router } from 'Express';
import { getCollection } from '../db.js';
import { Appointment } from '../data/appointments.js';
import { calendar } from '../data/thedata.js';

const router = new Router();
//method for getting the calendar data
const getCalendar = async() => {
  const calendarCollection = await getCollection('calendar');
  return await (await calendarCollection.find({}).toArray());
}
//method for getting appointments by status
const getAppByStatus = async(status) => {
  const calendarCollection = await getCollection('calendar');
  return await (await calendarCollection.find({status}).toArray());
}
//method to add an appointments
const addAppointment = async(appointment)=> {
  const calendarCollection = await getCollection('calendar');
  return await (await calendarCollection.insertOne(appointment));
}
//route for get calendar
router.get('/', (req, res) => {
  return getCalendar().then(calendar => res.json(calendar));
})
//route for get appointment by status
router.get('/:status', (req, res) => {
  return getAppByStatus(req.params.status).then(status => res.json(status));
})
//route for post appointment
/** @param renter
  * @param grill
  * @param extras
  * @param location
  * @param date deliver
  * @param date pickup
  * @param priceRate -@TODO create a cost formula
  * @param status
*/
router.post('/', (req, res) => {
  let appointment = new Appointment(
    req.body.renter,
    req.body.grill,
    req.body.extras,
    req.body.location,
    req.body.dateDeliver,
    req.body.datePickup,
    req.body.priceRate,
    req.body.status
  );
  addAppointment(appointment);
  return res.json(appointment);
})

export default router;
