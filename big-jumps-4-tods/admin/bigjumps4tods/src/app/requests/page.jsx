"use client";

import { useEffect, useState } from "react";
import RequestModal from "./extras/pop-up"; // import modal
import Delete from "./extras/delete.jsx";
import "../styles/requests.css";
import "../styles/edit-request.css";
import "../styles/request-modal.css"; // Import the separate CSS


export default function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("http://localhost:3002/api/requests");
        if (!res.ok) throw new Error("Failed to fetch requests");

        const data = await res.json();
        data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p className="loading">Loading requests...</p>;
  if (error) return <p className="error">{error}</p>;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const formatTime = (dateString) =>
  dateString
    ? new Date(dateString).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  const handleDelete = (id) => {
    const newRequest = requests.filter(req => req.id !== id )
    return setRequests(newRequest);
  }

  const handleUpdate = (updatedRequest) => {
    setRequests(prev =>
      prev.map(req => req.id === updatedRequest.id ? updatedRequest : req)
    );
    setSelectedRequest(null);
  };

  return (

    <div className="requests-page">
      <h1>Requests</h1>
      <div className={'bookInfo'}>
        <span>Request Date</span>
        <span>Requester Name</span>
        <span>Party Date</span>
      </div>

      <section className="site-main">
        {requests.length === 0 && <p className="empty">No requests found</p>}

        {requests.map((req) => (
          <div className="request-item" key={req.id}>
            <button
              className="request-button"
              onClick={() => setSelectedRequest(req)}
            >
              <span className="request-left">{formatDate(req.created_at)}</span>
              <span className="request-middle">{req.first_name} {req.last_name}</span>
              <span className="request-right">{formatDate(req.party_date)}</span>
            </button>
          </div>
        ))}
      </section>

      {/* Render modal */}
      {selectedRequest && (
        <RequestModal
        request={selectedRequest}
        onClose={() => setSelectedRequest(null)}
        onDelete={handleDelete}
        formatDate={formatDate}
        formatTime={formatTime}
        onUpdate={handleUpdate}
         />
      )}
      <Delete requests={requests} />

    </div>

  );
}
