import './SignupFormModal.css';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import { useState } from 'react';

const SignupFormModal = ({ onClose }) => {
  const themeSettings = useThemeSettings();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to the backend)
    onClose(); // Close the modal after submission
  };

  const services = [
    'Custom Web Development',
    'SaaS Solutions',
    'E-Commerce Development',
    'UI/UX Design',
    'SEO Optimization',
    'Digital Marketing',
    'Mobile App Development',
    'Consulting Services',
  ];

  return (
    <div className="signup-modal-overlay">
      <div
        className="signup-modal-content"
        style={{
          backgroundColor: themeSettings.colors.background,
          color: themeSettings.colors.text,
        }}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            style={{
              backgroundColor:
                themeSettings.colors.secondaryBackground,
              color: themeSettings.colors.text,
            }}
          >
            <option value="" disabled>
              Select your interest
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="submit-button"
            style={{
              backgroundColor: themeSettings.colors.accent,
              color: themeSettings.colors.textOnAccent,
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupFormModal;
