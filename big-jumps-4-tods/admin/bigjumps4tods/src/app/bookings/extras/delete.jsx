"use client";

import { useEffect } from "react";

export default function Delete({ bookings }) {
  useEffect(() => {
    if (!bookings || bookings.length === 0) return;

    const dueDate = new Date();
    dueDate.setHours(0, 0, 0, 0);
    const removeExpiredBookings = async () => {
      for (const booking of bookings) {
        if (!booking.party_date || !booking.id) continue;

        const partyDate = new Date(booking.party_date);

        if (dueDate > partyDate) {
          try {
            console.log("Deleting expired booking:", booking.id, partyDate);
            console.log({
              now: dueDate,
              party_date: partyDate
            })

            await fetch(`http://localhost:3002/api/booking/${booking.id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            });
          } catch (err) {
            console.error("Failed to delete booking", booking.id, err);
          }
        }
      }
    };

    removeExpiredBookings();
  }, [bookings]);

  return null;
}
