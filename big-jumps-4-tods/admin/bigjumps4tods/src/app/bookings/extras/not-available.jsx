"use client";
import ContactUser from "./contact-user.jsx";


export default function NotAvailable ({booking}){

  // const [ showContact, setShowContact ] = useState(false);




return(
  <div className="container">
    <div>
  <div> Date is not available must contact user  </div>
  <button
  //  onClick={() => setShowContact(true)}className="not-available-btn"
   >
  Contact User
  </button>
  {
  // showContact &&
  (
          <ContactUser
            booking={booking}
            // onClose={() => setShowContact(false)}
          />
        )}
  </div>
  </div>
)
}
