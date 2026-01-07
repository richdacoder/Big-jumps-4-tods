const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendBookingConfirmationEmail(FirstName,email){
console.log({
  'first name': FirstName ,
  'email': email
})
}
