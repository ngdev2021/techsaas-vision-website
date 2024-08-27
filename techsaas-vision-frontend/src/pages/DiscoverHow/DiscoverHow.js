import React, { useEffect } from 'react';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import AOS from 'aos';
import InnovationArea from '../../components/InnovationArea/InnovationArea';
import CTASection from '../../components/CTASection/CTASection';
import './DiscoverHow.css';

const DiscoverHow = () => {
  const themeSettings = useThemeSettings();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="discover-how"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
        transition: 'background-color 0.3s ease, color 0.3s ease',
        minHeight: 'calc(100vh - 60px)', // Ensure page fills the height minus the footer
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Align content and footer spacing
      }}
    >
      {/* Hero Section */}
      <div className="discover-hero">
        <h1 className="discover-title" data-aos="fade-up">
          Discover How We Innovate
        </h1>
        <p
          className="discover-subtitle"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At TechSaaS Vision, we turn your ideas into reality using
          cutting-edge technology and a customer-centric approach.
        </p>
      </div>

      {/* Innovation Areas */}
      <div className="innovation-areas">
        <InnovationArea
          title="Advanced Technology"
          description="We leverage the latest in AI, cloud computing, and more to bring your vision to life."
          animationDirection="fade-right"
        />
        <InnovationArea
          title="Customer-Centric Approach"
          description="Our focus is on you—every decision we make is centered around delivering the best experience for your customers."
          animationDirection="fade-left"
        />
        <InnovationArea
          title="Innovation at Every Step"
          description="From ideation to deployment, we continuously innovate to ensure your product stands out in the market."
          animationDirection="fade-right"
        />
      </div>

      {/* Call to Action Section */}
      <CTASection
        title="Want to Learn More?"
        description="Explore how we can help your business thrive in the digital age."
        buttonText="Explore Our Services"
        buttonAction="/services"
        themeSettings={themeSettings}
      />
    </div>
  );
};

export default DiscoverHow;
