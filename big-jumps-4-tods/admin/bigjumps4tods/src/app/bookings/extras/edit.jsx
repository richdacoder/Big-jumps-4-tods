"use clients"
import { useEffect, useState } from "react";

export default function EditBookings({booking}){
//fetch get bookings
console.log('check for booking', booking)
//fetch edit or put
useEffect(() => {
  const edit = async () => {
    try {
      const res = await fetch('http://localhost:3002/api/bookings', {
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

  edit();
}, []); // run once on mount

//fetch delete

//make submit form with input and get
//make iteration of booking in placeholder
//make class call hide on pop up
// hide activate when click on edit
return(

  <button>test</button>
)

}
