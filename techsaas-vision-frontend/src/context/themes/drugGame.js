// import svg icons using ReactComponent as and assign them to variables from ../../assets/icons/
import { ReactComponent as TrapIcon } from '../../assets/icons/trap-icon.svg';
import { ReactComponent as DistributionIcon } from '../../assets/icons/distribution-icon.svg';
import { ReactComponent as ConnectIcon } from '../../assets/icons/connect-icon.svg';

const drugGameTheme = {
  id: 6,
  name: 'Drug',
  colors: {
    primary: '#000000',
    secondary: '#1e90ff',
    background: '#f5f5f5',
    text: '#1c1c1c',
    accent: '#ff4500',
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '18px',
    borderRadius: '10px',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: TrapIcon,
      },
      {
        title: 'Distribution Platforms',
        description:
          'Move your product efficiently with our top-tier digital tools.',
        metric: '400+ Products Distributed',
        IconComponent: DistributionIcon,
      },
      {
        title: 'Connect Consulting',
        description:
          'We’ll connect you with the right digital strategies.',
        metric: '200+ Successful Connections',
        IconComponent: ConnectIcon,
      },
    ],
  },
};
export default drugGameTheme;
