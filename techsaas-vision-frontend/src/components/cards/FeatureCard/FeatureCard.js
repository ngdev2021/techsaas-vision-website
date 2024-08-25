import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ title, description, IconComponent }) => {
  return (
    <div className="feature-card">
      <div className="icon-container">
        <IconComponent className="feature-icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
