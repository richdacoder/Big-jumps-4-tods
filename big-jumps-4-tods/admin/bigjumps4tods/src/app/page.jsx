"use client";
import "./styles/home.css";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [bookings, setBookings] = useState([]);

  // Format dates safely
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
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
  }, []); // empty array → run only once

  return (
    <section className="site-main">
      <h2>Upcoming Events</h2>
      {bookings.map((book) => (
        <button className="event-button" key={book.id}>
          <span>{formatDate(book.party_date)}</span>
          <span>{book.first_name} {book.last_name}</span>
          <span>
            {formatDate(book.start_time)} - {formatDate(book.end_time)}
          </span>
        </button>
      ))}
      Later you can map events from your database here
    </section>
  );
};

export default HomePage;
