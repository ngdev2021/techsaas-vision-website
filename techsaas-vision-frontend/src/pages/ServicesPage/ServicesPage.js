import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import { useThemeSettings } from '../../context/ThemeSettingsContext';

const ServicesPage = () => {
  const themeSettings = useThemeSettings();

  return (
    <div
      className="services-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      <SectionHeader
        title="Our Services"
        subtitle="Explore the wide range of services we offer."
      />
      <ServiceOverview />
    </div>
  );
};

export default ServicesPage;
