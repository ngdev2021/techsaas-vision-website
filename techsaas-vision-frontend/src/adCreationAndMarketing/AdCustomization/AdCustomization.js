import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const AdCustomization = ({ onThemeChange }) => {
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [secondaryColor, setSecondaryColor] = useState('#FFFFFF');
  const [accentColor, setAccentColor] = useState('#FF0000');

  const handleThemeChange = () => {
    onThemeChange({
      primaryColor,
      secondaryColor,
      accentColor,
    });
  };

  return (
    <div>
      <h3>Customize Your Ad</h3>
      <div>
        <label>Primary Color:</label>
        <ChromePicker
          color={primaryColor}
          onChangeComplete={(color) => setPrimaryColor(color.hex)}
        />
      </div>
      <div>
        <label>Secondary Color:</label>
        <ChromePicker
          color={secondaryColor}
          onChangeComplete={(color) => setSecondaryColor(color.hex)}
        />
      </div>
      <div>
        <label>Accent Color:</label>
        <ChromePicker
          color={accentColor}
          onChangeComplete={(color) => setAccentColor(color.hex)}
        />
      </div>
      <button onClick={handleThemeChange}>Apply Theme</button>
    </div>
  );
};

export default AdCustomization;
