import './Modal.css';
import { useState } from 'react';

const Modal = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [selectedTier, setSelectedTier] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedTier) {
      onSubmit(name, selectedTier);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome!</h2>
        <p>
          Please enter your name and select a service tier to get
          started.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Your Service Tier
            </option>
            <option value="Freshman">Freshman</option>
            <option value="Prime Time">Prime Time</option>
            <option value="Mogul">Mogul</option>
            <option value="Legendary">Legendary</option>
          </select>
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
