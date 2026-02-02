'use client';
import React, { useState } from 'react';
import '../styles/gallery.css';
import Lightbox from './lightbox';

const images = [
  '/images/gallery/IMG_0443.png',
  '/images/gallery/IMG_0444.png',
  '/images/gallery/IMG_0445.png',
  '/images/gallery/IMG_0446.png',
  '/images/gallery/IMG_0447.png',
  '/images/gallery/IMG_0448.png',
  '/images/gallery/IMG_0449.png',
  '/images/gallery/IMG_0450.png',
  '/images/gallery/IMG_0451.png',
  '/images/gallery/IMG_0452.png',
  '/images/gallery/IMG_0453.png',
  '/images/gallery/IMG_0454.png',
  '/images/gallery/IMG_0455.png',
  '/images/gallery/IMG_0456.png',
  '/images/gallery/IMG_0457.png',
  '/images/gallery/IMG_0458.png',
  '/images/gallery/IMG_0459.png',
  '/images/gallery/IMG_0460.png',
  '/images/gallery/IMG_0461.png',
  '/images/gallery/IMG_0463.png',
  '/images/gallery/IMG_0462.png',
  '/images/gallery/IMG_0464.png',
  '/images/gallery/IMG_0465.png',
  '/images/gallery/IMG_0466.png',
  '/images/gallery/IMG_0467.png',
  '/images/gallery/IMG_0468.png',
  '/images/gallery/IMG_0469.png',
  '/images/gallery/IMG_0470.png',
  '/images/gallery/IMG_0471.png',
  '/images/gallery/IMG_0472.png',
  '/images/gallery/IMG_0473.png',
  '/images/gallery/IMG_0474.png',
  '/images/gallery/IMG_0475.png',
  '/images/gallery/IMG_0476.png',
  '/images/gallery/IMG_0477.png',
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
