const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function updateConfirmation(type, toEmail, firstName, partyDate, startTime, endTime){
 // 1. Check the Raw Data from Database
 console.log("--- RAW DATA CHECK ---");
 console.log("Raw partyDate:", partyDate);
 console.log("Raw startTime:", startTime);
 console.log("Raw endTime:", endTime);

 // 2. Check how JavaScript "sees" these as Dates
 console.log("--- JS INTERPRETATION ---");
 console.log("As Date object:", new Date(startTime).toString());

 // 3. Check the "Noon Fix" result
 const testNoon = new Date(`${partyDate}T12:00:00`);
 console.log("Noon Fix Result:", testNoon.toLocaleString("en-US", { timeZone: "America/New_York" }));
 console.log("-----------------------");

  const formattedDate = new Date(`${partyDate}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York"
  });
  console.log('format in data', typeof formattedDate, formattedDate)

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

  console.log({
    'formatted updated':'formated',
    formattedDate,
    formattedStart,
    formattedEnd

    });
    console.log("Server timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
    console.log("Current server time:", new Date().toString());


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
