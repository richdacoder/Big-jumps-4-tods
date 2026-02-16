"use client";
import { useState } from "react";

const ContactUser = ({ onClose, booking }) => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState(booking.email || "");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    try{
    const res = await fetch('http://localhost:3002/api/message', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
      subject: subject,
      email: email,
      message: message
      })
    })
    const data = await res.json();
    if (!res.ok){
      console.error('messaage failed to send', data);
      return;
    }
    console.log('message sent', data);
  } catch (err) {
    console.error('Message fail to send', err)
  }
  };
  // console.log('booking object', booking)



  return (
    <div className="popup">
      <button onClick={onClose}>&times;</button>

      <h1>Contact User</h1>

      <form onSubmit={sendMessage}>
        <div>
          <h2>Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
      <h2>Subject</h2>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter subject"
        required
      />
    </div>

        <div>
          <h3>Message</h3>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUser;
