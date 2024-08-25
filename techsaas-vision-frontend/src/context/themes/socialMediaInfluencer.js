// import svg icons using ReactComponent as and assign them to variables from ../../assets/icons/icon-name-icon.svg
import { ReactComponent as PersonalBrandIcon } from '../../assets/icons/personal-brand-icon.svg';
import { ReactComponent as ContentCreationIcon } from '../../assets/icons/content-creation-icon.svg';
import { ReactComponent as EngagementIcon } from '../../assets/icons/engagement-icon.svg';

const socialMediaInfluencerTheme = {
  id: 10,
  name: 'Social Media Influencer',
  colors: {
    primary: '#1e90ff',
    secondary: '#ff4500',
    background: '#ffffff',
    text: '#333333',
    accent: '#ff6347',
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: '18px',
  },
  layout: {
    spacing: '22px',
    borderRadius: '12px',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
        IconComponent: PersonalBrandIcon,
      },
      {
        title: 'Content Creation Tools',
        description:
          'Tools that make creating and sharing content a breeze.',
        metric: '700+ Creators Equipped',
        IconComponent: ContentCreationIcon,
      },
      {
        title: 'Follower Engagement Platforms',
        description:
          'Engage with your followers like never before with our platforms.',
        metric: '900+ Influencers Empowered',
        IconComponent: EngagementIcon,
      },
    ],
  },
};
export default socialMediaInfluencerTheme;
