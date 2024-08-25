import './CryptoPricesWidget.css';
import { useState, useEffect } from 'react';
import { useThemeSettings } from '../context/theme/ThemeSettingsContext/ThemeSettingsContext';

const CryptoPricesWidget = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [error, setError] = useState(null);
  const themeSettings = useThemeSettings();

  const apiKey = '8723E008-E928-4B3A-9DE8-FCB5173968BF';

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const fetchCryptoPrices = () => {
    fetch(
      `https://rest.coinapi.io/v1/exchangerate/BTC/USD?apikey=${apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => setCryptoPrices([data]))
      .catch((error) => setError(error.message));
  };

  return (
    <div
      className="crypto-prices-widget"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      <h2
        style={{
          color: themeSettings.colors.accent,
          borderBottom: `2px solid ${themeSettings.colors.accent}`,
        }}
      >
        Crypto Prices
      </h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="crypto-list">
          {cryptoPrices.map((crypto, index) => (
            <div
              key={index}
              className="crypto-item"
              style={{
                backgroundColor:
                  themeSettings.colors.secondaryBackground,
              }}
            >
              <p>
                {crypto.asset_id_base}/{crypto.asset_id_quote}
              </p>
              <p>Price: {crypto.rate}</p>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={fetchCryptoPrices}
        className="refresh-button"
        style={{
          backgroundColor: themeSettings.colors.accent,
          color: themeSettings.colors.textOnAccent,
        }}
      >
        Refresh Prices
      </button>
    </div>
  );
};

export default CryptoPricesWidget;
