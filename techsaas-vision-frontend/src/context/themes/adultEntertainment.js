import { ReactComponent as EntertainmentIcon } from '../../assets/icons/entertainment-icon.svg';
import { ReactComponent as MembershipIcon } from '../../assets/icons/membership-icon.svg';
import { ReactComponent as MonetizationIcon } from '../../assets/icons/monetization-icon.svg';

const adultEntertainmentTheme = {
  id: 5,
  name: 'Adult Entertainment',
  colors: {
    primary: '#ff1493',
    secondary: '#ff69b4',
    background: '#fdf5e6',
    text: '#4b0082',
    accent: '#ff6347',
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '20px',
    borderRadius: '15px',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: EntertainmentIcon,
      },
      {
        title: 'Membership Platforms',
        description:
          'Turn up the heat with exclusive membership sites.',
        metric: '300+ Membership Sites Launched',
        IconComponent: MembershipIcon,
      },
      {
        title: 'Content Monetization',
        description:
          'Maximize your revenue with our digital monetization tools.',
        metric: '200+ Clients Profited',
        IconComponent: MonetizationIcon,
      },
    ],
  },
};
export default adultEntertainmentTheme;
