import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import IconContainer from '../IconContainer/IconContainer';
import './FeatureHighlight.css';

const features = [
  {
    icon: 'digital-transformation-icon',
    title: 'Digital Transformation',
    description:
      'Transform your business with cutting-edge technology.',
  },
  {
    icon: 'enterprise-web-icon',
    title: 'Enterprise Solutions',
    description: 'Scalable solutions designed for enterprise growth.',
  },
  {
    icon: 'seo-icon',
    title: 'SEO Optimization',
    description:
      'Rank higher and reach more customers with our SEO strategies.',
  },
];

const FeatureHighlight = () => (
  <div className="feature-highlight">
    <SectionHeader title="Why Choose TechSaaS Vision?" />
    <div className="feature-grid">
      {features.map((feature, index) => (
        <IconContainer
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
);

export default FeatureHighlight;
