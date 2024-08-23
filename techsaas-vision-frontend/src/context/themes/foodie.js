import { ReactComponent as RecipeIcon } from '../../assets/icons/recipe-icon.svg';
import { ReactComponent as RestaurantIcon } from '../../assets/icons/restaurant-icon.svg';
import { ReactComponent as DeliveryIcon } from '../../assets/icons/delivery-icon.svg';

const foodieTheme = {
  id: 4,
  name: 'Foodie',
  colors: {
    primary: '#ff5722',
    secondary: '#ff9800',
    background: '#fff8e1',
    text: '#6d4c41',
    accent: '#ff7043',
  },
  typography: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '22px',
    borderRadius: '14px',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: RecipeIcon,
      },
      {
        title: 'Restaurant Websites',
        description:
          'Beautiful, appetizing websites for your restaurant or food business.',
        metric: '500+ Restaurant Sites Built',
        IconComponent: RestaurantIcon,
      },
      {
        title: 'Food Delivery Platforms',
        description:
          'We develop platforms that deliver your food to the world.',
        metric: '200+ Delivery Apps Launched',
        IconComponent: DeliveryIcon,
      },
    ],
  },
};
export default foodieTheme;
