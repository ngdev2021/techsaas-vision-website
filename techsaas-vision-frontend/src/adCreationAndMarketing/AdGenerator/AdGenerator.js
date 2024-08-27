import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdGenerator.css';
import AdCarousel from '../AdCarousel/AdCarousel';

const AdGenerator = ({ url }) => {
  const [adText, setAdText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [adType, setAdType] = useState('promotional');
  const [tone, setTone] = useState('neutral');
  const [showPreview, setShowPreview] = useState(false);
  const [theme, setTheme] = useState({
    primaryGradient: '#FF7E5F',
    secondaryGradient: '#43C6AC',
    accentGradient: '#B06AB3',
    primaryText: '#FFFFFF',
    secondaryText: '#333333',
  });

  const [title, setTitle] = useState(''); // New state for title
  const [description, setDescription] = useState(''); // New state for description

  // Fetch metadata for title and description
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/fetch-metadata',
          { url }
        );
        setTitle(response.data.title || 'Default Title');
        setDescription(
          response.data.description || 'Default Description'
        );
      } catch (error) {
        console.error('Error fetching metadata:', error);
        setTitle('Default Title');
        setDescription('Default Description');
      }
    };
    fetchMetadata();
  }, [url]);

  const generateAdPreview = async () => {
    setLoading(true);

    let formattedUrl = url;
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/api/ad/preview',
        {
          title,
          description,
          adType,
          tone,
          url: formattedUrl,
        }
      );

      setAdText(response.data.adText);
      setQrCodeUrl(response.data.qrCodeUrl);
      setShowPreview(true);
    } catch (error) {
      console.error('Error generating ad preview:', error);
      setAdText(
        'Sorry, we could not generate a preview for this URL.'
      );
    }

    setLoading(false);
  };

  const saveAd = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/ad/generate',
        {
          title,
          description,
          adType,
          tone,
          url,
          primaryColor: theme.primaryGradient,
          secondaryColor: theme.secondaryGradient,
          accentColor: theme.accentGradient,
        }
      );

      console.log('Ad saved:', response.data);
      alert('Ad successfully saved and added to the carousel!');
    } catch (error) {
      console.error('Error saving ad:', error);
      alert('Failed to save the ad. Please try again.');
    }
  };

  const handleThemeChange = (colorField, value) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [colorField]: value,
    }));
  };

  return (
    <div className="ad-generator-container">
      <h2>Ad Generator</h2>
      <h2>Ad Preview</h2>
      <div className="controls">
        <label htmlFor="adType">Choose Ad Type: </label>
        <select
          id="adType"
          value={adType}
          onChange={(e) => setAdType(e.target.value)}
        >
          <option value="promotional">Promotional</option>
          <option value="testimonial">Testimonial</option>
          <option value="featureHighlight">Feature Highlight</option>
        </select>

        <label htmlFor="tone">Choose Tone: </label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="neutral">Neutral</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="persuasive">Persuasive</option>
        </select>
      </div>

      <div className="theme-controls">
        <label>Primary Gradient: </label>
        <input
          type="color"
          value={theme.primaryGradient}
          onChange={(e) =>
            handleThemeChange('primaryGradient', e.target.value)
          }
        />
        <label>Secondary Gradient: </label>
        <input
          type="color"
          value={theme.secondaryGradient}
          onChange={(e) =>
            handleThemeChange('secondaryGradient', e.target.value)
          }
        />
        <label>Accent Gradient: </label>
        <input
          type="color"
          value={theme.accentGradient}
          onChange={(e) =>
            handleThemeChange('accentGradient', e.target.value)
          }
        />
      </div>

      <button onClick={generateAdPreview} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Preview'}
      </button>

      {showPreview && (
        <div
          className="ad-preview"
          style={{ background: theme.primaryGradient }}
        >
          <p style={{ color: theme.primaryText }}>{adText}</p>
          <img src={qrCodeUrl} alt="QR Code" />
          <button onClick={saveAd}>Save Ad</button>
        </div>
      )}
    </div>
  );
};

export default AdGenerator;
