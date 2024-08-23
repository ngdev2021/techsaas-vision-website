import { ReactComponent as WebDevelopmentIcon } from '../../assets/icons/web-development-icon.svg';
import { ReactComponent as SaasIcon } from '../../assets/icons/saas-icon.svg';
import { ReactComponent as EcommerceIcon } from '../../assets/icons/ecommerce-icon.svg';

const defaultTheme = {
  id: 1,
  name: 'Default',
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
        IconComponent: WebDevelopmentIcon,
      },
      {
        title: 'SaaS Solutions',
        description:
          'Streamline your operations with our cutting-edge SaaS tools.',
        metric: '100+ SaaS Applications Launched',
        IconComponent: SaasIcon,
      },
      {
        title: 'E-Commerce Development',
        description:
          'Powerful online stores that boost your sales and growth.',
        metric: '250+ E-Commerce Sites Built',
        IconComponent: EcommerceIcon,
      },
    ],
  },
};

export default defaultTheme;
