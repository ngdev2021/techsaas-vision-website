// src/components/Testimonials/Testimonials.jsx

import React, { useEffect, useState } from 'react';
import TestimonialCard from '../cards/TestimonialCard/TestimonialCard';
import './Testimonials.css';

const Testimonials = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return <p>No testimonials available at the moment.</p>;
  }

  const { text, author, avatar, title, rating } =
    testimonials[currentIndex];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonial-card-wrapper">
        <TestimonialCard
          title={title}
          text={text}
          author={author}
          avatar={avatar}
          rating={rating}
        />
      </div>
      <div className="testimonial-navigation">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`navigation-dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
