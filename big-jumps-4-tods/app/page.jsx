'use client';

import React from 'react';
import './styles/home.css';

export default function HomePage() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-content">

          <h1>
            Unlimited Fun, Unlimited Smiles <br /> Priceless Memories
          </h1>

          <p>Softplay For Children Ages 0–6 Years Old</p>

          <a href="/booking" className="btn-book">
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
