const express = require('express');
const db = require('../db/db.js'); // correct import
const router = express.Router();

router.get('/bookings', async (req, res, next) => {
  try {
    const bookings = await db('bookings')
    .select('*')
    .orderBy('created_at', 'desc');
if(bookings){
    }
    console.log('bookings', bookings);
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
console.log('check booking now', bookings)

res.status(201).json(bookings);

} catch(err) {
  next(err);
}
})

router.put('/booking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBooking = await db('bookings')
      .where({ id })
      .update(updateData)
      .returning('*');

    if (!updatedBooking || updatedBooking.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ message: 'Booking updated', booking: updatedBooking[0] });
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
