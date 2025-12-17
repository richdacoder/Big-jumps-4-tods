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
    // Example response (empty array for now)
    res.json(bookings);

  } catch (err) {
    next(err); // forwards error to Express error handler
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

module.exports = router;
