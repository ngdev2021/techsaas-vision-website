// import svg icons using ReactComponent as and assign them to variables from ../../assets/icons/icon-name-icon.svg
import { ReactComponent as UnderworldIcon } from '../../assets/icons/underworld-icon.svg';
import { ReactComponent as ProtectionIcon } from '../../assets/icons/protection-icon.svg';
import { ReactComponent as ConsigliereIcon } from '../../assets/icons/consigliere-icon.svg';

const mafiaTheme = {
  id: 7,
  name: 'Mafia',
  colors: {
    primary: '#111111',
    secondary: '#8b0000',
    background: '#f4f4f4',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: UnderworldIcon,
      },
      {
        title: 'Protection SaaS Solutions',
        description:
          'Keep your online assets safe with our digital protection services.',
        metric: '500+ Businesses Secured',
        IconComponent: ProtectionIcon,
      },
      {
        title: 'Consigliere Consulting',
        description:
          'Strategic advice to take your operations to the next level.',
        metric: '300+ Clients Advised',
        IconComponent: ConsigliereIcon,
      },
    ],
  },
};
export default mafiaTheme;
