"use client";


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

  const handleCheckAvailability = async () => {
    try {
      const res = await fetch("http://localhost:3002/api/bookings");

      if (!res.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const bookings = await res.json();

      console.log("Bookings:", bookings);

      alert(
        `Checking availability from ${new Date(
          request.party_start_time
        ).toLocaleString()} to ${new Date(
          request.party_end_time
        ).toLocaleString()}`
      );
    } catch (err) {
      console.error("Failed to check availability:", err);
    }
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

        <div className="modal-actions">
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
