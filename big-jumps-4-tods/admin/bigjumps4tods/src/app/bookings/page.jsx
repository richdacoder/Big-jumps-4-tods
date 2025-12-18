"use client";

export default function BookingModal({ booking, onClose }) {
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>
            {booking.first_name} {booking.last_name}
          </h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

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

        <div className="modal-actions">
          <button className="check-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
