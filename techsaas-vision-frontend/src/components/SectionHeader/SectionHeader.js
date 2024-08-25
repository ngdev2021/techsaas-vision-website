import './SectionHeader.css';
import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
  align = 'center', // Default alignment is center, but can be customized
  backgroundImage, // Optional background image
  withDecoration = true, // Option to include decorative elements
  themeSettings, // Theme settings from context
}) => {
  // Fallback values for theme settings
  const backgroundColor =
    themeSettings?.colors?.background || '#ffffff'; // Default to white
  const textColor = themeSettings?.colors?.text || '#000000'; // Default to black
  const primaryColor = themeSettings?.colors?.primary || '#ff6600'; // Default primary color

  return (
    <div
      className={`section-header ${align}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'none',
        backgroundColor,
        color: textColor,
      }}
    >
      {withDecoration && <div className="section-decoration"></div>}
      <h2
        className="section-title"
        style={{ color: primaryColor }} // Primary color for the title
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{ color: textColor }} // Text color for the subtitle
        >
          {subtitle}
        </p>
      )}
      {withDecoration && (
        <div className="section-decoration-bottom"></div>
      )}
    </div>
  );
};

export default SectionHeader;
