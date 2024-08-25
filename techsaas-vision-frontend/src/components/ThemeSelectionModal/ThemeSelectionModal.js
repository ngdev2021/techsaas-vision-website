import './ThemeSelectionModal.css';

const ThemeSelectionModal = ({ setTheme }) => {
  // Define the available themes with their display labels
  const themes = [
    { value: 'default', label: 'Default' },
    { value: 'monopoly', label: 'Monopoly' },
    { value: 'foodie', label: 'Foodie' },
    { value: 'mafia', label: 'Mafia' },
    { value: 'drugGame', label: 'Drug Game' },
    { value: 'adultEntertainment', label: 'Adult Entertainment' },
    { value: 'foodieInfluencer', label: 'Foodie Influencer' },
    {
      value: 'socialMediaInfluencer',
      label: 'Social Media Influencer',
    },
  ];

  // Handle theme selection
  const handleThemeSelection = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="theme-selection-modal">
      <h2>Select Your Theme</h2>
      <div className="theme-options">
        {themes.map((theme) => (
          <button
            key={theme.value} // Use `value` as the unique key
            onClick={() => handleThemeSelection(theme.value)}
            className="theme-button"
          >
            {theme.label} {/* Display the theme label */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelectionModal;