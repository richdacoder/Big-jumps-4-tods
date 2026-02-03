"use client";
import "../../styles/package-images.css";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function PackageImages({ pkg, onClose }) {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((i) => (i + 1) % pkg.image.length),
    onSwipedRight: () =>
      setIndex((i) => (i === 0 ? pkg.image.length - 1 : i - 1)),
    trackMouse: true // allows desktop mouse drag
  });

  return (
    <div className="wrapper">
      <div className="image-card-wrapper">
        <button onClick={onClose}>x</button>
        <div className="image-card" {...handlers}>
          <button className="prev"onClick={() => setIndex((i) => (i === 0 ? pkg.image.length - 1 : i - 1))}>
            ←
          </button>
          <img src={pkg.image[index]} alt={pkg.alt} className="images" />
          <button className="next" onClick={() => setIndex((i) => (i + 1) % pkg.image.length)}>→</button>
        </div>
      </div>
    </div>
  );
}
