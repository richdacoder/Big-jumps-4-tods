"use client";
import "../styles/requests.css";

export default function RequestsPage() {
  return (
    <div className="requests-page">
      <h1>Requests</h1>

      <section className="site-main">
        {/* Example request items */}
        <div className="request-item">
          <button className="request-button">
            Request Date: John Doe for Date of schedule
          </button>
        </div>

        <div className="request-item">
          <button className="request-button">
            Request Date: Jane Smith for Date of schedule
          </button>
        </div>

        <div className="request-item">
          <button className="request-button">
            Request Date: Mike Johnson for Date of schedule
          </button>
        </div>
      </section>
    </div>
  );
}
