const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function updateConfirmation(type, toEmail, firstName, partyDate, startTime, endTime){
  console.log({
    'updated':'update booking',
    type,
    toEmail,
    firstName,
    'party': (typeof partyDate, partyDate),
    'start time': typeof startTime,
    endTime
  });



  const ISOdate = (pDate) => {
    const [y, m, d] = pDate.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  const date =  type === 'request'?
  ISOdate(partyDate):
  new Date(partyDate);



  console.log('new date', typeof date, date);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log('format in data', typeof formattedDate, formattedDate)

  const formattedStart = new Date(startTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const formattedEnd = new Date(endTime).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  console.log({
    'formatted updated':'formated',
    formattedDate,
    formattedStart,
    formattedEnd

    });


    return resend.emails.send({
    from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: 'richardwilliams5697@yahoo.com',
    subject: `Confirmation: Party ${type} Update 🎉`,
    html: `
    <p>Hi ${firstName},</p>

    <p>Your ${type} has been successfully updated.</p>

    <h3>🎈 Party Details</h3>
    <p>
    <strong>Date:</strong> ${formattedDate}<br/>
    <strong>Time:</strong> ${formattedStart} – ${formattedEnd}
        </p>

    <p><strong>Next Step:</strong> No further action is required unless you would like to make additional changes.</p>

    <p>If you have any questions, simply reply to this email.</p>

    <p>Thank you for choosing Big Jumps 4 Tods.</p>

    <p>Best regards,<br/>The Big Jumps 4 Tods Team</p>    `
      });


}

module.exports = {
  updateConfirmation
};
