import ServiceCard from '../cards/ServiceCard/ServiceCard';
import './ServiceOverview.css';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';

const ServiceOverview = () => {
  const { content } = useThemeSettings();

  return (
    <div className="service-overview">
      <div className="service-columns">
        {content.services.map((service, index) => (
          <div className="service-column" key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
              metric={service.metric}
              IconComponent={service.IconComponent}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;
