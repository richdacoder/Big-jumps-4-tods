const express = require('express');
const db = require('../db/db.js');
const { sendRequestConfirmationEmail } = require('../services/email-services');
const router = express.Router();

console.log('connecting requests 1');

/**
 * ✅ GET all requests
 * GET /api/requests
 */
router.get('/requests', async (req, res, next) => {
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
router.get('/request/:id', async (req, res, next) => {
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


router.put('/requests/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const {
      email,
      phone,
      party_address,
      address_line2,
      party_date,
      party_start_time,
      party_end_time,
      package: pkg,
      message,
      theme,
      referral
    } = req.body;

    console.log(party_date, party_start_time );

    const updated = await db('requests')
      .where({ id })
      .update(
        {
          email,
          phone,
          party_address,
          address_line2,
          party_date,
          party_start_time,
          party_end_time,
          package: pkg,
          message,
          theme,
          referral
        },
        '*'
      );

    if (updated.length === 0) {
      return res.status(404).json({ message: 'Request not found' });
    }

    res.status(200).json(updated[0]);

  } catch (err) {
    console.error('Update request error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


/**
 * ✅ POST create request
 * POST /api/requests
 */
router.post('/request', async (req, res, next) => {
  try {
    const data = req.body;
    // Normalize camelCase frontend → snake_case backend
    const normalizedData = {
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      email: data.email,
      party_date: data.party_date,
      party_address: data.party_address,
      party_start_time: data.party_start_time,
      party_end_time: data.party_end_time,
      package: data.package,
      message: data.message || null,
      theme: data.theme || null,
      referral: data.referral || null,
      address_line2: data.address_line2 || null,
    };

    console.log('final', normalizedData);
    console.log('final', normalizedData)


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
      return res.status(400).json();
    }

    const newRequest = await db('requests')
      .insert(normalizedData)
      .returning('*');

      await sendRequestConfirmationEmail(
        normalizedData.email,
        normalizedData.first_name
      );


    res.status(201).json(newRequest[0]);
  } catch (err) {
    next(err);
  }
});

router.delete('/request/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedCount = await db('requests')
      .where({ id })
      .del();

    if (deletedCount) {
      res.status(202).json({ message: 'Request deleted' });
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
