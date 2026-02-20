const express = require('express');
const router = express.Router();

const { sendAdminContactEmail } = require('../services/contact-user');

router.post('/message', async (req, res) => {
  try {
    const { firstName, email, subject, message, party_date,  party_start_time,  party_end_time } = req.body;

    if (!email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await sendAdminContactEmail(firstName, email, subject, message);

    res.json({ success: true });

  } catch (err) {
    console.error('admin contact route error:', err);
    res.status(500).json({ error: 'Email failed' });
  }
});

module.exports = router;
