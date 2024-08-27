import React, { useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './TestimonialCarousel.css';

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3; // Number of testimonials to display

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleTestimonials < testimonials.length
        ? prevIndex + visibleTestimonials
        : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleTestimonials >= 0
        ? prevIndex - visibleTestimonials
        : testimonials.length - visibleTestimonials
    );
  };

  return (
    <div className="testimonials-carousel">
      <button onClick={handlePrev}>Previous</button>
      <div className="testimonials-wrapper">
        {testimonials
          .slice(currentIndex, currentIndex + visibleTestimonials)
          .map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
            />
          ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default TestimonialsCarousel;
