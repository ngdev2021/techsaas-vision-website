import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = ({ theme }) => {
  return (
    <div className={`portfolio-page ${theme.toLowerCase()}`}>
      <h1 data-aos="fade-up">Our Portfolio</h1>
      {theme === 'Mafia' && (
        <p data-aos="fade-left" className="mafia-theme">
          The hits we’ve made for other businesses.
        </p>
      )}
      {theme === 'Drug Game' && (
        <p data-aos="fade-right" className="drug-game-theme">
          The product that keeps our clients coming back.
        </p>
      )}
      {theme === 'Adult Entertainment' && (
        <p data-aos="fade-left" className="adult-theme">
          Our work will keep you hooked.
        </p>
      )}
      {theme === 'Monopoly' && (
        <p data-aos="fade-right" className="monopoly-theme">
          Dominating the digital board one project at a time.
        </p>
      )}
      {theme === 'Foodie Influencer' && (
        <p data-aos="fade-left" className="foodie-theme">
          A taste of our finest digital dishes.
        </p>
      )}
      {theme === 'Social Media Influencer' && (
        <p data-aos="fade-right" className="social-influencer-theme">
          Our portfolio will make your brand go viral.
        </p>
      )}
    </div>
  );
};

export default PortfolioPage;
