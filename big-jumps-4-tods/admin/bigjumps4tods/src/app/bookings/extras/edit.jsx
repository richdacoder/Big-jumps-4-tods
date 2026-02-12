"use client";
import { useEffect, useState } from "react";
import CheckAvailableBooking from "./check-available-booking.jsx";
import NotAvailable from "./not-available.jsx";

export default function EditBookings({ booking, onClose, formatDate, formatTime }) {
  const today = new Date().toISOString().split('T')[0];

  // Helper function to convert full date/time string to "HH:MM" for input[type="time"]
  const toTimeInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  // Helper function to convert full date string to "YYYY-MM-DD" for input[type="date"]
  const toDateInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // State for editable fields
  const [email, setEmail] = useState(booking.email || "");
  const [phone, setPhone] = useState(booking.phone || "");
  const [partyAddress, setPartyAddress] = useState(booking.party_address || "");
  const [addressLine2, setAddressLine2] = useState(booking.address_line2 || "");
  const [partyDate, setPartyDate] = useState(toDateInput(booking.party_date));
  const [startTime, setStartTime] = useState(toTimeInput(booking.party_start_time));
  const [endTime, setEndTime] = useState(toTimeInput(booking.party_end_time));
  const [pkg, setPkg] = useState(booking.package || "");
  const [theme, setTheme] = useState(booking.theme || "");
  const [message, setMessage] = useState(booking.message || "");

  const startTimestamp = `${partyDate} ${startTime}`;
    const endTimestamp   = `${partyDate} ${endTime}`;

    const currentBookingId = booking.id;
    const [isAvailable, setIsAvailable] = useState(null)
    const checkAvailability = async () => {
      const overlap = await CheckAvailableBooking({
        partyDate,
        startTime,
        endTime,
        currentBookingId
      });
      console.log('check party date', partyDate);

      setIsAvailable(!overlap);
    };
    console.log(
      isAvailable === null
        ? 'not checked yet'
        : isAvailable
          ? 'available'
          : 'not available',
      isAvailable
    );

  // Submit function for updating booking
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!email || !phone || !partyAddress || !partyDate || !startTime || !endTime || !pkg) {
      return alert('Please fill in all required fields.');
    }

    try {
      const res = await fetch(`http://localhost:3002/api/booking/${booking.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          party_address: partyAddress,
          address_line2: addressLine2,
          party_date: partyDate,
          party_start_time: startTimestamp,
          party_end_time: endTimestamp,
          package: pkg,
          theme: theme,
          message: message,
        }),
      });
      if (!res.ok) throw new Error("Failed to update booking", console.log(res)) ;
      const data = await res.json();
      console.log("Updated booking:", data);
      alert("Booking updated successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Error updating booking: " + err.message);
    }
  };

  //fetch delete
  const handleDelete = async (bookingId) => {
    try {
      const res = await fetch(`http://localhost:3002/api/booking/${bookingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete booking");
      }

      const data = await res.json();
      console.log("Deleted booking:", data);
      alert("Booking deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error deleting booking: " + err.message);
    }
  };

  return (
    <>
      <h2>
        {booking.first_name} {booking.last_name}
      </h2>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>

      <form onSubmit={handleUpdate}>
        <ul className="booking-details">
          <li>
            <strong>Booking ID:</strong> {booking.id}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </li>
          <li>
            <strong>Party Address:</strong>{" "}
            <input type="text" value={partyAddress} onChange={(e) => setPartyAddress(e.target.value)} />
          </li>
          <li>
            <strong>Address Line 2:</strong>{" "}
            <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
          </li>
          <li>
            <strong>Party Date:</strong>{" "}
            <input type="date" min={today} value={partyDate} onChange={(e) => setPartyDate(e.target.value)} />
          </li>
          <li>
            <strong>Start Time:</strong>{" "}
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </li>
          <li>
            <strong>End Time:</strong>{" "}
            <input type="time" min={startTime} value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </li>
          <li>
            <strong>Package:</strong>{" "}
            <input type="text" value={pkg} onChange={(e) => setPkg(e.target.value)} />
          </li>
          <li>
            <strong>Theme:</strong>{" "}
            <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
          </li>
          <li>
            <strong>Message:</strong>{" "}
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          </li>
          <li>
            <strong>Booked On:</strong> {formatDate(booking.created_at)}
          </li>
        </ul>


        <button className="update-book" type="submit">Update Booking</button>

        <button className="delete-book" type="button" onClick={() => handleDelete(booking.id)}>
          Delete Booking
        </button>
      </form>
      <button className="update-book" type="button" onClick={checkAvailability}>Check Availability</button>
         {/* <CheckAvailableBooking
           date={partyDate}
           startTime={startTime}
           endTime={endTime}
           checkAvailability={checkAvailability}
           formatDate={formatDate}
           formatTime={formatTime}


         /> */}
         {
          isAvailable === false
          &&
         (<NotAvailable
          booking={booking}
         />)
         }
    </>
  );
}
