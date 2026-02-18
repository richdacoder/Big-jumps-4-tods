"use client";

import Available from './available.jsx';
import NotAvailable from './not-available.jsx';
import EditRequest from './edit-request.jsx';
import { useState } from 'react';
import "../../styles/request-contact-user.css";


export default function RequestModal({ request, onClose, onDelete, onUpdate }) {

  const[editRequest, setEditRequest] = useState(false);
  const[lockScroll, setLockScroll] = useState(false);

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
      await fetch(`http://localhost:3002/api/request/${request.id}`, {
        method: "DELETE",
      });
    } catch (err) {
      console.error("Failed to delete request:", err);
    }
    onClose();
    onDelete(request.id);
  };
//chip sylard and yyosif garcia
  const [availabilityComponent, setAvailabilityComponent] = useState(null);

  const handleCheckAvailability = async () => {
    const res = await fetch('http://localhost:3002/api/bookings');
    const bookings = await res.json();

    const requestStartTime = request.party_start_time;
    const requestEndTime = request.party_end_time;


    let availability;
    const isOverLap = bookings.some( b =>{

          const  bookingStartTime = b.party_start_time;
          const  bookingEndTime = b.party_end_time;



      console.log('book',
      { 'booking': bookingStartTime,
      'booking end': bookingEndTime
    } );
      console.log('request', {
        'request': requestStartTime,
        'request end': requestEndTime
      } );
      if(requestStartTime < bookingEndTime && requestEndTime > bookingStartTime
        ){
        availability = true;
        console.log('true boy');

      } else {
        availability = false;
        console.log('false boy');


      }
      return availability
    })
        setAvailabilityComponent(
          isOverLap
            ? <NotAvailable
            request={request}
            setLockScroll={setLockScroll}
            />
            : <Available
                request={request}
                onClose={onClose}
                onDelete={onDelete}
              />
        );
      };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-card ${lockScroll? "no-scroll" : ""} `} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            {request.first_name} {request.last_name}
          </h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {!editRequest && (
          <>
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

            <div className="availability-container">
              {availabilityComponent}
            </div>

            <div className="modal-actions">
              <button className="delete-button" onClick={handleDelete}>
                Delete Request
              </button>
              <button className="check-button" onClick={handleCheckAvailability}>
                Check Availability
              </button>
              <button
                className="edit-request"
                onClick={() => setEditRequest(true)}
              >
                Edit Request
              </button>
            </div>
          </>
        )}

        {
            editRequest &&
          (<EditRequest
          request={request}
          onClose={() => setEditRequest(false)}
          onUpdate={onUpdate}
          />)
          }

      </div>
    </div>
  );
}
