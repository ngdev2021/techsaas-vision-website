import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({
  title,
  description,
  IconComponent,
  price,
  details = [],
  badgeName,
}) => {
  return (
    <div className="service-card">
      <div className="ribbon-badge">
        <span>{badgeName}</span>
      </div>
      <div className="icon-container">
        <IconComponent className="service-icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="details-list">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      {price && <p className="price">Starting at {price}</p>}
    </div>
  );
};

export default ServiceCard;
