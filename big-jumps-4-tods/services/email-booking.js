const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('before function');
async function sendBookingConfirmationEmail(firstName, email) {
  try {
    const result = await resend.emails.send({
      from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
      to: [email],
      subject: 'Booking Accepted 🎉',
      html: `
        <p>Hi ${firstName},</p>

        <p>Your booking request has been <strong>accepted</strong>.</p>

        <p>
          If you have any questions, please contact us by phone:
          <a href="tel:+12038437531">(203) 843-7531</a>
          <br />
          or by email:
          <a href="mailto:Bigjumps4tods@gmail.com">
            Bigjumps4tods@gmail.com
          </a>
        </p>
      `
    });

    console.log('✅ Booking email sent:', result.id);

    return result;
  } catch (error) {
    console.error('❌ Failed to send booking email:', error);
    throw error;
  }
}


module.exports = { sendBookingConfirmationEmail }
