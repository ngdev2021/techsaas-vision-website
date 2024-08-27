import React from 'react';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import './PortfolioPage.css';
import FeaturedProjects from '../../../components/FeaturedProjects/FeaturedProjects';
import TestimonialsCarousel from '../../../components/TestimonialCarousel/TestimonialCarousel';
import SkillsShowcase from '../../../components/SkillsShowcase/SkillsShowcase';
import APIWidgets from '../../../components/APIWidgets/APIWidgets';
import CalculatorWidget from '../../../widgets/CalculatorWidget';
import ContactBanner from '../../../components/ContactBanner/ContactBanner';

const PortfolioPage = () => {
  const themeSettings = useThemeSettings();
  const testimonials = [
    {
      text: 'Reginald transformed our online presence!',
      author: 'Client A',
    },
    { text: 'Exceptional work and dedication.', author: 'Client B' },
    {
      text: 'A true visionary in web development.',
      author: 'Client C',
    },
  ];

  return (
    <div
      className="portfolio-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      {/* Introduction Section */}
      <section className="hero-section" data-aos="fade-in">
        <div className="hero-content">
          <h1>Reginald Brown</h1>
          <p>
            Creating scalable web development solutions that empower
            businesses.
          </p>
          <a href="#projects" className="cta-button">
            Explore My Work
          </a>
        </div>
      </section>

      {/* Skills Progress Section */}
      <section className="skills-progress" data-aos="fade-up">
        <h2>Skills & Expertise</h2>
        <div className="progress-bar">
          <span>React</span>
          <div className="progress" style={{ width: '90%' }}></div>
        </div>
        <div className="progress-bar">
          <span>Node.js</span>
          <div className="progress" style={{ width: '85%' }}></div>
        </div>
        <div className="progress-bar">
          <span>UI/UX Design</span>
          <div className="progress" style={{ width: '80%' }}></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials-carousel-section"
        data-aos="fade-up"
      >
        <h2>What Clients Say</h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>

      {/* Featured Projects Section */}
      {/* <section
        className="featured-projects-section"
        data-aos="fade-up"
      >
        <h2 className="section-title">Featured Projects</h2>
        <FeaturedProjects />
      </section> */}

      {/* Skills Showcase Section */}
      <section className="skills-showcase-section" data-aos="fade-up">
        <h2 className="section-title">Skills & Expertise</h2>
        <SkillsShowcase />
      </section>

      {/* API Widgets Section */}
      <section className="api-widgets-section" data-aos="fade-up">
        <h2 className="section-title">Interactive API Widgets</h2>
        <APIWidgets />
      </section>

      {/* Calculator Widget Section */}
      <section
        className="calculator-widget-section"
        data-aos="fade-up"
      >
        <h2 className="section-title">Calculator</h2>
        <CalculatorWidget />
      </section>

      {/* Contact Banner Section */}
      <section className="contact-banner-section" data-aos="fade-up">
        <ContactBanner />
      </section>
    </div>
  );
};

export default PortfolioPage;
