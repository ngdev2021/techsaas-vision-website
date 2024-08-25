import React from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import './AboutPage.css';
import companyImage from '../../../assets/techsaas-logo2.png';

const AboutPage = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="about-page"
      style={{
        background: `linear-gradient(135deg, ${themeSettings.colors.background}, ${themeSettings.colors.secondaryBackground})`,
        color: themeSettings.colors.text,
      }}
    >
      <SectionHeader
        title="About Us"
        subtitle="Learn more about our mission and values"
      />
      <div className="about-content">
        <div className="mission-statement" data-aos="fade-right">
          <p>
            At <strong>TechSaas Vision</strong>, we believe in driving
            innovation and empowering businesses to achieve their full
            potential. Our mission is to provide cutting-edge
            solutions that cater to the unique needs of every client.
            We are committed to excellence, integrity, and delivering
            results that matter.
          </p>
        </div>
        <div className="values-section" data-aos="fade-left">
          <h3 className="values-title">Our Core Values</h3>
          <ul className="values-list">
            <li>💡 Innovation</li>
            <li>🤝 Integrity</li>
            <li>🚀 Excellence</li>
            <li>🎯 Customer Success</li>
          </ul>
        </div>
        <div className="about-visuals">
          <div className="parallax-wrapper">
            <img
              src={companyImage}
              alt="TechSaas Vision"
              className="about-image"
              data-aos="zoom-in"
            />
          </div>
          <div className="about-quote" data-aos="fade-up">
            <blockquote>
              "Empowering businesses to reach new heights with
              visionary tech solutions."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
