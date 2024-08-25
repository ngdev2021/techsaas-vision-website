import './FooterCTA.css';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import { useState } from 'react';

const FooterCTA = () => {
  const themeSettings = useThemeSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="footer-cta"
      style={{
        backgroundColor: themeSettings.colors.accent,
        color: themeSettings.colors.textOnAccent,
      }}
    >
      <h2>Ready to get started?</h2>
      <p>Sign up today to take your business to the next level.</p>
      <button className="cta-button" onClick={handleModalOpen}>
        Get Started
      </button>
      {isModalOpen && <SignupFormModal onClose={handleModalClose} />}
    </div>
  );
};

export default FooterCTA;
