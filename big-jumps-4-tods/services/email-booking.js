const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('before function');
async function sendBookingConfirmationEmail(firstName, email, partyDate, startTime, endTime) {
  console.log({
    firstName,
     email,
     partyDate,
     startTime,
     endTime
  })


  const formattedDate = partyDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York"
  });

  const formattedStart = new Date(startTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York"
  });

  const formattedEnd = new Date(endTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/New_York"
  });

  try {
    const result = await resend.emails.send({
      from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
      to: [email],
      reply_to: 'richardwilliams5697@yahoo.com',
      subject: 'Booking Accepted 🎉',
      html: `
      <p>Hi ${firstName},</p>

      <p>Great news! 🎉 Your party booking has been <strong>officially confirmed</strong>.</p>

      <p>
        We are scheduled for:
      </p>

      <p>
        <strong>Date:</strong> ${formattedDate}<br/>
        <strong>Time:</strong> ${formattedStart} – ${formattedEnd}
      </p>

      <p>
        Please make sure the setup area is ready before our arrival time.
      </p>

      <p>
        If you have any questions before your event, feel free to contact us:
      </p>

      <p>
        📞 <a href="tel:+12038437531">(203) 843-7531</a><br/>
        📧 <a href="mailto:Bigjumps4tods@gmail.com">Bigjumps4tods@gmail.com</a>
      </p>

      <p>
        We look forward to making your event special! 🎈
      </p>

      <p>
        — Big Jumps 4 Tods
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
