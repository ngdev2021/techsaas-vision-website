import React from 'react';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import './Section.css';

const Section = ({ title, content, buttonText, buttonAction }) => {
  const themeSettings = useThemeSettings();

  console.log('Current theme settings:', themeSettings); // Debugging line

  return (
    <section
      className="section"
      style={{
        backgroundColor:
          themeSettings.colors.sectionBackground || '#ffffff', // Fallback if undefined
        color: themeSettings.colors.text || '#000000',
      }}
    >
      <h2
        style={{ color: themeSettings.colors.heading || '#000000' }}
      >
        {title}
      </h2>
      <p>{content}</p>
      {buttonText && buttonAction && (
        <button
          className="cta-button"
          style={{
            backgroundColor: themeSettings.colors.accent || '#007bff',
            color: themeSettings.colors.buttonText || '#ffffff',
          }}
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default Section;
