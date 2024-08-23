import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({
  title,
  subtitle,
  align = 'center', // Default alignment is center, but can be customized
  backgroundImage, // Optional background image
  withDecoration = true, // Option to include decorative elements
}) => {
  return (
    <div
      className={`section-header ${align}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'none',
      }}
    >
      {withDecoration && <div className="section-decoration"></div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      {withDecoration && (
        <div className="section-decoration-bottom"></div>
      )}
    </div>
  );
};

export default SectionHeader;
