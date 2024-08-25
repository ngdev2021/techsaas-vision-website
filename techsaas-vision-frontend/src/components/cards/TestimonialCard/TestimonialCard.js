import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ avatar, text, author, title, rating }) => {
  return (
    <div className="testimonial-card">
      <h3 className="testimonial-title">{title}</h3>
      <img src={avatar} alt={author} className="testimonial-avatar" />
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-author">- {author}</p>
      <div className="testimonial-rating">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
    </div>
  );
};

export default TestimonialCard;
