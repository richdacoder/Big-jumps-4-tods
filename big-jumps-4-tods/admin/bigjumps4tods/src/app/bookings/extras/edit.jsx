"use client";
import { useEffect, useState } from "react";

export default function EditBookings({booking, onClose, formatDate, formatTime}){
//fetch get bookings
//fetch edit or put
useEffect(() => {
  const edit = async () => {
    try {
      const res = await fetch(`http://localhost:3002/api/bookings/${booking.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ modifystring: "yourValueHere" })
      });

      if (!res.ok) throw new Error('Failed to update booking');

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

 // edit();
},); // add []

//fetch delete
const handleDelete = async (bookingId) => {
  try {
    const res = await fetch(`http://localhost:3002/api/bookings/${bookingId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error('Failed to delete booking');
    }

    const data = await res.json();
    console.log('Deleted booking:', data);
    alert('Booking deleted successfully!');
  } catch (err) {
    console.error(err);
    alert('Error deleting booking: ' + err.message);
  }
};

//make submit form with input and get
//make iteration of booking in placeholder
//make class call hide on pop up
// hide activate when click on edit
return(

<>
  <h2>
  {booking.first_name} {booking.last_name}
</h2>
<button className="close-button" onClick={onClose}>
  &times;
</button>

<ul className="request-details">
<li><strong>Booking ID:</strong> {booking.id}</li>
<li><strong>Email:</strong> {booking.email || "-"}</li>
<li><strong>Phone:</strong> {booking.phone || "-"}</li>
<li><strong>Party Address:</strong> {booking.party_address || "-"}</li>
<li><strong>Address Line 2:</strong> {booking.address_line2 || "-"}</li>
<li><strong>Party Date:</strong> {formatDate(booking.party_date)}</li>
<li><strong>Start Time:</strong> {formatTime(booking.party_start_time)}</li>
<li><strong>End Time:</strong> {formatTime(booking.party_end_time)}</li>
<li><strong>Package:</strong> {booking.package || "-"}</li>
<li><strong>Theme:</strong> {booking.theme || "-"}</li>
<li><strong>Notes:</strong> {booking.notes || "-"}</li>
<li><strong>Booked On:</strong> {formatDate(booking.created_at)}</li>
</ul>
</>






)

}
