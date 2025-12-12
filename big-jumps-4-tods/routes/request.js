const express = require('express');
const db = require('../db/db.js'); // your knex instance
const router = express.Router();

console.log('connecting requests');

router.post('/requests', async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    const required = [
      'first_name',
      'last_name',
      'phone',
      'email',
      'party_date',
      'party_address',
      'party_start_time',
      'party_end_time',
      'package'
    ];

    const missing = required.filter(f => !data[f]);
    if (missing.length) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(', ')}`
      });
    }

    const newRequest = await db('requests').insert(data).returning('*');

    res.status(201).json(newRequest[0]);
  } catch (err) {
    next(err);
  }
});

// ✅ Export the router correctly
module.exports = router;
