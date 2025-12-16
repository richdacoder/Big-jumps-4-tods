"use client";

import Available from './available.jsx';
import NotAvailable from './not-available.jsx';
import { useState } from 'react';


export default function RequestModal({ request, onClose, onDelete }) {
  if (!request) return null;

  const formatDate = (dateString) =>
    dateString
      ? new Date(dateString).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";

  const formatTime = (dateString) =>
    dateString
      ? new Date(dateString).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })
      : "";

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;

    try {
      await fetch(`http://localhost:3002/api/requests/${request.id}`, {
        method: "DELETE",
      });
      onDelete(request.id);
      onClose();
    } catch (err) {
      console.error("Failed to delete request:", err);
    }
  };

  const [availabilityComponent, setAvailabilityComponent] = useState(null);

  const handleCheckAvailability = async () => {
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();
    const [Sdate, requestStartTime] = request.party_start_time.split('T');
    const [_, requestEndTime] = request.party_end_time.split('T');
    const requestDate = Sdate;
    let availability;
    const isOverLap = bookings.some( b =>{
      const [sBookDate, bookingStartTime] = b.party_start_time.split('T');
      const [eBookDate, bookingEndTime] = b.party_end_time.split('T');
      const bookingDate = sBookDate && eBookDate;
      if(requestStartTime === bookingStartTime && requestEndTime === bookingEndTime && requestDate === bookingDate ){
        availability = true;
        //render not available page
      } else {
        availability = false
        //render available page
      }
      return availability

      // return console.log(availability)
    })
     setAvailabilityComponent(isOverLap ? <NotAvailable />: <Available />);
    // setAvailabilityComponent('hi');
    //   console.log('checkk ', availabilityComponent);
  //  console.log(setAvailabilityComponent( 'hi' ));
    //if available send popup saying its available and to add to schedule
    //if not pop up saying not available and to contact user
    //

    //
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            {request.first_name} {request.last_name}
          </h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

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
            <div className="availability-container" >
               {availabilityComponent} </div>
        <div className="modal-actions" >
          <button className="delete-button" onClick={handleDelete}>
            Delete Request
          </button>
          <button className="check-button" onClick={handleCheckAvailability}>
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
