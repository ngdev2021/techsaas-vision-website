import React from 'react';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import { useNavigate } from 'react-router-dom';
import './Section.css';

const Section = ({
  title,
  content,
  buttonText,
  buttonAction,
  additionalContent,
}) => {
  const themeSettings = useThemeSettings();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (typeof buttonAction === 'string') {
      navigate(buttonAction);
    } else if (typeof buttonAction === 'function') {
      buttonAction();
    }
  };

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
      {additionalContent}

      {buttonText && buttonAction && (
        <button
          className="cta-button"
          style={{
            backgroundColor: themeSettings.colors.accent || '#007bff',
            color: themeSettings.colors.buttonText || '#ffffff',
          }}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default Section;
