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

router.post('/booking', async (req, res, next) => {
try{
const [bookings] = await knex('bookings').insert(req.body).returning('*');
console.log(bookings)

} catch(err) {
  next(err);
}
})

function errorHandler(err, req, res, next) {
  console.error(err.stack); // logs error stack in server console
  res.status(500).json({ error: err.message || 'Internal Server Error' });
}


module.exports = {router, errorHandler};
