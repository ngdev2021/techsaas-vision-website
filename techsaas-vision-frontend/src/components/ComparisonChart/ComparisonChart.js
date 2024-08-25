import React from 'react';
import './ComparisonChart.css';
import Button from '../Button/Button';
import Tooltip from '../Tooltip/Tooltip';

const comparisonData = [
  {
    feature: 'Responsive Design',
    freshman: 'Yes',
    primeTime: 'Yes',
    mogul: 'Yes',
    legendary: 'Yes',
  },
  {
    feature: 'Custom Pages',
    freshman: '3 Pages',
    primeTime: '10 Pages',
    mogul: '20+ Pages',
    legendary: 'Fully Custom',
  },
  {
    feature: 'E-Commerce',
    freshman: 'No',
    primeTime: 'Basic',
    mogul: 'Advanced',
    legendary: 'Enterprise',
  },
  {
    feature: 'SEO Optimization',
    freshman: 'Basic',
    primeTime: 'On-Page',
    mogul: 'Advanced',
    legendary: 'Full Service',
  },
  {
    feature: 'Support',
    freshman: 'Limited',
    primeTime: 'Standard',
    mogul: 'Ongoing',
    legendary: 'Dedicated',
  },
];

const ComparisonChart = ({ onSelectTier, themeSettings }) => {
  return (
    <div
      className="comparison-chart"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <h3 style={{ color: themeSettings.colors.text }}>
        Compare Our Packages
      </h3>
      <table>
        <thead>
          <tr>
            <th style={{ color: themeSettings.colors.text }}>
              Features
            </th>
            <th style={{ color: themeSettings.colors.text }}>
              Freshman
              <Tooltip text="Starter level services, ideal for beginners." />
            </th>
            <th style={{ color: themeSettings.colors.text }}>
              Prime Time
              <Tooltip text="Mid-tier services for growing businesses." />
            </th>
            <th style={{ color: themeSettings.colors.text }}>
              Mogul
              <Tooltip text="Advanced services for established businesses." />
            </th>
            <th style={{ color: themeSettings.colors.text }}>
              Legendary
              <Tooltip text="Elite services for industry leaders." />
            </th>
          </tr>
          <tr className="button-row">
            <th></th> {/* Empty cell for alignment */}
            <th>
              <Button
                onClick={() => onSelectTier('Freshman')}
                label="Choose"
                style={{
                  backgroundColor:
                    themeSettings.colors.buttonBackground,
                  color: themeSettings.colors.buttonText,
                  borderColor: themeSettings.colors.buttonBorderColor,
                }}
              />
            </th>
            <th>
              <Button
                onClick={() => onSelectTier('Prime Time')}
                label="Choose"
                style={{
                  backgroundColor:
                    themeSettings.colors.buttonBackground,
                  color: themeSettings.colors.buttonText,
                  borderColor: themeSettings.colors.buttonBorderColor,
                }}
              />
            </th>
            <th>
              <Button
                onClick={() => onSelectTier('Mogul')}
                label="Choose"
                style={{
                  backgroundColor:
                    themeSettings.colors.buttonBackground,
                  color: themeSettings.colors.buttonText,
                  borderColor: themeSettings.colors.buttonBorderColor,
                }}
              />
            </th>
            <th>
              <Button
                onClick={() => onSelectTier('Freshman')}
                label="Choose"
                style={{
                  backgroundColor:
                    themeSettings.colors.buttonBackground ||
                    '#007bff',
                  color: themeSettings.colors.buttonText || '#ffffff',
                  borderColor:
                    themeSettings.colors.buttonBorderColor ||
                    '#0056b3',
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index}>
              <td style={{ color: themeSettings.colors.text }}>
                {row.feature}
              </td>
              <td style={{ color: themeSettings.colors.text }}>
                {row.freshman}
              </td>
              <td style={{ color: themeSettings.colors.text }}>
                {row.primeTime}
              </td>
              <td style={{ color: themeSettings.colors.text }}>
                {row.mogul}
              </td>
              <td style={{ color: themeSettings.colors.text }}>
                {row.legendary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonChart;
