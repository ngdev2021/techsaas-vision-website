#!/bin/bash

# Create themes directory if it doesn't exist
mkdir -p src/context/themes

# Array of theme names
themes=("defaultTheme" "monopolyTheme" "foodieTheme" "mafiaTheme" "drugGameTheme" "adultEntertainmentTheme" "foodieInfluencerTheme" "socialMediaInfluencerTheme")

# Function to create theme file
create_theme_file() {
  theme_name=$1
  file_name="src/context/themes/$theme_name.js"

  cat <<EOL > $file_name
import { ReactComponent as Icon1 } from '../assets/icons/icon1.svg';
import { ReactComponent as Icon2 } from '../assets/icons/icon2.svg';
import { ReactComponent as Icon3 } from '../assets/icons/icon3.svg';

const $theme_name = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    background: '#f0f0f0',
    text: '#333333',
    accent: '#ff0000',
  },
  typography: {
    fontFamily: "'Arial', sans-serif",
    fontSize: '16px',
  },
  layout: {
    spacing: '16px',
    borderRadius: '8px',
  },
  content: {
    heroTitle: 'Hero Title for $theme_name',
    heroDescription: 'Hero description for $theme_name.',
    services: [
      {
        title: 'Service 1',
        description: 'Service 1 description.',
        metric: '100+ projects completed',
        IconComponent: Icon1,
      },
      {
        title: 'Service 2',
        description: 'Service 2 description.',
        metric: '200+ clients served',
        IconComponent: Icon2,
      },
      {
        title: 'Service 3',
        description: 'Service 3 description.',
        metric: '300+ satisfied customers',
        IconComponent: Icon3,
      },
    ],
  },
};

export default $theme_name;
EOL

  echo "$theme_name file created successfully."
}

# Loop through each theme and create the file
for theme in "\${themes[@]}"; do
  create_theme_file "\$theme"
done

# Create themeSettings.js file
cat <<EOL > src/context/themes/themeSettings.js
import defaultTheme from './defaultTheme';
import monopolyTheme from './monopolyTheme';
import foodieTheme from './foodieTheme';
import mafiaTheme from './mafiaTheme';
import drugGameTheme from './drugGameTheme';
import adultEntertainmentTheme from './adultEntertainmentTheme';
import foodieInfluencerTheme from './foodieInfluencerTheme';
import socialMediaInfluencerTheme from './socialMediaInfluencerTheme';

const themeSettings = {
  default: defaultTheme,
  monopoly: monopolyTheme,
  foodie: foodieTheme,
  mafia: mafiaTheme,
  drugGame: drugGameTheme,
  adultEntertainment: adultEntertainmentTheme,
  foodieInfluencer: foodieInfluencerTheme,
  socialMediaInfluencer: socialMediaInfluencerTheme,
};

export default themeSettings;
EOL

echo "themeSettings.js file created successfully."
