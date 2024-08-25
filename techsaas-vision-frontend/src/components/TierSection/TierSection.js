import ServiceCard from '../cards/ServiceCard/ServiceCard';
import './TierSection.css';

const TierSection = ({ tier, services, themeSettings }) => (
  <div
    className={`tier-section ${tier.toLowerCase().replace(' ', '-')}`}
  >
    <h3
      className="tier-title"
      style={{ color: themeSettings.colors.primary }}
    >
      {tier}
    </h3>
    <div className="service-cards">
      {services.map((service, serviceIndex) => (
        <ServiceCard
          key={serviceIndex}
          title={service.title}
          description={service.description}
          details={service.details}
          price={service.price}
          metric={service.metric}
          IconComponent={service.IconComponent}
          badgeName={service.badgeName} // Pass badge name to ServiceCard
          style={{
            color: themeSettings.colors.text,
            backgroundColor: themeSettings.colors.background,
          }} // Apply theme-based text color
        />
      ))}
    </div>
  </div>
);

export default TierSection;
