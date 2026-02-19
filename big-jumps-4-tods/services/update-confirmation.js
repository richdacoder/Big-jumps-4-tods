const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function updateConfirmation(type, toEmail, firstName){
  console.log({
    'type': type,
    'toEmail': toEmail ,
    'firstName': firstName ,

  })
  return resend.emails.send({
    from: 'Big Jumps 4 Tods <onboarding@resend.dev>',
    to: [toEmail],
    reply_to: 'richardwilliams5697@yahoo.com',
    subject: `Confirmation: Party ${type} Update 🎉`,
    html: `
      <p>Hi ${firstName},</p>

      <p>This message confirms that your party ${type.toLowerCase()} has been successfully updated.</p>

      <p><strong>Next Step:</strong> No further action is required unless you would like to make additional changes.</p>

      <p>If you have any questions, simply reply to this email.</p>

      <p>Thank you for choosing Big Jumps 4 Tods.</p>

      <p>Best regards,<br/>The Big Jumps 4 Tods Team</p>
    `
      });


}

module.exports = {
  updateConfirmation
};
