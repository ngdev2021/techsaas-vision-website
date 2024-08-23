import React, { Suspense } from 'react';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import './ServiceCard.css';

const ServiceCard = ({
  title,
  description,
  metric,
  IconComponent,
}) => {
  const { colors, typography, layout } = useThemeSettings();

  return (
    <div
      className="service-card"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.accent,
        padding: layout.spacing,
        borderRadius: layout.borderRadius,
      }}
    >
      <Suspense fallback={<div>Loading Icon...</div>}>
        <IconComponent />
      </Suspense>
      <h3 style={{ color: colors.primary }}>{title}</h3>
      <p style={{ fontSize: typography.fontSize }}>{description}</p>
      <span style={{ color: colors.secondary }}>{metric}</span>
    </div>
  );
};

export default ServiceCard;
