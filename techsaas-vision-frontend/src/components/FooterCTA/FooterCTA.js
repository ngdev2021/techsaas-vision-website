import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import './FooterCTA.css';

const FooterCTA = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="footer-cta"
      style={{
        backgroundColor: themeSettings.colors.background, // Use theme's background color
        color: themeSettings.colors.text, // Use theme's text color
      }}
    >
      <h2>Ready to get started?</h2>
      <p>Contact us today to take your business to the next level.</p>
      <CTAButton text="Contact Us" />
    </div>
  );
};

export default FooterCTA;
