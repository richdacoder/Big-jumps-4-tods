"use client";
import "../styles/requests.css"; // import the separate CSS file

export default function RequestsPage() {
  return (
      <div className="requests-page">
        <h1>Requests</h1>

        <section className="site-main">
          {/* Example request items */}
          <div className="request-item">
            <p>Request 1: John Doe - Haircut</p>
          </div>
          <div className="request-item">
            <p>Request 2: Jane Smith - Hair Coloring</p>
          </div>
          <div className="request-item">
            <p>Request 3: Mike Johnson - Kids Haircut</p>
          </div>
        </section>
      </div>
  );
}
