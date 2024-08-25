import './RealEstateFinder.css';

const RealEstateFinder = () => {
  const [address, setAddress] = useState('');
  const [data, setData] = useState(null);
  const themeSettings = useThemeSettings();

  const handleSearch = async () => {
    const result = {
      homeValue: '$450,000',
      rentalRate: '$2,500/month',
    };
    setData(result);
  };

  return (
    <div
      className="real-estate-finder"
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
        Real Estate Finder
      </h3>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
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
        Find Home Value
      </button>
      {data && (
        <div className="result">
          <p>Home Value: {data.homeValue}</p>
          <p>Rental Rate: {data.rentalRate}</p>
        </div>
      )}
    </div>
  );
};

export default RealEstateFinder;