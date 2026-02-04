'use client';

import React, { useState } from 'react';
import '../styles/lightbox.css';

export default function Lightbox({ images, index, onClose, setIndex }) {
  const [zoom, setZoom] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);


  return (
    <div className="lightbox">
      {/* Counter on left */}
      <div className="counter">{index + 1}/{images.length}</div>

      {/* Close button */}
      <button className="close-btn" onClick={onClose}>✕</button>


      {/* Main image */}
      <img
        src={images[index]}
        className={`lightbox-img ${zoom ? 'zoomed' : ''}`}
        alt=""
      />

      {/* Nav arrows */}
      <button className="arrow left" onClick={prev}>‹</button>
      <button className="arrow right" onClick={next}>›</button>
    </div>
  );
}
