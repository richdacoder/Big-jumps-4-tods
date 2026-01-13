"use client";
import { useState } from "react";
import { useEffect } from "react";

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
    useEffect(() => {
      const fetchMessage = async () => {
        try{
        const res = await fetch("http://localhost:3003/api/message");
        const message = await res.json();
        console.log(message); }
        catch(err){
          console.error("Fail to send message", err);
        }
      }
      fetchMessage();
    }, []);

    useEffect(()=>{
      if (!request.id) return;
      const displayEmail = async () => {
        try{
          const res = await fetch(`http://localhost:3002/api/requests/${request.id}`);
          if (!res.ok){
            console.log('Fail to fetch email');
            return;
          }
          const data = await res.json();
          console.log('request fetched', data);

        } catch(err){
          console.error(err);
        }
      }
      displayEmail();
    }, [request.id]
    )

    /*
    - fetch currect email
    - display in input

    */
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
