"use client";
import { useState } from "react";

const ContactUser = ({ onClose }) => {
  console.log("contact user");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault(); // ⛔ stop page refresh

    console.log("Sending message:", {
      email,
      message,
    });

    // later:
    // fetch('/api/contact', { ... })

    onClose(); // close popup after send
  };

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
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUser;
