const express = require('express');
const db = require('../db/db.js'); // your knex instance
const router = express.Router();
console.log('connecting requests 1');

router.post('/requests', async (req, res, next) => {
  try {
    const data = req.body;

    // Normalize camelCase frontend keys → snake_case backend keys
    const normalizedData = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      email: data.email,
      party_date: data.partyDate,
      party_address: data.partyAddress,
      // ✅ FIXED: convert to Date object including partyDate
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

    console.log("before missing", normalizedData);

    const missing = required.filter(f => {
      console.log('filter', f, 'value:', normalizedData[f]);
      return (
        normalizedData[f] === undefined ||
        normalizedData[f] === null ||
        normalizedData[f] === ''
      );
    });

    console.log('after missing', missing);

    if (missing.length) {
      return res.status(400).json({
        error: `Missing required fields: ${missing.join(', ')}`
      });
    }

    console.log("this the body yung fella", normalizedData);

    // Insert normalizedData
    const newRequest = await db('requests')
      .insert(normalizedData)
      .returning('*');

    console.log(newRequest);

    res.status(201).json(newRequest[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
