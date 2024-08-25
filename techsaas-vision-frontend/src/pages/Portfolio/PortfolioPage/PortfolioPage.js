import React from 'react';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import './PortfolioPage.css';

import FeaturedProjects from '../../../components/FeaturedProjects/FeaturedProjects';
import SkillsShowcase from '../../../components/SkillsShowcase/SkillsShowcase';
import APIWidgets from '../../../components/APIWidgets/APIWidgets';
import CalculatorWidget from '../../../widgets/CalculatorWidget';
import CryptoPricesWidget from '../../../widgets/CryptoPricesWidget';
import ContactBanner from '../../../components/ContactBanner/ContactBanner';
// Dummy projects data

const dummyProjects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce application with a custom shopping cart and checkout system.',
    technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
    image: '/path/to/ecommerce-image.jpg',
    link: 'https://example.com/ecommerce',
  },
  {
    title: 'Social Media App',
    description:
      'A scalable social media platform featuring real-time updates, messaging, and media sharing.',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    image: '/path/to/socialmedia-image.jpg',
    link: 'https://example.com/socialmedia',
  },
  // Add more projects
];

const PortfolioPage = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="portfolio-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      {/* Featured Projects Section */}

      {/* Contact Banner */}
      <section className="contact-banner-section" data-aos="fade-up">
        <ContactBanner />
      </section>

      {/* <section
        className="featured-projects-section"
        data-aos="fade-up"
      >
        <h2 className="section-title">Featured Projects</h2>
        <FeaturedProjects projects={dummyProjects} />
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

      {/* Real Estate Finder Section
      <section
        className="real-estate-finder-section"
        data-aos="fade-up"
      >
        <h2 className="section-title">Real Estate Finder</h2>
        <RealEstateFinder />
      </section> */}

      {/* Calculator Widget Section */}
      <section
        className="calculator-widget-section"
        data-aos="fade-up"
      >
        <h2 className="section-title">Calculator</h2>
        <CalculatorWidget />
      </section>

      {/* Nearby Finder Section
      <section className="nearby-finder-section" data-aos="fade-up">
        <h2 className="section-title">Nearby Restaurants & Stores</h2>
        <NearbyFinder />
      </section> */}

      {/* Crypto Prices Section */}
      {/* <section className="crypto-prices-section" data-aos="fade-up">
        <h2 className="section-title">Crypto Prices</h2>
        <CryptoPricesWidget />
      </section> */}
    </div>
  );
};

export default PortfolioPage;
