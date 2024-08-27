import React, { useState } from 'react';
import './URLInputForm.css';

const URLInputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      onSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-input-form">
      <input
        type="text"
        placeholder="Enter your website URL (e.g., www.example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="url-input"
      />
      <button type="submit" className="generate-ad-button">
        Generate Ad
      </button>
    </form>
  );
};

export default URLInputForm;
