import React from 'react';
import './InnovationArea.css';

const InnovationArea = ({
  title,
  description,
  animationDirection,
}) => {
  return (
    <div className="area" data-aos={animationDirection}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default InnovationArea;
