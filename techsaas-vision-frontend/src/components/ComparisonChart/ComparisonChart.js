import React, { useState } from 'react';
import './ComparisonChart.css';
import Button from '../Button/Button';

const comparisonData = [
  {
    tier: 'Freshman',
    description: 'Starter level services, ideal for beginners.',
    features: [
      { feature: 'Responsive Design', available: 'Yes' },
      { feature: 'Custom Pages', available: '3 Pages' },
      { feature: 'E-Commerce', available: 'No' },
      { feature: 'SEO Optimization', available: 'Basic' },
      { feature: 'Support', available: 'Limited' },
    ],
  },
  {
    tier: 'Prime Time',
    description: 'Mid-tier services for growing businesses.',
    features: [
      { feature: 'Responsive Design', available: 'Yes' },
      { feature: 'Custom Pages', available: '10 Pages' },
      { feature: 'E-Commerce', available: 'Basic' },
      { feature: 'SEO Optimization', available: 'On-Page' },
      { feature: 'Support', available: 'Standard' },
    ],
  },
  {
    tier: 'Mogul',
    description: 'Advanced services for established businesses.',
    features: [
      { feature: 'Responsive Design', available: 'Yes' },
      { feature: 'Custom Pages', available: '20+ Pages' },
      { feature: 'E-Commerce', available: 'Advanced' },
      { feature: 'SEO Optimization', available: 'Advanced' },
      { feature: 'Support', available: 'Ongoing' },
    ],
  },
  {
    tier: 'Legendary',
    description: 'Elite services for industry leaders.',
    features: [
      { feature: 'Responsive Design', available: 'Yes' },
      { feature: 'Custom Pages', available: 'Fully Custom' },
      { feature: 'E-Commerce', available: 'Enterprise' },
      { feature: 'SEO Optimization', available: 'Full Service' },
      { feature: 'Support', available: 'Dedicated' },
    ],
  },
];

const ComparisonChart = ({ onSelectTier, themeSettings }) => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (tier) => {
    setOpenCard(openCard === tier ? null : tier);
  };

  return (
    <>
      {/* Desktop/Tablet View - Table */}
      <div
        className="comparison-chart"
        style={{ backgroundColor: themeSettings.colors.background }}
      >
        <h3 className="comparison-title">Compare Our Packages</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              {comparisonData.map((tier) => (
                <th key={tier.tier}>{tier.tier}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonData[0].features.map((feature, rowIndex) => (
              <tr key={rowIndex}>
                <td>{feature.feature}</td>
                {comparisonData.map((tier, colIndex) => (
                  <td key={colIndex}>
                    {tier.features[rowIndex].available}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td></td> {/* Empty cell for alignment */}
              {comparisonData.map((tier, index) => (
                <td key={index}>
                  <Button
                    onClick={() => onSelectTier(tier.tier)}
                    label="Choose"
                    style={{
                      backgroundColor:
                        themeSettings.colors.buttonBackground,
                      color: themeSettings.colors.buttonText,
                      borderColor:
                        themeSettings.colors.buttonBorderColor,
                    }}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile View - Accordion */}
      <div className="comparison-accordion">
        {comparisonData.map((tierData, index) => (
          <div key={index} className="accordion-card">
            <div
              className="accordion-header"
              onClick={() => toggleCard(tierData.tier)}
              style={{
                backgroundColor: themeSettings.colors.primary,
              }}
            >
              {tierData.tier}
              <svg
                className={openCard === tierData.tier ? 'rotate' : ''}
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5z"></path>
              </svg>
            </div>
            <div
              className={`accordion-content ${
                openCard === tierData.tier ? 'open' : ''
              }`}
            >
              <p>{tierData.description}</p>
              <ul>
                {tierData.features.map((feature, i) => (
                  <li key={i}>
                    <strong>{feature.feature}:</strong>{' '}
                    {feature.available}
                  </li>
                ))}
              </ul>
              <div className="accordion-footer">
                <Button
                  onClick={() => onSelectTier(tierData.tier)}
                  label="Choose"
                  style={{
                    backgroundColor:
                      themeSettings.colors.buttonBackground,
                    color: themeSettings.colors.buttonText,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ComparisonChart;
