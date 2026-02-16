const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('before function');

async function sendAdminContactEmail(firstName, email, subject, message) {
  try {
    if (!email || !subject || !message) {
      throw new Error('Missing required email fields');
    }

    const result = await resend.emails.send({
      from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
      to: [email],
      reply_to: 'Bigjumps4tods@gmail.com',
      subject: subject,
      html: `
        <p>Hi ${firstName || 'there'},</p>

        <p>${message}</p>

        <br/>

        <p>
          — Big Jumps 4 Tods Team<br/>
          📞 <a href="tel:+12038437531">(203) 843-7531</a><br/>
          📧 <a href="mailto:Bigjumps4tods@gmail.com">
              Bigjumps4tods@gmail.com
          </a>
        </p>
      `
    });

    console.log('✅ Admin contact email sent:', result.id);

    return result;

  } catch (error) {
    console.error('❌ Failed to send admin contact email:', error);
    throw error;
  }
}

module.exports = { sendAdminContactEmail };
