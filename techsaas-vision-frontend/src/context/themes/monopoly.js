import { ReactComponent as BoardwalkIcon } from '../../assets/icons/boardwalk-icon.svg';
import { ReactComponent as RealEstateIcon } from '../../assets/icons/real-estate-icon.svg';
import { ReactComponent as StrategyIcon } from '../../assets/icons/strategy-icon.svg';

const monopolyTheme = {
  id: 8,
  name: 'Monopoly',
  colors: {
    primary: '#2b2b2b',
    secondary: '#f7d14b',
    background: '#f4f4f4',
    text: '#333333',
    accent: '#c62828',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '20px',
    borderRadius: '10px',
    gridTemplateColumns: 'repeat(3, 1fr)',
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
        IconComponent: BoardwalkIcon,
      },
      {
        title: 'Real Estate SaaS',
        description:
          'Manage your properties with our advanced SaaS tools.',
        metric: '400+ Real Estate Solutions Delivered',
        IconComponent: RealEstateIcon,
      },
      {
        title: 'Game Strategy Consulting',
        description:
          'We help you strategize to acquire your competitors.',
        metric: '350+ Businesses Monopolized',
        IconComponent: StrategyIcon,
      },
    ],
  },
};
export default monopolyTheme;
