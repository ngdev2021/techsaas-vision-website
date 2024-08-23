import React from 'react';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import './CTAButton.css';

const CTAButton = ({ text, className = '', onClick }) => {
  const themeSettings = useThemeSettings();

  return (
    <button
      className={`cta-button ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: themeSettings.colors.accent, // Use theme's accent color
        color: themeSettings.colors.text, // Use theme's text color
      }}
    >
      {text}
    </button>
  );
};

export default CTAButton;
