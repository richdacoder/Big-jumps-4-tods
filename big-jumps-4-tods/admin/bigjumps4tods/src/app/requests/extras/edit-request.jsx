"use client";
/*

- click edit request button xxx
(import function then place in name in prorper spot of pop-up.jsx) xxx
- same pop up but now your able to edit
(import request variable then have it plug in function of edit-requst)
- pop up request but now they are inputs with the value of request.info
(now call request variable and make input elements )
   */

export default function EditRequest({ request, onClose, formatTime, formatDate }){
console.log('working edit request', request);

return (
 <>
 <button onClick={onClose}>&times;</button>
 <h1>edit request</h1>
  <ul className="request-details">
  <li><strong>ID:</strong> {request.id}</li>
  <li><strong>Email:</strong> {request.email}</li>
  <li><strong>Phone:</strong> {request.phone}</li>
  <li><strong>Party Address:</strong> {request.party_address}</li>
  <li><strong>Address Line 2:</strong> {request.address_line2 || "-"}</li>
  <li><strong>Party Date:</strong> {formatDate(request.party_date)}</li>
  <li><strong>Start Time:</strong> {formatTime(request.party_start_time)}</li>
  <li><strong>End Time:</strong> {formatTime(request.party_end_time)}</li>
  <li><strong>Package:</strong> {request.package}</li>
  <li><strong>Message:</strong> {request.message || "-"}</li>
  <li><strong>Theme:</strong> {request.theme || "-"}</li>
  <li><strong>Referral:</strong> {request.referral || "-"}</li>
  <li><strong>Request Made:</strong> {formatDate(request.created_at)}</li>
</ul>
</>
);
}
