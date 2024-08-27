import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import {
  getLastChosenTier,
  saveLastChosenTier,
} from '../../../utils/helpers/localStorageUtils';
import { servicesData } from '../../../data/servicesData/servicesData';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import ComparisonChart from '../../../components/ComparisonChart/ComparisonChart';
import TierSection from '../../../components/TierSection/TierSection';

import './ServicesPage.css';

const ServicesPage = () => {
  const themeSettings = useThemeSettings();
  const [selectedTier, setSelectedTier] = useState(
    getLastChosenTier()
  );
  const servicesOverviewRef = useRef(null); // Create a ref for the services section

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredServicesData = servicesData.find(
    (tierData) => tierData.tier === selectedTier
  );

  const handleTierSelection = (tier) => {
    setSelectedTier(tier);
    saveLastChosenTier(tier);

    // Scroll to the services section
    servicesOverviewRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="services-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
        marginBottom: '2rem', // Ensure margin at the bottom
      }}
    >
      <SectionHeader
        title={`Services for ${selectedTier}`}
        subtitle={`Explore the best packages tailored for ${selectedTier}`}
        themeSettings={themeSettings}
      />
      <div className="comparison-chart-wrapper">
        <ComparisonChart
          selectedTier={selectedTier}
          onSelectTier={handleTierSelection}
          themeSettings={themeSettings}
        />
      </div>
      <div
        ref={servicesOverviewRef} // Reference for the scroll
        className="services-overview"
      >
        <TierSection
          tier={filteredServicesData.tier}
          services={filteredServicesData.services}
          themeSettings={themeSettings}
        />
      </div>
    </div>
  );
};

export default ServicesPage;
