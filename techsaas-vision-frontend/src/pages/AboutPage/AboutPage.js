import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import './AboutPage.css';

const AboutPage = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="about-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <SectionHeader
        title="About Us"
        subtitle="Learn more about our mission and values"
      />
      <div className="about-content">
        <p>
          TechSaas Vision is dedicated to providing cutting-edge
          solutions for businesses of all sizes. Our mission is to
          empower you with the tools and strategies needed to succeed
          in today's competitive market.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
