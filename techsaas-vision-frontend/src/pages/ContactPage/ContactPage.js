import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CTAButton from '../../components/CTAButton/CTAButton';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import './ContactPage.css';

const ContactPage = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="contact-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <SectionHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you!"
      />
      <div className="contact-content">
        <p>
          If you have any questions or would like to get in touch,
          please fill out the form below or reach out to us directly.
        </p>
        <CTAButton text="Contact Us" />
      </div>
    </div>
  );
};

export default ContactPage;
