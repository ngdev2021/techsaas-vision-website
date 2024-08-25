import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div');
      particle.className = `particle particle-${i % 4}`; // Use different classes for varied shapes
      container.appendChild(particle);

      const size = Math.random() * 8 + 3; // Larger particles
      const positionX = Math.random() * 100;
      const positionY = Math.random() * 100;
      const duration = Math.random() * 7 + 5;
      const delay = Math.random() * 2;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${positionX}%`;
      particle.style.top = `${positionY}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) =>
        container.removeChild(particle)
      );
    };
  }, []);

  return (
    <div className="animated-background" ref={containerRef}></div>
  );
};

export default AnimatedBackground;
