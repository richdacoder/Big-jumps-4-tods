const express = require('express');
const { Resend } = require('resend');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);

app.get('/test-email', async (req, res) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is missing');
    }

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['youremail@example.com'],
      subject: 'Infisical test',
      html: '<strong>It works with Infisical!</strong>',
    });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3002, () => {
  console.log('🚀 API running on http://localhost:3002');
});
