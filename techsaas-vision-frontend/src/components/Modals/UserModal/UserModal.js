import './Modal.css';

const UserModal = ({ onSave, onClose }) => {
  const [userName, setUserName] = useState('');
  const [selectedTier, setSelectedTier] = useState('');

  const handleSave = () => {
    onSave(userName, selectedTier);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Welcome! Personalize Your Experience</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <select
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
        >
          <option value="">Select Tier</option>
          <option value="Freshman">Freshman</option>
          <option value="Prime Time">Prime Time</option>
          <option value="Mogul">Mogul</option>
          <option value="Legendary">Legendary</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;