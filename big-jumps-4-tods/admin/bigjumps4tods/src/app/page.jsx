"use client";
import "./styles/home.css";
import './styles/edit.css';
import './styles/book-modal.css';
import BookingModal from "./bookings/page.jsx";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Format dates safely
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const date = new Date(timeString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  // Fetch bookings once on mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:3002/api/bookings");
        if (!res.ok) throw new Error("Fail to fetch bookings");
        const data = await res.json();
        setBookings(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <section className="site-main">
      <h2>Upcoming Events</h2>

      <div className="bookInfo">
        <span>Party Date</span>
        <span>Name</span>
        <span>Party Time</span>
      </div>

      {[...bookings]
        // .sort((a, b) => new Date(a.party_date) - new Date(b.party_date))
        .map((book) => (
          <button
            className="event-button"
            key={book.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedBooking(book);}}
          >
            <span>{formatDate(book.party_date)}</span>
            <span>{book.first_name} {book.last_name}</span>
             <span>
              {formatTime(book.party_start_time)} - {formatTime(book.party_end_time)}
            </span>
          </button>
        ))}
      {selectedBooking && (
        <BookingModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </section>
  );
};

export default HomePage;
