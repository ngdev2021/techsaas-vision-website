import React from 'react';
import CTAButton from '../../../components/CTAButton/CTAButton';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import AnimatedBackground from '../../../components/AnimatedBackground/AnimatedBackground';
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
      <AnimatedBackground />
      <SectionHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you!"
      />
      <div className="contact-content">
        <p>
          If you have any questions or would like to get in touch,
          please fill out the form below or reach out to us directly.
        </p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <CTAButton text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
