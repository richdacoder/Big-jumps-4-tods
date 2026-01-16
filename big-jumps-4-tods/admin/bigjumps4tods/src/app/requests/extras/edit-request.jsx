"use client";
import {useState, useEffect} from 'react';
/*

- click edit request button xxx
(import function then place in name in prorper spot of pop-up.jsx) xxx
- same pop up but now your able to edit xx
(import request variable then have it plug in function of edit-requst) xx
- pop up request but now they are inputs with the value of request.info xx
(now call request variable and make input elements ) xx

now:
- info must be able to update database
- create function to handle updates xx
- make use state for all keys in object
(useState)
- use effect to add fetch (PUT)
(useEffect)

   */

export default function EditRequest({ request, onClose }){
console.log('working edit request', request);

const toDateInput = (d) =>{
  const date = new Date(d)
const month = (date.getMonth() + 1).toString().padStart(2,"0");
const dateDay = date.getDate().toString().padStart(2,"0");
const year = date.getFullYear();
console.log(`${year}-${month}-${dateDay}`);
  return `${year}-${month}-${dateDay}` ;
}

const toTimeInput = (t) => {
  const time = new Date(t).toISOString().split("T")[1];
  return time.split(".")[0];
  }


const [ email, setEmail ] = useState(request.email || "");
const [ phone, setPhone] = useState(request.phone || "");
const [ partyAddress, setPartyAddress ] = useState(request.party_address || "");
const [ Addressline2,setAddressline2] = useState(request.address_line2  || "");
const [ partyDate, setPartyDate] = useState(toDateInput(request.party_date));
const [ startTime, setStartTime] = useState(request.party_start_time);
const [ endTime, setEndTime] = useState(request.party_end_time);
const [ pkg, setPkg] = useState(request.package || "");
const [ message, setMessage] = useState(request.message|| "");
const [ theme, setTheme] = useState(request.theme  || "");
const [ referral, setReferral] = useState(request.referral   || "");


const handleUpdate = async(e) => {
  e.preventDefault();
  try {

  } catch(err) {
    console.error(err)
  }
};

return (
 <>
 <form onSubmit={handleUpdate}>
 <button onClick={onClose}>&times;</button>
 <h1>edit request</h1>
  <ul className="request-details">
  <li><strong>Email:</strong> <input type="email" value={email} onChange={ e => setEmail(e.target.value) } /></li>
  <li><strong>Phone:</strong> <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} /></li>
  <li><strong>Party Address:</strong> <input type="text" value={partyAddress} onChange={e => setPartyAddress(e.target.value)}/></li>
  <li><strong>Address Line 2:</strong> <input type="text" value={Addressline2} onChange={e => setAddressline2(e.target.value)} /></li>
  <li><strong>Party Date:</strong> <input type="date" value={partyDate} onChange={e => setPartyDate(e.target.value)} /></li>
  <li><strong>Start Time:</strong>{""}<input type="time" value={toTimeInput(startTime)} onChange={e => setStartTime(e.target.value)} /></li>
  <li><strong>End Time:</strong> <input type="time" value={toTimeInput(endTime)} onChange={e => setEndTime(e.target.value)} /></li>
  <li><strong>Package:</strong> <input type="text" value={pkg} onChange={e => setPkg(e.target.value)} /></li>
  <li><strong>Message:</strong> <input type="text" value={message} onChange={e => setMessage(e.target.value)} /></li>
  <li><strong>Theme:</strong> <input type="text" value={theme} onChange={e => setTheme(e.target.value)} /></li>
  <li><strong>Referral:</strong> <input type="text" value={referral} onChange={e => setReferral(e.target.value)} /></li>
</ul>
<button>Update</button>
</form>
</>
);
}
