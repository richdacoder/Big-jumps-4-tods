"use client"
import ContactUser from "./contact-user";
import { useState } from "react";

export default function NotAvailable(){

  const [ showContact, setShowContact ] = useState(false);

console.log('not available working')
/*
- click contact user
- pop up with message
- or with number that you can text them directly


*/

return (
  <div className="container">
    <div>
  <div> Date is not available must contact user  </div>
  <button onClick={() => setShowContact(true)}className="not-available-btn">
  Contact User
  </button>
  {
    showContact && (<ContactUser onClose= {() => setShowContact(false)} />)
  }

  </div>
  </div>
)


}
