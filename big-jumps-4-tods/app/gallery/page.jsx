'use client';
import React, { useState } from 'react';
import '../styles/gallery.css';
import Lightbox from './lightbox';

const images = [
  '/images/party1.jpg',
  '/images/party2.jpg',
  '/images/party3.jpg',
  '/images/party4.jpg',
  '/images/party5.jpg',
  '/images/party6.jpg',
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="gallery-page">
      <h2>Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img
              src={src}
              alt=""
              onClick={() => setActiveIndex(idx)}
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          setIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
