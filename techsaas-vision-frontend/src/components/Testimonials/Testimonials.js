import React, { useState, useEffect } from 'react';
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

  const { text, author, avatar } = testimonials[currentIndex];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-card">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="testimonial-avatar"
          />
        )}
        <p className="testimonial-text">"{text}"</p>
        <p className="testimonial-author">- {author}</p>
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
