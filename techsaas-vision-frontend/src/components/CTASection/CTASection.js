import React from 'react';
import './CTASection.css';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import { useNavigate } from 'react-router-dom';

const CTASection = ({
  title,
  description,
  buttonText,
  buttonAction,
  themeSettings,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (typeof buttonAction === 'string') {
      navigate(buttonAction);
    } else if (typeof buttonAction === 'function') {
      buttonAction();
    }
  };

  return (
    <div
      className="cta-section"
      style={{
        backgroundColor: themeSettings.colors.sectionBackground,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
      data-aos="fade-up"
    >
      <h2>{title}</h2>
      <p>{description}</p>
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
    </div>
  );
};

export default CTASection;
