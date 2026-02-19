"use client";
import { useState } from "react";
import { useEffect } from "react";

const ContactUser = ({ onClose, request, setLockScroll }) => {

  useEffect(() => {
    setLockScroll(true);
    return () => setLockScroll(false);
  }, []);

  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState(request.email || "");
  const [message, setMessage] = useState("");
  const [sentMesage, setSentMesage] = useState("");
  const [visible, setVisible] = useState(false);
const [isFading, setIsFading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    try{
    const res = await fetch('http://localhost:3002/api/message', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
      firstName: request.first_name,
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
    setSubject('');
    setMessage('');
    setSentMesage(true);

  } catch (err) {
    console.error('Message fail to send', err)
  }
  };
  console.log('request object', request)

  useEffect(() => {
    if (!sentMesage) return;

    const fadeTimer = setTimeout(() => setIsFading(true), 1500);
    const removeTimer = setTimeout(() => {
      setSentMesage(false);
      setIsFading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [sentMesage]);


  return (
    <div className="req-popup">
      <button className="request-close" onClick={onClose}>&times;</button>

      <h1 className="request-contact-user">Contact User</h1>

      <form onSubmit={sendMessage}>
        <div>
          <h2>Email</h2>
          <input
            className="request-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
      <h2>Subject</h2>
      <input
        className="request-subject"
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
            className="request-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here"
            required
          />
        </div>

        <button className="request-send" onClick={sendMessage} type="submit">Send</button>
      </form>
      {
        sentMesage &&
        (
          <div className={`message-sent ${isFading ? "fade-out" : ""}`}> message sent </div>
        )
      }

    </div>
  );
};

export default ContactUser;
