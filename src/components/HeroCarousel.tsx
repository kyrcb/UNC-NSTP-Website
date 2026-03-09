"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

import hero1 from "@/assets/HeroCarousel/1.webp";
import hero2 from "@/assets/HeroCarousel/2.jpg";
import hero3 from "@/assets/HeroCarousel/3.jpg";
import hero4 from "@/assets/HeroCarousel/4.jpg";
import hero5 from "@/assets/HeroCarousel/5.jpg";

const images: StaticImageData[] = [hero1, hero2, hero3, hero4, hero5];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setOffset(-50);
    }, 2000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setCurrent((prev) => (prev + 1) % images.length);
    setOffset(0);
  };

  // Build a list: current + next (so we always have something to slide to)
  const currentIndex = current % images.length;
  const nextIndex = (current + 1) % images.length;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          width: "200%",
          height: "100%",
          transform: `translateX(${offset}%)`,
          transition: isAnimating
            ? "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      >
        <div style={{ position: "relative", width: "50%", height: "100%" }}>
          <Image
            src={images[currentIndex]}
            alt={`Campus photo ${currentIndex + 1}`}
            fill
            className="object-cover opacity-60"
            priority={currentIndex === 0}
          />
        </div>
        <div style={{ position: "relative", width: "50%", height: "100%" }}>
          <Image
            src={images[nextIndex]}
            alt={`Campus photo ${nextIndex + 1}`}
            fill
            className="object-cover opacity-60"
          />
        </div>
      </div>
    </div>
  );
}
