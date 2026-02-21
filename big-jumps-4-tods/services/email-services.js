const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendRequestConfirmationEmail(
  toEmail,
  firstName,
  partyDate,
  startTime,
  endTime
) {

  console.log('request', {
    toEmail,
    firstName,
    partyDate,
    startTime,
    endTime

  });

  // Convert request strings safely to Date (UTC to prevent day shifting)
  const toDateTime = (dateStr) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, d);
  };

  const party = toDateTime(partyDate);

  const formattedDate = party.toLocaleDateString("en-US", {
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

  return resend.emails.send({
    from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: 'richardwilliams5697@yahoo.com',
    subject: 'We received your party request 🎉',
    html: `
      <p>Hi ${firstName},</p>

      <p>Your party request has been received 🎈</p>

      <h3>Requested Party Details:</h3>
      <p>
        <strong>Date:</strong> ${formattedDate}<br/>
        <strong>Time:</strong> ${formattedStart} – ${formattedEnd}
      </p>

      <p>We’ll contact you shortly to confirm availability.</p>

      <p>Thank you for choosing Big Jumps 4 Tods!</p>
    `
  });
}

module.exports = {
  sendRequestConfirmationEmail
};
