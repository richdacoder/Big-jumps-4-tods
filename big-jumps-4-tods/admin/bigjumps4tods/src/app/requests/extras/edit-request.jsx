"use client";
import {useState, useEffect} from 'react';

export default function EditRequest({ request, onClose, onUpdate, formatDate, formatTime }){

const toDateInput = (d) =>{
  const date = new Date(d);
const month = (date.getMonth() + 1).toString().padStart(2,"0");
const dateDay = date.getDate().toString().padStart(2,"0");
const year = date.getFullYear();
console.log(`${year}-${month}-${dateDay}`);
  return `${year}-${month}-${dateDay}` ;
}

const toTimeInput = (t) => {
  const date = new Date(t);
  const hour = (date.getHours()).toString().padStart(2,"0");
  const minutes = (date.getMinutes()).toString().padStart(2,"0");
  return `${hour}:${minutes}`;
  }

  const today = new Date().toISOString().split('T')[0];


const [ email, setEmail ] = useState(request.email || "");
const [ phone, setPhone] = useState(request.phone || "");
const [ partyAddress, setPartyAddress ] = useState(request.party_address || "");
const [ Addressline2,setAddressline2] = useState(request.address_line2  || "");
const [ partyDate, setPartyDate] = useState(toDateInput(request.party_date));
const [ startTime, setStartTime] = useState(toTimeInput(request.party_start_time));
const [ endTime, setEndTime] = useState(toTimeInput(request.party_end_time));
const [ pkg, setPkg] = useState(request.package || "");
const [ message, setMessage] = useState(request.message|| "");
const [ theme, setTheme] = useState(request.theme  || "");
const [ referral, setReferral] = useState(request.referral   || "");


const handleUpdate = async (e) => {
  e.preventDefault();

  if (!email || !phone || !partyAddress || !partyDate || !startTime || !endTime || !pkg) {
    return alert('Please fill in all required fields.');
  }


  try {
    const startTimestamp = new Date(`${partyDate}T${startTime}:00`).toISOString();
    const endTimestamp = new Date(`${partyDate}T${endTime}:00`).toISOString();

    console.log('before update', partyDate);
    const res = await fetch(`http://localhost:3002/api/requests/${request.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        phone: phone,
        party_address: partyAddress,
        address_line2: Addressline2,
        party_date: partyDate,
        party_start_time: startTimestamp,
        party_end_time: endTimestamp,
        package: pkg,
        message: message,
        theme: theme,
        referral: referral
      })
    });
    console.log('after update', partyDate);


    if (!res.ok) {
      throw new Error(`Update failed with status ${res.status}`);
    }

    const updatedRequest = await res.json();
    alert('Update successful:')
    console.log('Update successful:', updatedRequest);

    onUpdate(updatedRequest);

  } catch (err) {
    console.error('Error updating request:', err);
    alert('Failed to update request');
  }
};

return (
 <>
 <form onSubmit={handleUpdate}>
 <button className="delete-button" onClick={onClose}>&times;</button>
 <h1>edit request</h1>
  <ul className="request-details">
  <li><strong>Email:</strong> <input type="email" value={email} onChange={ e => setEmail(e.target.value) } /></li>
  <li><strong>Phone:</strong> <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} /></li>
  <li><strong>Party Address:</strong> <input type="text" value={partyAddress} onChange={e => setPartyAddress(e.target.value)}/></li>
  <li><strong>Address Line 2:</strong> <input type="text" value={Addressline2} onChange={e => setAddressline2(e.target.value)} /></li>
  <li><strong>Party Date:</strong> <input min={today} type="date" value={partyDate} onChange={e => setPartyDate(e.target.value)} /></li>
  <li><strong>Start Time:</strong>{""}<input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} /></li>
  <li><strong>End Time:</strong> <input min={startTime} type="time" value={endTime} onChange={e => setEndTime(e.target.value)} /></li>
  <li><strong>Package:</strong> <input type="text" value={pkg} onChange={e => setPkg(e.target.value)} /></li>
  <li><strong>Message:</strong> <input type="text" value={message} onChange={e => setMessage(e.target.value)} /></li>
  <li><strong>Theme:</strong> <input type="text" value={theme} onChange={e => setTheme(e.target.value)} /></li>
  <li><strong>Referral:</strong> <input type="text" value={referral} onChange={e => setReferral(e.target.value)} /></li>
</ul>
<button className="edit-request" >Update</button>
</form>
</>
);
}
