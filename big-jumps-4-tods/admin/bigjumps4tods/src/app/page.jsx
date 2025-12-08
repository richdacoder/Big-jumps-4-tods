"use client";
import "./styles/home.css";

import React from "react";

const HomePage = () => {
  return (
    <section className="site-main">
      <h2>Upcoming Events</h2>

      <button className="event-button">
        party date - name - time
      </button>

      {/* Later you can map events from your database here */}
    </section>
  );
};

export default HomePage;
