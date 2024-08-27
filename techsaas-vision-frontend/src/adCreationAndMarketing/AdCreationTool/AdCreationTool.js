import React, { useState } from 'react';
import AdGenerator from '../AdGenerator/AdGenerator';
import URLInputForm from '../URLInputForm/URLInputForm';
import AdCarousel from '../AdCarousel/AdCarousel';
import './AdCreationTool.css';

const AdCreationTool = () => {
  const [url, setUrl] = useState('');
  const [ads, setAds] = useState([]);

  const handleUrlSubmit = async (submittedUrl) => {
    setUrl(submittedUrl);

    // Fetch and set ads from the backend
    const response = await fetch('/api/ad/ads');
    const data = await response.json();
    setAds(data);
  };

  return (
    <div className="container">
      <header>
        <h1>Website Ad Generator</h1>
        <p>
          Create custom ads for your business and showcase them in a
          carousel.
        </p>
      </header>

      <URLInputForm onSubmit={handleUrlSubmit} />

      {url && <AdGenerator url={url} />}
      {ads.length > 0 && <AdCarousel ads={ads} />}
    </div>
  );
};

export default AdCreationTool;
