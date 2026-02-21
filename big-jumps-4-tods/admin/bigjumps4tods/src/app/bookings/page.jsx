"use client";
import { useState } from "react";
import EditBookings from "./extras/edit.jsx";
import "../styles/book-contact-user.css"


export default function BookingModal({ booking, onClose }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);


  if (!booking) return null;

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

  // Hide main BookingModal content
  const hideBookingContent = () => setIsHidden(true);


  return (
    <div className= "booking-modal-overlay"  onClick={onClose}>
      <div
        className={`booking-modal-card ${lockScroll ? "no-scroll" : ""}`}
        onClick={(e) => {
          e.stopPropagation()}}
      >
        {/* BookingModal content */}
        {!isEditing && !isHidden && (
          <>
            <div className="booking-modal-header">
              <h2>
                {booking.first_name} {booking.last_name}
              </h2>
              <button className="close-button" onClick={onClose}>
                &times;
              </button>
            </div>

            <ul className="booking-details">
              <li>
                <strong>Booking ID:</strong> {booking.id}
              </li>
              <li>
                <strong>Email:</strong> {booking.email || "-"}
              </li>
              <li>
                <strong>Phone:</strong> {booking.phone || "-"}
              </li>
              <li>
                <strong>Party Address:</strong> {booking.party_address || "-"}
              </li>
              <li>
                <strong>Address Line 2:</strong> {booking.address_line2 || "-"}
              </li>
              <li>
                <strong>Party Date:</strong> {formatDate(booking.party_date)}
              </li>
              <li>
                <strong>Start Time:</strong> {formatTime(booking.party_start_time)}
              </li>
              <li>
                <strong>End Time:</strong> {formatTime(booking.party_end_time)}
              </li>
              <li>
                <strong>Package:</strong> {booking.package || "-"}
              </li>
              <li>
                <strong>Theme:</strong> {booking.theme || "-"}
              </li>
              <li>
                <strong>Message:</strong> {booking.message || "-"}
              </li>
              <li>
                <strong>Booked On:</strong> {formatDate(booking.created_at)}
              </li>
            </ul>

            <div className="booking-modal-actions">
              <button className="check-button" onClick={onClose}>
                Close
              </button>
              <button className="booking-edit-button"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                Edit Booking
              </button>
            </div>
          </>
        )}

        {/* EditBookings popup */}
        {isEditing && (
          <div className="edit-popup">
            <EditBookings
              booking={booking}
              onClose={() => setIsEditing(false)}
              formatDate={formatDate}
              formatTime={formatTime}
              setLockScroll={setLockScroll}
            />
          </div>
        )}
      </div>
    </div>
  );
}
