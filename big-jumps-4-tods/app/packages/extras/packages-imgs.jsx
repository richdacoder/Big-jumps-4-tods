"use client";
import { useState } from "react";

export default function PackageImages({ pkg, onClose }) {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % pkg.image.length);
  }

  function prev() {
    setIndex((i) =>
      i === 0 ? pkg.image.length - 1 : i - 1
    );
  }

  return (
    <div className="wrapper">
      <div className="image-card-wrapper">
        <button onClick={onClose}>x</button>

        <div className="image-card">
          <button onClick={prev}>←</button>

          <img
            src={pkg.image[index]}
            alt={pkg.alt}
            className="images"
          />

          <button onClick={next}>→</button>
        </div>
      </div>
    </div>
  );
}
