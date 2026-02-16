"use client";
import ContactUser from "./contact-user.jsx";
import { useState } from "react";



export default function NotAvailable ({booking}){

  const [ showContact, setShowContact ] = useState(false);




return(
  <div className="container">
    <div>
  <div> Date is not available must contact user  </div>
  <button className="booking-not-available-bttn"
   onClick={() => setShowContact(true)}
   >
  Contact User
  </button>
  {
  showContact &&
  (
          <ContactUser
            booking={booking}
            onClose={() => setShowContact(false)}
          />
        )}
  </div>
  </div>
)
}
