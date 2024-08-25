import React from 'react';
import './CustomCard.css';

const CustomCard = ({
  title,
  description,
  IconComponent,
  imageSrc,
  details = [],
  price,
  badgeName,
  buttonText,
  onButtonClick,
  children, // For more flexibility, allow children components to be passed
}) => {
  return (
    <div className="custom-card">
      {/* Ribbon Badge */}
      {badgeName && (
        <div className="ribbon-badge">
          <span>{badgeName}</span>
        </div>
      )}

      {/* Icon or Image */}
      {IconComponent ? (
        <div className="icon-container">
          <IconComponent className="custom-card-icon" />
        </div>
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="custom-card-image"
        />
      ) : null}

      {/* Title */}
      {title && <h3>{title}</h3>}

      {/* Description */}
      {description && <p>{description}</p>}

      {/* Details */}
      {details.length > 0 && (
        <ul className="details-list">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}

      {/* Price */}
      {price && <p className="price">Starting at {price}</p>}

      {/* Button */}
      {buttonText && (
        <button className="cta-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}

      {/* Additional content */}
      {children}
    </div>
  );
};

export default CustomCard;
