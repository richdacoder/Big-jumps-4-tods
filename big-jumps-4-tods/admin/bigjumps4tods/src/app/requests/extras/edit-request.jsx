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
   */

export default function EditRequest({ request, onClose, formatTime, formatDate }){
console.log('working edit request', request);

return (
 <>
 <button onClick={onClose}>&times;</button>
 <h1>edit request</h1>
  <ul className="request-details">
  <li><strong>ID:</strong> <input value={request.id} /></li>
  <li><strong>Email:</strong> <input value={request.email} /></li>
  <li><strong>Phone:</strong> <input value={request.phone} /></li>
  <li><strong>Party Address:</strong> <input value={request.party_address} /></li>
  <li><strong>Address Line 2:</strong> <input value={request.address_line2 || "-"} /></li>
  <li><strong>Party Date:</strong> <input value={formatDate(request.party_date)} /></li>
  <li><strong>Start Time:</strong> <input value={formatTime(request.party_start_time)} /></li>
  <li><strong>End Time:</strong> <input value={formatTime(request.party_end_time)} /></li>
  <li><strong>Package:</strong> <input value={request.package} /></li>
  <li><strong>Message:</strong> <input value={request.message || "-"} /></li>
  <li><strong>Theme:</strong> <input value={request.theme || "-"} /></li>
  <li><strong>Referral:</strong> <input value={request.referral || "-"} /></li>
  <li><strong>Request Made:</strong> <input value={formatDate(request.created_at)} /></li>
</ul>
</>
);
}
