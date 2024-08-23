import React from 'react';
import './IconContainer.css';

const IconContainer = ({ serviceType }) => {
  const renderIcon = () => {
    switch (serviceType) {
      case 'Custom Web Development':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="animated-icon"
          >
            {/* SVG content */}
          </svg>
        );
      case 'SaaS Solutions':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="animated-icon"
          >
            {/* SVG content */}
          </svg>
        );
      case 'E-Commerce Development':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="animated-icon"
          >
            {/* SVG content */}
          </svg>
        );
      default:
        return null;
    }
  };

  return <div className="icon-container">{renderIcon()}</div>;
};

export default IconContainer;
