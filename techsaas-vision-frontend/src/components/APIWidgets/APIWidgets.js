import React, { useState } from 'react';
import { useThemeSettings } from '../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import CustomCard from '../cards/CustomCard/CustomCard';
import './APIWidgets.css';

const APIWidgets = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const themeSettings = useThemeSettings();
  const apiKey = '2eaf366e4ec243d68c034719242308';

  const fetchWeather = (location = 'dallas') => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  };

  const determineBackgroundClass = (isDay, condition) => {
    if (isDay) {
      if (condition.includes('Sunny')) return 'sunny-day-background';
      if (condition.includes('Cloudy'))
        return 'cloudy-day-background';
      if (condition.includes('Rain')) return 'rainy-day-background';
      return 'default-day-background';
    } else {
      if (condition.includes('Clear'))
        return 'clear-night-background';
      if (condition.includes('Cloudy'))
        return 'cloudy-night-background';
      if (condition.includes('Rain')) return 'rainy-night-background';
      return 'default-night-background';
    }
  };

  return (
    <div
      className={`api-widgets ${
        weather
          ? determineBackgroundClass(
              weather.current.is_day,
              weather.current.condition.text
            )
          : ''
      }`}
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
        Weather in Fort Worth
      </h2>
      <div className="location-selector">
        <input
          type="text"
          placeholder="Enter ZIP code"
          className="zip-input"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              fetchWeather(e.target.value);
            }
          }}
        />
        <button
          onClick={() => fetchWeather('new york')}
          className="fetch-button"
          style={{
            backgroundColor: themeSettings.colors.accent,
            color: themeSettings.colors.textOnAccent,
          }}
        >
          Get Weather
        </button>
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : weather ? (
        <div className="weather-info">
          <div className="current-weather">
            <CustomCard
              title="Current Conditions"
              description={`${weather.current.temp_f}°F, ${weather.current.condition.text}`}
              imageSrc={''}
              details={[
                `Wind: ${weather.current.wind_mph} mph`,
                `Humidity: ${weather.current.humidity}%`,
              ]}
            />
          </div>

          <div className="forecast">
            <h3>7-Day Forecast</h3>
            <div className="forecast-container">
              {weather.forecast.forecastday.map((day, index) => (
                <CustomCard
                  key={index}
                  title={day.date}
                  description={`${day.day.maxtemp_f}°F / ${day.day.mintemp_f}°F`}
                  imageSrc={day.day.condition.icon}
                  details={[day.day.condition.text]}
                  className="forecast-card"
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default APIWidgets;
