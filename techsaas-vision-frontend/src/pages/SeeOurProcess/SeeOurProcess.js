import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroSection from '../../components/HeroSection/HeroSection';
import Section from '../../components/CustomSection/Section';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';

import './SeeOurProcess.css';

const SeeOurProcess = () => {
  const themeSettings = useThemeSettings();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollDown = () => {
    // Scroll down by 500 pixels
    window.scrollBy({ top: 500, behavior: 'smooth' });
  };

  return (
    <div
      className="see-our-process"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
        transition: 'background-color 0.3s ease, color 0.3s ease',
        padding: '1rem',
      }}
    >
      {/* Hero Section */}
      <HeroSection
        title="Our Process"
        subtitle="From concept to reality, here's how we transform your vision into a digital masterpiece."
        align="center"
        overlayOpacity={0.6}
        buttonText="Learn More"
        buttonAction={scrollDown} // Scroll down by a certain amount when clicked
      />

      {/* Process Steps Section */}
      <Section
        title="Our Proven Process"
        content=""
        additionalContent={
          <div className="process-steps">
            <div className="step" data-aos="fade-up">
              <h3>1. Ideation</h3>
              <p>
                We start with your ideas and explore all possibilities
                to bring them to life.
              </p>
            </div>
            <div className="step" data-aos="fade-up">
              <h3>2. Design</h3>
              <p>
                Our design team crafts visually stunning and
                user-friendly interfaces that resonate with your
                audience.
              </p>
            </div>
            <div className="step" data-aos="fade-up">
              <h3>3. Development</h3>
              <p>
                We turn designs into reality using the latest
                technologies, ensuring your application is both robust
                and scalable.
              </p>
            </div>
            <div className="step" data-aos="fade-up">
              <h3>4. Deployment</h3>
              <p>
                Your product is deployed with precision, ensuring a
                seamless launch and ongoing support.
              </p>
            </div>
          </div>
        }
      />

      {/* CTA Section */}
      <Section
        title="Ready to Start?"
        content="Contact us today and let’s begin turning your ideas into reality!"
        buttonText="Get in Touch"
        buttonAction="/contact"
      />
    </div>
  );
};

export default SeeOurProcess;
