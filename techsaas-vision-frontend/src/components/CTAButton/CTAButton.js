import React from 'react';
import './CTAButton.css'; // Import styles

const CTAButton = ({ text, onClick, className = '' }) => {
  return (
    <button className={`cta-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
