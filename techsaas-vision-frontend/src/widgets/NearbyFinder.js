import './NearbyFinder.css';

const NearbyFinder = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const themeSettings = useThemeSettings();

  const handleSearch = async () => {
    const result = [
      { name: 'Pizza Place', type: 'Restaurant' },
      { name: 'Whole Foods', type: 'Grocery Store' },
    ];
    setResults(result);
  };

  return (
    <div
      className="nearby-finder"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      <h3
        style={{
          color: themeSettings.colors.accent,
          borderBottom: `2px solid ${themeSettings.colors.accent}`,
        }}
      >
        Nearby Restaurants & Grocery Stores
      </h3>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
        style={{
          backgroundColor: themeSettings.colors.secondaryBackground,
          color: themeSettings.colors.text,
        }}
      />
      <button
        onClick={handleSearch}
        className="search-button"
        style={{
          backgroundColor: themeSettings.colors.accent,
          color: themeSettings.colors.textOnAccent,
        }}
      >
        Find Nearby Places
      </button>
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((place, index) => (
            <li key={index}>
              {place.name} - {place.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NearbyFinder;