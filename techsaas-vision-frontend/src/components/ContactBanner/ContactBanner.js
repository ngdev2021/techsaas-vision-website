import './ContactBanner.css';
import ContactFormModal from '../ContactFormModal/ContactFormModal';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import { useState } from 'react';
import { ReactComponent as ContactIcon } from '../../assets/icons/connect-icon.svg';

const ContactBanner = () => {
  const themeSettings = useThemeSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className="contact-banner"
      style={{
        backgroundImage: `linear-gradient(120deg, ${themeSettings.colors.accent}, ${themeSettings.colors.secondary})`,
        color: themeSettings.colors.textOnAccent,
      }}
    >
      <div className="contact-banner-content">
        <ContactIcon className="contact-icon" />
        <div className="contact-text">
          <h2>Have a Project in Mind?</h2>
          <p>Let's work together to bring your ideas to life.</p>
          <button className="cta-button" onClick={handleModalOpen}>
            Contact Me
          </button>
        </div>
      </div>
      {isModalOpen && <ContactFormModal onClose={handleModalClose} />}
    </section>
  );
};

export default ContactBanner;
