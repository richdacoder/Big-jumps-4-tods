"use client";
import { useState } from "react";

const ContactUser = ({ onClose, request }) => {
  console.log("contact user");

  const [email, setEmail] = useState(request.email || "");
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
  console.log('request object', request)


    /*
    - get currect email
    - display in inputxxxxx
    - make state for selected email
    - put data from fetch in selected email state
    - on click of contact user button
    - email is in put

    */

  return (
    <div className="popup">
      <button onClick={onClose}>X</button>

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
