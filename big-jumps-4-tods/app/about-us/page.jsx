'use client';
import React from "react";
import '../styles/about-us.css'; // we'll create this CSS file

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="hero-section">
        <h1>About Big Jumps 4 Tods</h1>
        <p>Where Fun Meets Safety & Smiles!</p>
      </section>

      {/* Content section */}
      <section className="content-section">
        <div className="content-image">
          <img src=  '/images/gallery/IMG_0461.png' alt="Kids Playing" />
        </div>
        <div className="content-text">
          <h2>Our Purpose</h2>
          <p>
            We create safe, exciting, and unforgettable spaces for children ages 0-6.
            Our bounce houses, slides, and soft play areas are designed for maximum
            fun while parents enjoy peace of mind.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>Clean & sanitized play zones</li>
            <li>Safe equipment for infants and toddlers</li>
            <li>Friendly staff who love children</li>
            <li>Affordable family-friendly fun</li>
          </ul>
        </div>
      </section>

      {/* Mission banner */}
      <section className="mission-banner">
        <h2>Creating Joy, One Playtime at a Time</h2>
        <p>We provide memorable experiences full of laughter and smiles!</p>
      </section>
    </div>
  );
}
