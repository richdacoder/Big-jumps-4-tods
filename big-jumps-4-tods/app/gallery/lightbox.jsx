'use client';

import React, { useState } from 'react';
import '../styles/lightbox.css';

export default function Lightbox({ images, index, onClose, setIndex }) {
  const [zoom, setZoom] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const toggleZoom = () => setZoom(!zoom);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const share = () => {
    const url = images[index];
    if (navigator.share) {
      navigator.share({ title: 'Photo', url });
    }
  };

  const download = () => {
    const link = document.createElement('a');
    link.href = images[index];
    link.download = `image-${index + 1}.jpg`;
    link.click();
  };

  return (
    <div className="lightbox">
      {/* Counter on left */}
      <div className="counter">{index + 1}/{images.length}</div>

      {/* Close button */}
      <button className="close-btn" onClick={onClose}>✕</button>

      {/* Right side controls */}
      <div className="controls-right">
        <button className="ctrl-btn" onClick={share}>⮕</button>
        <button className="ctrl-btn" onClick={download}>⬇</button>
        <button className="ctrl-btn" onClick={toggleZoom}>
          {zoom ? '🔎-' : '🔎+'}
        </button>
        <button className="ctrl-btn" onClick={toggleFullscreen}>
          {isFullscreen ? '⤢' : '⤢'}
        </button>
      </div>

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
