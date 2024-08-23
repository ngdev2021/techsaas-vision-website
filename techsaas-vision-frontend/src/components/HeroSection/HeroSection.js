import React from 'react';
import './HeroSection.css';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import videoFile from '../../assets/videos/logovideo.mp4'; // Import the video file

const HeroSection = ({
  title,
  description,
  align = 'center',
  buttons = [],
}) => {
  const themeSettings = useThemeSettings();

  return (
    <section
      className={`hero-section ${align}`}
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-buttons">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="hero-button"
              style={{ backgroundColor: themeSettings.colors.accent }}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
