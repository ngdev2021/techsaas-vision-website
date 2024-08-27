import React from 'react';
import './HeroSection.css';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import CTAButton from '../CTAButton/CTAButton';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({
  title,
  subtitle,
  backgroundVideo,
  align = 'center',
  overlayOpacity = 0.5,
  buttonText = 'Enter',
  buttonAction = '/home',
  additionalContent = null, // Allows injecting additional content like images, badges, etc.
}) => {
  const themeSettings = useThemeSettings();
  const navigate = useNavigate();

  // Ensure buttonAction is a function or a string and behaves accordingly

  const handleButtonClick = () => {
    if (typeof buttonAction === 'string') {
      navigate(buttonAction);
    } else if (typeof buttonAction === 'function') {
      buttonAction();
    }
  };

  return (
    <section
      className={`hero-section ${align}`}
      style={{
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      {backgroundVideo && (
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div
        className="hero-overlay"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      ></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          <CTAButton text={buttonText} onClick={handleButtonClick} />
        </div>
        {additionalContent && (
          <div className="additional-content">
            {additionalContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
