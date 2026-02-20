const express = require('express');
const db = require('../db/db.js'); // correct import
const { sendBookingConfirmationEmail } = require('../services/email-booking.js');
const { updateConfirmation } = require('../services/update-confirmation.js');

const router = express.Router();

router.get('/bookings', async (req, res, next) => {
  try {
    const bookings = await db('bookings')
    .select('*')
    .orderBy('created_at', 'desc');
if(bookings){
    }
    res.json(bookings);

  } catch (err) {
    next(err);
  }
});

router.post('/booking', async (req, res, next) => {
try{

const bookings = await db('bookings')
.insert(req.body)
.returning('*');
const booking = bookings[0];
console.log('check booking info', booking.first_name, booking. email)

 await sendBookingConfirmationEmail(
   booking.first_name,
   booking. email
   )
console.log('after email sent', booking )
res.status(201).json(bookings);

} catch(err) {
  next(err);
}
})

router.put('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const type = "booking";

    const updatedBooking = await db('bookings')
      .where({ id })
      .update(updateData)
      .returning('*');
      console.log({'id:': id, 'updateData:' : updateData, 'updatedBooking:': updatedBooking})
    if (!updatedBooking || updatedBooking.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    const booking = updatedBooking[0];

    //send email confirmation
    updateConfirmation(type, booking.email, booking.first_name, booking.party_date, booking.party_start_time,
      booking.party_end_time )
    console.log('first name', updateData.first_name, updateData.email)
    res.json({ message: 'Booking updated', booking: booking});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

router.delete('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCount = await db('bookings')
      .where({ id })
      .del();

    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ message: 'Booking deleted', id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
