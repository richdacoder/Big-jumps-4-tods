const express = require('express');
const db = require('../db/db.js'); // correct import
const router = express.Router();

router.get('/bookings', async (req, res, next) => {
  console.log('working',res);
  try {
    const bookings = await db('bookings')
    .select('*')
    .orderBy('created_at', 'desc');
if(bookings){
    console.log('books?', bookings)}
    // Example response (empty array for now)
    res.json(bookings);

  } catch (err) {
    next(err); // forwards error to Express error handler
  }
});

module.exports = router;
