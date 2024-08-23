const fs = require('fs');
const path = require('path');

// Define the themes and their corresponding configurations
const themes = {
  defaultTheme: {
    colors: {
      primary: '#0066cc',
      secondary: '#004f99',
      background: '#ffffff',
      text: '#333333',
      accent: '#ff6600',
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
      heroTitle:
        'Empowering Your Business with Visionary Tech Solutions',
      heroDescription:
        'We provide innovative, scalable web development and SaaS solutions.',
      services: [
        {
          title: 'Custom Web Development',
          description:
            'We build responsive, scalable websites tailored to your business needs.',
          metric: '500+ Projects Delivered',
          IconComponent: 'WebDevelopmentIcon',
        },
        {
          title: 'SaaS Solutions',
          description:
            'Streamline your operations with our cutting-edge SaaS tools.',
          metric: '100+ SaaS Applications Launched',
          IconComponent: 'SaasIcon',
        },
        {
          title: 'E-Commerce Development',
          description:
            'Powerful online stores that boost your sales and growth.',
          metric: '250+ E-Commerce Sites Built',
          IconComponent: 'EcommerceIcon',
        },
      ],
    },
  },
  monopoly: {
    colors: {
      primary: '#2b2b2b',
      secondary: '#f7d14b',
      background: '#f4f4f4',
      text: '#333333',
      accent: '#d4380d',
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '18px',
    },
    layout: {
      spacing: '20px',
      borderRadius: '10px',
    },
    content: {
      heroTitle: 'Monopolizing the Digital Market',
      heroDescription:
        'We help you dominate your industry with strategic web solutions.',
      services: [
        {
          title: 'Boardwalk Websites',
          description:
            'Premium websites that put you on the top of the digital game.',
          metric: '600+ Boardwalk Sites Built',
          IconComponent: 'BoardwalkIcon',
        },
        {
          title: 'Real Estate SaaS',
          description:
            'Manage your properties with our advanced SaaS tools.',
          metric: '400+ Real Estate Solutions Delivered',
          IconComponent: 'RealEstateIcon',
        },
        {
          title: 'Game Strategy Consulting',
          description:
            'We help you strategize to acquire your competitors.',
          metric: '350+ Businesses Monopolized',
          IconComponent: 'StrategyIcon',
        },
      ],
    },
  },
  foodie: {
    colors: {
      primary: '#ff5722',
      secondary: '#ff9800',
      background: '#fff8e1',
      text: '#6d4c41',
      accent: '#ff7043',
    },
    typography: {
      fontFamily: "'Pacifico', cursive",
      fontSize: '18px',
    },
    layout: {
      spacing: '20px',
      borderRadius: '12px',
    },
    content: {
      heroTitle: 'Serving Up Delicious Digital Solutions',
      heroDescription:
        'We create mouth-watering websites and applications for your business.',
      services: [
        {
          title: 'Custom Recipe Websites',
          description:
            'We craft tasty websites that showcase your best recipes.',
          metric: '1000+ Recipes Launched',
          IconComponent: 'RecipeIcon',
        },
        {
          title: 'Restaurant Websites',
          description:
            'Beautiful, appetizing websites for your restaurant or food business.',
          metric: '500+ Restaurant Sites Built',
          IconComponent: 'RestaurantIcon',
        },
        {
          title: 'Food Delivery Platforms',
          description:
            'We develop platforms that deliver your food to the world.',
          metric: '200+ Delivery Apps Launched',
          IconComponent: 'DeliveryIcon',
        },
      ],
    },
  },
  mafia: {
    colors: {
      primary: '#1b1b1b',
      secondary: '#8b0000',
      background: '#f2f2f2',
      text: '#1b1b1b',
      accent: '#d4af37',
    },
    typography: {
      fontFamily: "'Cinzel', serif",
      fontSize: '18px',
    },
    layout: {
      spacing: '18px',
      borderRadius: '10px',
    },
    content: {
      heroTitle: 'Making Offers You Can’t Refuse in Web Development',
      heroDescription:
        'Our digital solutions dominate the competition, capisce?',
      services: [
        {
          title: 'Underworld Web Development',
          description:
            'Sites as sharp as a stiletto, tailored for your family business.',
          metric: '1000+ Family Businesses Empowered',
          IconComponent: 'UnderworldIcon',
        },
        {
          title: 'Protection SaaS Solutions',
          description:
            'Keep your online assets safe with our digital protection services.',
          metric: '500+ Businesses Secured',
          IconComponent: 'ProtectionIcon',
        },
        {
          title: 'Consigliere Consulting',
          description:
            'Strategic advice to take your operations to the next level.',
          metric: '300+ Clients Advised',
          IconComponent: 'ConsigliereIcon',
        },
      ],
    },
  },
  drugGame: {
    colors: {
      primary: '#000000',
      secondary: '#1e90ff',
      background: '#f5f5f5',
      text: '#1c1c1c',
      accent: '#ff4500',
    },
    typography: {
      fontFamily: "'Bebas Neue', cursive",
      fontSize: '18px',
    },
    layout: {
      spacing: '18px',
      borderRadius: '10px',
    },
    content: {
      heroTitle: 'Dominating the Digital Street Game',
      heroDescription:
        'We supply the most potent digital solutions in the market.',
      services: [
        {
          title: 'Trap House Websites',
          description:
            'Get your online hustle on with sleek, fast websites.',
          metric: '800+ Hustlers Served',
          IconComponent: 'TrapIcon',
        },
        {
          title: 'Distribution Platforms',
          description:
            'Move your product efficiently with our top-tier digital tools.',
          metric: '400+ Products Distributed',
          IconComponent: 'DistributionIcon',
        },
        {
          title: 'Connect Consulting',
          description:
            'We’ll connect you with the right digital strategies.',
          metric: '200+ Successful Connections',
          IconComponent: 'ConnectIcon',
        },
      ],
    },
  },
  adultEntertainment: {
    colors: {
      primary: '#ff1493',
      secondary: '#ff69b4',
      background: '#fdf5e6',
      text: '#4b0082',
      accent: '#ff6347',
    },
    typography: {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '18px',
    },
    layout: {
      spacing: '20px',
      borderRadius: '15px',
    },
    content: {
      heroTitle: 'Seductive Digital Solutions',
      heroDescription:
        'We create irresistible websites and apps that keep them coming back.',
      services: [
        {
          title: 'Entertainment Portals',
          description:
            'Create captivating platforms that keep your audience engaged.',
          metric: '500+ Portals Built',
          IconComponent: 'EntertainmentIcon',
        },
        {
          title: 'Membership Platforms',
          description:
            'Turn up the heat with exclusive membership sites.',
          metric: '300+ Membership Sites Launched',
          IconComponent: 'MembershipIcon',
        },
        {
          title: 'Content Monetization',
          description:
            'Maximize your revenue with our digital monetization tools.',
          metric: '200+ Clients Profited',
          IconComponent: 'MonetizationIcon',
        },
      ],
    },
  },
  foodieInfluencer: {
    colors: {
      primary: '#ffa07a',
      secondary: '#ff4500',
      background: '#ffe4b5',
      text: '#8b4513',
      accent: '#d2691e',
    },
    typography: {
      fontFamily: "'Lobster', cursive",
      fontSize: '18px',
    },
    layout: {
      spacing: '22px',
      borderRadius: '12px',
    },
    content: {
      heroTitle: 'Serving Content That’s Always in Season',
      heroDescription:
        'We create tasteful websites and apps that make your brand sizzle.',
      services: [
        {
          title: 'Recipe Blogs',
          description:
            'We cook up tasty blogs that make your content stand out.',
          metric: '700+ Blogs Launched',
          IconComponent: 'RecipeBlogIcon',
        },
        {
          title: 'Instagram-Worthy Websites',
          description:
            'Picture-perfect websites that attract followers like honey.',
          metric: '800+ Instagram-Worthy Sites Built',
          IconComponent: 'InstagramIcon',
        },
        {
          title: 'Branded Merch Stores',
          description:
            'Sell your merch with platforms that are as hot as your recipes.',
          metric: '500+ Merch Stores Created',
          IconComponent: 'MerchIcon',
        },
      ],
    },
  },
  socialMediaInfluencer: {
    colors: {
      primary: '#1e90ff',
      secondary: '#ff4500',
      background: '#ffffff',
      text: '#333333',
      accent: '#ff6347',
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: '18px',
    },
    layout: {
      spacing: '22px',
      borderRadius: '12px',
    },
    content: {
      heroTitle: 'Making You the Star of the Digital World',
      heroDescription:
        'We build platforms that amplify your voice and influence.',
      services: [
        {
          title: 'Personal Brand Websites',
          description:
            'Websites that reflect your personal brand and connect with your audience.',
          metric: '1000+ Personal Brands Enhanced',
          IconComponent: 'PersonalBrandIcon',
        },
        {
          title: 'Content Creation Tools',
          description:
            'Tools that make creating and sharing content a breeze.',
          metric: '700+ Creators Equipped',
          IconComponent: 'ContentCreationIcon',
        },
        {
          title: 'Follower Engagement Platforms',
          description:
            'Engage with your followers like never before with our platforms.',
          metric: '900+ Influencers Empowered',
          IconComponent: 'EngagementIcon',
        },
      ],
    },
  },
};

// Map the icon components to their import paths
const iconImports = {
  WebDevelopmentIcon: '../../assets/icons/web-development-icon.svg',
  SaasIcon: '../../assets/icons/saas-icon.svg',
  EcommerceIcon: '../../assets/icons/ecommerce-icon.svg',
  BoardwalkIcon: '../../assets/icons/boardwalk-icon.svg',
  RealEstateIcon: '../../assets/icons/real-estate-icon.svg',
  StrategyIcon: '../../assets/icons/strategy-icon.svg',
  RecipeIcon: '../../assets/icons/recipe-icon.svg',
  RestaurantIcon: '../../assets/icons/restaurant-icon.svg',
  DeliveryIcon: '../../assets/icons/delivery-icon.svg',
  UnderworldIcon: '../../assets/icons/underworld-icon.svg',
  ProtectionIcon: '../../assets/icons/protection-icon.svg',
  ConsigliereIcon: '../../assets/icons/consigliere-icon.svg',
  TrapIcon: '../../assets/icons/trap-icon.svg',
  DistributionIcon: '../../assets/icons/distribution-icon.svg',
  ConnectIcon: '../../assets/icons/connect-icon.svg',
  EntertainmentIcon: '../../assets/icons/entertainment-icon.svg',
  MembershipIcon: '../../assets/icons/membership-icon.svg',
  MonetizationIcon: '../../assets/icons/monetization-icon.svg',
  RecipeBlogIcon: '../../assets/icons/recipe-blog-icon.svg',
  InstagramIcon: '../../assets/icons/instagram-icon.svg',
  MerchIcon: '../../assets/icons/merch-icon.svg',
  PersonalBrandIcon: '../../assets/icons/personal-brand-icon.svg',
  ContentCreationIcon: '../../assets/icons/content-creation-icon.svg',
  EngagementIcon: '../../assets/icons/engagement-icon.svg',
};

// Ensure the themes directory exists
const themesDir = path.join(__dirname, 'src', 'context', 'themes');
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

// Function to create each theme file
const createThemeFile = (themeName, themeConfig) => {
  const fileName = `${themeName}.js`;
  const filePath = path.join(themesDir, fileName);

  // Collect relevant icon imports
  const usedIcons = new Set();
  themeConfig.content.services.forEach((service) => {
    if (service.IconComponent) {
      usedIcons.add(service.IconComponent);
    }
  });

  // Generate the import statements dynamically
  const importStatements = Array.from(usedIcons)
    .map(
      (iconName) =>
        `import { ReactComponent as ${iconName} } from '${iconImports[iconName]}';`
    )
    .join('\n');

  // Generate the services array content dynamically, removing quotes from IconComponent
  const servicesArrayContent = themeConfig.content.services
    .map(
      (service) => `{
      title: '${service.title}',
      description: '${service.description}',
      metric: '${service.metric}',
      IconComponent: ${service.IconComponent},
    }`
    )
    .join(',\n');

  // Create the file content with imports and theme configuration
  const fileContent = `
${importStatements}

const ${themeName} = {
  colors: ${JSON.stringify(themeConfig.colors, null, 2)},
  typography: ${JSON.stringify(themeConfig.typography, null, 2)},
  layout: ${JSON.stringify(themeConfig.layout, null, 2)},
  content: {
    heroTitle: '${themeConfig.content.heroTitle}',
    heroDescription: '${themeConfig.content.heroDescription}',
    services: [
      ${servicesArrayContent}
    ],
  },
};

export default ${themeName};
  `;

  fs.writeFileSync(filePath, fileContent);
  console.log(`${fileName} created successfully.`);
};

// Create theme files for each theme
Object.keys(themes).forEach((themeName) => {
  createThemeFile(themeName, themes[themeName]);
});

// Create the themeSettings.js file that imports all the themes
const themeSettingsFileContent = `
import defaultTheme from './defaultTheme';
import monopoly from './monopoly';
// Add additional theme imports as needed...

const themeSettings = {
  default: defaultTheme,
  monopoly: monopoly,
  // Add additional themes as needed...
};

export default themeSettings;
`;

fs.writeFileSync(
  path.join(themesDir, 'themeSettings.js'),
  themeSettingsFileContent
);
console.log('themeSettings.js created successfully.');
