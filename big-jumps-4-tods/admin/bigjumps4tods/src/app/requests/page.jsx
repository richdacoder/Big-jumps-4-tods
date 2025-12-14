"use client";

import { useEffect, useState } from "react";
import "../styles/requests.css";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch("http://localhost:3002/api/requests");

        if (!res.ok) {
          throw new Error("Failed to fetch requests");
        }

        const data = await res.json();

        // Sort by request sent date (newest first)
        data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <p className="loading">Loading requests...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="requests-page">
      <h1>Requests</h1>

      <section className="site-main">
        {requests.length === 0 && (
          <p className="empty">No requests found</p>
        )}

        {requests.map((req) => (
          <div className="request-item" key={req.id}>
            <button className="request-button">
              <span className="request-left">
                {formatDate(req.created_at)}
              </span>

              <span className="request-middle">
                {req.first_name} {req.last_name}
              </span>

              <span className="request-right">
                {formatDate(req.party_date)}
              </span>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

/**
 * Helper: format dates nicely
 */
function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
