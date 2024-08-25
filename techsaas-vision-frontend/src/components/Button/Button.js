import React from 'react';
import './Button.css';
import '../../testStyles.css'; // Import the test styles here

const Button = ({
  label,
  onClick,
  style,
  disabled = false,
  className = 'test-button', // Add the test className here
}) => {
  return (
    <button
      className={`button ${className}`} // Add the test className here
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
