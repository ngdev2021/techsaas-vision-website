const fs = require('fs');
const path = require('path');

// Define the preferred structure with component directories
const preferredStructure = {
  'components/common': ['Button', 'Tooltip'],
  'components/forms': [
    'ContactFormModal',
    'SignupFormModal',
    'TierSelectionModal',
  ],
  'components/modals': [
    'ConfirmationModal',
    'UserModal',
    'WelcomeModal',
  ],
  'components/sections': [
    'HeroSection',
    'Testimonials',
    'ServiceOverview',
    'ComparisonChart',
    'FeatureHighlight',
  ],
  'components/cards': [
    'FeatureCard',
    'ServiceCard',
    'TestimonialCard',
  ],
  'components/layout': ['Navigation', 'FooterCTA'],
  'context/theme': ['ThemeContext', 'ThemeSettingsContext'],
  'context/user': ['AuthContext', 'UserContext'],
  'assets/fonts': [],
  'assets/icons': [
    'advanced-landing-page-icon.svg',
    'boardwalk-icon.svg',
    'bronze-icon.svg',
  ],
  'assets/images': [],
  'assets/videos': ['logovideo.mp4'],
  'data/servicesData': ['servicesData.js'],
  'data/themeContent': ['themeContent.js'],
  hooks: ['useAnalytics.js', 'useAuth.js', 'useTheme.js'],
  'pages/AboutPage': ['AboutPage'],
  'pages/ContactPage': ['ContactPage'],
  'pages/HomePage': ['HomePage'],
  'pages/PortfolioPage': ['PortfolioPage'],
  'pages/ServicesPage': ['ServicesPage'],
  'pages/TestimonialsPage': ['TestimonialsPage'],
  'pages/UserDashboard': ['UserDashboard'],
  'styles/components': [],
  'styles/global': [],
  'styles/layout': [],
  'styles/themes': [],
  'utils/api': [],
  'utils/helpers': ['localStorageUtils.js'],
  'utils/security': [],
  'utils/validation': [],
  'widgets/calculators': [
    'BasicCalculator',
    'LoanCalculator',
    'MortgageCalculator',
    'TipCalculator',
    'InvestorDealCalculator',
  ],
  'widgets/crypto': ['CryptoPricesWidget', 'CryptoWidget'],
  'widgets/otherWidgets': [
    'NearbyFinder',
    'NewsWidget',
    'RealEstateFinder',
  ],
  PostLaunch: ['PostLaunch'],
};

// Function to ensure a directory exists
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  }
}

// Function to move files into component directories
function moveFilesToComponentDirectory(rootDir, componentName) {
  const componentDir = path.join(rootDir, componentName);
  ensureDirectoryExists(componentDir);

  const fileExtensions = ['js', 'css', 'test.js'];
  fileExtensions.forEach((ext) => {
    const oldFilePath = path.join(rootDir, `${componentName}.${ext}`);
    const newFilePath = path.join(
      componentDir,
      `${componentName}.${ext}`
    );

    if (fs.existsSync(oldFilePath)) {
      fs.renameSync(oldFilePath, newFilePath);
      console.log(`Moved: ${oldFilePath} -> ${newFilePath}`);
    }
  });
}

// Function to organize files according to the preferred structure
function organizeFiles(rootDir, structure) {
  for (const [dir, components] of Object.entries(structure)) {
    const dirPath = path.join(rootDir, dir);
    ensureDirectoryExists(dirPath);

    components.forEach((componentName) => {
      moveFilesToComponentDirectory(dirPath, componentName);
    });
  }
}

// Define the root directory of your project (where 'src' is located)
const rootDirectory = path.join(__dirname, 'src');

// Organize files in the root directory
organizeFiles(rootDirectory, preferredStructure);

console.log(
  'Project structure has been organized into component directories.'
);
