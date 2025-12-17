"use client";
import "./styles/home.css";

import React from "react";

const HomePage = () => {
  const bookings = async () =>{
    try{
   const res = await fetch('http://localhost:3002/api/bookings');
   if(!res.ok){
    throw new Error('Fail to fetch bookings');
   }
   const data = await res.json();
   return data
  } catch(err) {
    console.error(err)
    throw err
  }
  }




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
