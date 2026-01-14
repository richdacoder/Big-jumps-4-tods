"use client";
/*

- click edit request button xxx
(import function then place in name in prorper spot of pop-up.jsx) xxx
- same pop up but now your able to edit xx
(import request variable then have it plug in function of edit-requst) xx
- pop up request but now they are inputs with the value of request.info xx
(now call request variable and make input elements ) xx

now:
- info must be able to update database
- make use state for all keys in object
- use effect to add fetch (PUT)
   */

export default function EditRequest({ request, onClose, formatTime, formatDate }){
console.log('working edit request', request);

return (
 <>
 <button onClick={onClose}>&times;</button>
 <h1>edit request</h1>
  <ul className="request-details">
  <li><strong>ID:</strong> <input type="number" value={request.id} /></li>
  <li><strong>Email:</strong> <input type="email" value={request.email} /></li>
  <li><strong>Phone:</strong> <input type="tel" value={request.phone} /></li>
  <li><strong>Party Address:</strong> <input type="text" value={request.party_address} /></li>
  <li><strong>Address Line 2:</strong> <input type="text" value={request.address_line2 || "-"} /></li>
  <li><strong>Party Date:</strong> <input type="date" value={formatDate(request.party_date)} /></li>
  <li><strong>Start Time:</strong> <input type="time" value={formatTime(request.party_start_time)} /></li>
  <li><strong>End Time:</strong> <input type="time" value={formatTime(request.party_end_time)} /></li>
  <li><strong>Package:</strong> <input type="text" value={request.package} /></li>
  <li><strong>Message:</strong> <input type="text" value={request.message || "-"} /></li>
  <li><strong>Theme:</strong> <input type="text" value={request.theme || "-"} /></li>
  <li><strong>Referral:</strong> <input type="text" value={request.referral || "-"} /></li>
  <li><strong>Request Made:</strong> <input type="time" value={formatDate(request.created_at)} /></li>
</ul>
</>
);
}
