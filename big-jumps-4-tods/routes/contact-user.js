const { sendAdminContactEmail } = require('../services/contact-user');

router.post('/admin/contact-user', async (req, res) => {
  try {
    const { firstName, email, subject, message } = req.body;

    await sendAdminContactEmail(firstName, email, subject, message);

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email failed' });
  }
});
