"use clients"
import { useEffect, useState } from "react";

export default function EditBookings({booking}){
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

  <button>test</button>
)

}
