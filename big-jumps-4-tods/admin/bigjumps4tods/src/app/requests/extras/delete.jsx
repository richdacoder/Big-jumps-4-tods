"use client";

import { useEffect } from "react";

export default function Delete({ requests }) {
  useEffect(() => {
    if (!requests || requests.length === 0) return;

    const dateNow = new Date();

    const removeExpiredRequests = async () => {
      for (const req of requests) {
        if (!req.party_date || !req.id) continue;

        const partyDate = new Date(req.party_date);

        if (dateNow > partyDate) {
          try {
            console.log("Deleting expired request:", req.id, partyDate);
            await fetch(`http://localhost:3002/api/request/${req.id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });
          } catch (err) {
            console.error("Failed to delete request", req.id, err);
          }
        }
      }
    };

    removeExpiredRequests();
  }, [requests]);
  return null;
}
