"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import '../../styles/confirmation.css';

function ConfirmRequest() {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  console.log('connecting',request);

  const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const formatTime = (dateString) =>
  new Date(dateString).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });


  useEffect(() => {
    if (!id) return;

    const fetchRequest = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/requests/${id}`);
        const data = await res.json();
        console.log(data)
        setRequest(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRequest();
  }, [id]);

return (
  <>
  <div className="background">
    <h2 className="coral-color">Request Confirmed 🎉</h2>

    {request && (
      <div>
        <p className="words">
          Thank you <strong>{request.first_name} {request.last_name}</strong>!
        </p>

        <p className="words">
          We’ve received your party request for{" "}
          <strong className="words">{formatDate(request.party_date)}</strong> from{" "}
          <strong className="words">
            {formatTime(request.party_start_time)} –{" "}
            {formatTime(request.party_end_time)}
          </strong>.
        </p>

        <p className="words">
          Our team will review your request and contact you shortly to let you
          know whether it has been accepted or not.
        </p>

        <p className="words">
          A confirmation has also been sent to{" "}
          <strong>{request.email}</strong>.
        </p>
      </div>
    )}
    </div>
  </>
);
}

export default ConfirmRequest;
