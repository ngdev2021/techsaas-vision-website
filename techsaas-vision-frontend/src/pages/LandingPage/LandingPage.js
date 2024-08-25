import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import backgroundVideo from '../../assets/videos/logovideo.mp4';
import './LandingPage.css';
import SEO from '../../components/SEO/Seo';

const LandingPage = () => {
  return (
    <>
      <SEO title="TechSaaS Vision - Empowering Your Business" />
      <div className="landing-page">
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
        <div className="overlay"></div>
        <div className="content">
          <HeroSection
            title="Empower Your Business with TechSaaS Vision"
            subtitle="Innovative, Scalable, and Secure Solutions to Drive Your Success"
            ctaButton={
              <button className="cta-button">Get Started</button>
            }
            overlayOpacity={0.3} // Adjusted for lighter overlay on large screens
            buttonBackground="var(--accent-color)" // Ensure button matches theme
          />
        </div>
        <FooterCTA />
      </div>
    </>
  );
};

export default LandingPage;
