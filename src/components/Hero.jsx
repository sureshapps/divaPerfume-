import React, { useState } from "react";
import "./Hero.css";

const images = [
  "/images/perfume1.png",
  "/images/perfume2.png",
  "/images/perfume3.png",
  "/images/perfume4.png",
  "/images/perfume5.png",
  "/images/perfume6.png",
];

const TOTAL_SLICES = 7;
const DURATION = 900;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(
    () => (0 + 1) % images.length
  );
  const [animating, setAnimating] = useState(false);

  const handleNext = () => {
    if (animating) return;

    const upcoming = (index + 1) % images.length;

    setNextIndex(upcoming);
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      setIndex(upcoming);
    }, DURATION);
  };

  return (
    <section className="hero">
      <div
        className={`slices ${animating ? "animate" : ""}`}
        data-animating={animating}
      >
        {Array.from({ length: TOTAL_SLICES }).map((_, i) => {
          const bgPos = `${(i * 100) / (TOTAL_SLICES - 1)}% center`;

          return (
            <div className="slice" key={i}>
              <div
                className="layer current"
                style={{
                  backgroundImage: `url(${images[index]})`,
                  backgroundSize: `${TOTAL_SLICES * 100}% 100%`,
                  backgroundPosition: bgPos,
                }}
              />

              {/* NEXT IMAGE SLICE */}
              <div
                className="layer next"
                style={{
                  backgroundImage: `url(${images[nextIndex]})`,
                  backgroundSize: `${TOTAL_SLICES * 100}% 100%`,
                  backgroundPosition: bgPos,
                }}
              />
            </div>
          );
        })}
      </div>

      <button className="hero-arrow" onClick={handleNext}>
        →
      </button>
    </section>
  );
};

export default Hero;
