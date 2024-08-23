import { ReactComponent as RecipeBlogIcon } from '../../assets/icons/recipe-blog-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram-icon.svg';
import { ReactComponent as MerchIcon } from '../../assets/icons/merch-icon.svg';

const foodieInfluencerTheme = {
  id: 9,
  name: 'Foodie Influencer',
  colors: {
    primary: '#ff6347',
    secondary: '#ff4500',
    background: '#fff5e1',
    text: '#4b0082',
    accent: '#ff4500',
  },
  typography: {
    fontFamily: "'Lora', serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '24px',
    borderRadius: '14px',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: RecipeBlogIcon,
      },
      {
        title: 'Instagram-Worthy Websites',
        description:
          'Picture-perfect websites that attract followers like honey.',
        metric: '800+ Instagram-Worthy Sites Built',
        IconComponent: InstagramIcon,
      },
      {
        title: 'Branded Merch Stores',
        description:
          'Sell your merch with platforms that are as hot as your recipes.',
        metric: '500+ Merch Stores Created',
        IconComponent: MerchIcon,
      },
    ],
  },
};
export default foodieInfluencerTheme;
