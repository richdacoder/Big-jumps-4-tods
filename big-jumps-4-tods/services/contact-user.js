const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
/*
- click send button
- message stores in vairable and mkaes way into req.body
- req.body to server
- make a mmessenger api route starting in server page express js
- make router page with router
- passing message from react into contact-user function on router
- message sends


future:
when update to data table is made make function to send th confirm email to user saying that schedule have been update




*/
async function send() {
  await resend.emails.send({
    from:'Big Jumps 4 Tods <onboarding@resend.dev>',
    to: 'you@example.com',
    subject: 'Hello',
    html: '<strong>It works</strong>'
  });
}

module.exports = {
  send
};
