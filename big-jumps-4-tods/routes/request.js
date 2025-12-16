const express = require('express');
const db = require('../db/db.js'); // your knex instance
const router = express.Router();

console.log('connecting requests 1');

/**
 * ✅ GET all requests
 * GET /api/requests
 */
router.get('/requests', async (req, res, next) => {
  console.log(res);
  try {
    const requests = await db('requests')
      .select('*')
      .orderBy('created_at', 'desc');
     res.json(requests);
  } catch (err) {
    next(err);
  }
});

/**
 * ✅ GET single request by ID
 * GET /api/requests/:id
 */
router.get('/requests/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const request = await db('requests')
      .where({ id })
      .first();

    if (!request) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json(request);
  } catch (err) {
    next(err);
  }
});

/**
 * ✅ POST create request
 * POST /api/requests
 */
router.post('/request', async (req, res, next) => {
  try {
    const data = req.body;
    console.log('req body', data)
    // Normalize camelCase frontend → snake_case backend
    const normalizedData = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      party_date: data.partyDate,
      party_address: data.partyAddress,
      party_start_time:
        data.startHour && data.startMinute && data.startAMPM
          ? new Date(`${data.partyDate} ${data.startHour}:${data.startMinute} ${data.startAMPM}`)
          : undefined,
      party_end_time:
        data.endHour && data.endMinute && data.endAMPM
          ? new Date(`${data.partyDate} ${data.endHour}:${data.endMinute} ${data.endAMPM}`)
          : undefined,
      package: data.package,
      message: data.message || null,
      theme: data.theme || null,
      referral: data.referral || null,
      address_line2: data.addressLine2 || null,
    };

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

    const missing = required.filter(f =>
      normalizedData[f] === undefined ||
      normalizedData[f] === null ||
      normalizedData[f] === ''
    );

    if (missing.length) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(', ')}`
      });
    }

    const newRequest = await db('requests')
      .insert(normalizedData)
      .returning('*');

    res.status(201).json(newRequest[0]);
  } catch (err) {
    next(err);
  }
});

function errorHandler(err, req, res, next) {
  console.error(err.stack); // logs error stack in server console
  res.status(500).json({ error: err.message || 'Internal Server Error' });
}

module.exports = {router, errorHandler};
