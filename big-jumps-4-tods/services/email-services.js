const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendRequestConfirmationEmail(toEmail, firstName) {
  return resend.emails.send({
    from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: '56realman@gmail.com',
    subject: 'We received your party request 🎉',
    html: `
      <p>Hi ${firstName},</p>
      <p>Your party request has been received.</p>
      <p>We’ll contact you shortly to confirm availability.</p>
    `
  });
}

module.exports = {
  sendRequestConfirmationEmail
};
