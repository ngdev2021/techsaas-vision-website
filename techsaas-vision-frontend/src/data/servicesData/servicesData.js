import { ReactComponent as WebDevelopmentIcon } from '../../assets/icons/web-development-icon.svg';
import { ReactComponent as LandingPageIcon } from '../../assets/icons/landing-page-icon.svg';
import { ReactComponent as SeoIcon } from '../../assets/icons/seo-icon.svg';
import { ReactComponent as EcommerceIcon } from '../../assets/icons/ecommerce-icon.svg';
import { ReactComponent as AdvancedLandingPageIcon } from '../../assets/icons/advanced-landing-page-icon.svg';
import { ReactComponent as WebAppIcon } from '../../assets/icons/web-app-icon.svg';
import { ReactComponent as EnterpriseWebIcon } from '../../assets/icons/enterprise-web-icon.svg';
import { ReactComponent as SaasIcon } from '../../assets/icons/saas-icon.svg';
import { ReactComponent as DigitalTransformationIcon } from '../../assets/icons/digital-transformation-icon.svg';

import { assignRelativeBadges } from '../../utils/badgeUtils';

export const servicesData = [
  {
    tier: 'Freshman',
    services: assignRelativeBadges([
      {
        title: 'Starter Pack',
        description:
          'Basic website package including up to 3 custom pages, responsive design, and SEO-friendly structure. Ideal for startups and small businesses.',
        details: [
          'Responsive design for desktop and mobile',
          'Up to 3 custom pages',
          'Basic contact form',
          'SEO-friendly structure',
          '1 round of revisions',
        ],
        price: '$1,200',
        IconComponent: WebDevelopmentIcon,
      },
      {
        title: 'On the Come Up',
        description:
          'Single-page landing site optimized for conversions, including form capture and basic animations.',
        details: [
          'Conversion-focused design',
          'Form integration with email capture',
          'Basic on-page SEO',
          '1 round of revisions',
        ],
        price: '$900',
        IconComponent: LandingPageIcon,
      },
      {
        title: 'Kickstart',
        description:
          'On-page SEO optimization and submission to Google Search Console to enhance your site’s visibility.',
        details: [
          'Keyword research and implementation',
          'Meta tag creation',
          'Google Search Console submission',
          'Basic website audit report',
        ],
        price: '$600',
        IconComponent: SeoIcon,
      },
      {
        title: 'Breakthrough',
        description:
          'Basic branding and content strategy to establish your business identity.',
        details: [
          'Logo design',
          'Basic brand guidelines',
          'Initial content strategy',
          '1 round of revisions',
        ],
        price: '$800',
        IconComponent: SeoIcon,
      },
    ]),
  },
  {
    tier: 'Prime Time',
    services: assignRelativeBadges([
      {
        title: 'Grind Mode',
        description:
          '5-10 pages with CMS integration, basic e-commerce, and SEO optimization. Ideal for growing businesses.',
        details: [
          'Custom CMS integration (WordPress, Joomla)',
          'Up to 10 pages with content management',
          'Basic e-commerce functionality',
          'On-page SEO optimization',
          '3 rounds of revisions',
        ],
        price: '$5,000',
        IconComponent: EcommerceIcon,
      },
      {
        title: 'Level Up',
        description:
          'Optimized for conversions, this package includes CRM integration, advanced animations, and A/B testing setup.',
        details: [
          'High-conversion design',
          'CRM integration (Salesforce, HubSpot)',
          'Advanced animations and interactivity',
          'A/B testing setup',
          '3 rounds of revisions',
        ],
        price: '$3,500',
        IconComponent: AdvancedLandingPageIcon,
      },
      {
        title: 'Growth Spurt',
        description:
          'Full-stack web application with user authentication, admin dashboards, and API integrations.',
        details: [
          'Custom backend development (Node.js, Python)',
          'User authentication (OAuth, JWT)',
          'Admin and user dashboards',
          'Database integration (MongoDB, MySQL)',
          'API integrations',
        ],
        price: '$6,500',
        IconComponent: WebAppIcon,
      },
      {
        title: 'Next Up',
        description:
          'Advanced marketing strategy with automation and analytics tracking.',
        details: [
          'Marketing automation setup',
          'Advanced analytics tracking',
          'Email marketing integration',
          '2 rounds of revisions',
        ],
        price: '$5,500',
        IconComponent: SeoIcon,
      },
    ]),
  },
  {
    tier: 'Mogul',
    services: assignRelativeBadges([
      {
        title: 'Boss Moves',
        description:
          '20+ pages with fully customized design, advanced e-commerce, and ongoing SEO. Perfect for established businesses.',
        details: [
          'Fully customized design and UX',
          'Advanced e-commerce platform (Shopify, WooCommerce)',
          '20+ pages with content management',
          'Advanced on-page and technical SEO',
          'Ongoing maintenance and support',
        ],
        price: '$17,000',
        IconComponent: EnterpriseWebIcon,
      },
      {
        title: 'Empire State',
        description:
          'Full-featured SaaS platform with API integration, multi-tenant architecture, and advanced user roles.',
        details: [
          'Custom SaaS platform development',
          'API integration with third-party services',
          'Advanced user role management',
          'Multi-tenant architecture',
          'Ongoing support and feature updates',
        ],
        price: '$22,000+',
        IconComponent: SaasIcon,
      },
      {
        title: 'Heavyweight',
        description:
          'Comprehensive business process automation including cloud solutions and ongoing consulting.',
        details: [
          'Business process analysis and optimization',
          'Automation of key business functions',
          'Implementation of cloud solutions (AWS, Azure)',
          'Employee training and support',
          'Ongoing consulting and maintenance',
        ],
        price: '$28,000+',
        IconComponent: DigitalTransformationIcon,
      },
      {
        title: 'The Big League',
        description:
          'Enterprise-grade content and brand strategy, including multi-channel marketing and ongoing updates.',
        details: [
          'Enterprise-level content strategy',
          'Brand management and guidelines',
          'Multi-channel marketing',
          'Ongoing content updates',
        ],
        price: '$32,000+',
        IconComponent: SeoIcon,
      },
    ]),
  },
  {
    tier: 'Legendary',
    services: assignRelativeBadges([
      {
        title: 'Hall of Fame',
        description:
          'End-to-end digital transformation with custom SaaS, AI integration, and enterprise cloud infrastructure.',
        details: [
          'Fully integrated digital ecosystem',
          'Custom SaaS solutions',
          'Advanced AI-driven automation',
          'Enterprise-grade cloud infrastructure',
          'Dedicated support team',
        ],
        price: '$55,000+',
        IconComponent: DigitalTransformationIcon,
      },
      {
        title: 'Iconic',
        description:
          'AI solutions for smarter operations including custom AI models and ongoing optimization.',
        details: [
          'Custom AI models',
          'Process automation with AI',
          'AI-driven decision-making',
          'Ongoing model training and optimization',
          'Dedicated AI support',
        ],
        price: '$65,000+',
        IconComponent: DigitalTransformationIcon,
      },
      {
        title: 'Mastermind',
        description:
          'Blockchain technology integration for secure, transparent, and automated operations.',
        details: [
          'Custom blockchain solutions',
          'Smart contract development',
          'Secure and transparent transactions',
          'Ongoing blockchain maintenance',
          'Dedicated blockchain support team',
        ],
        price: '$80,000+',
        IconComponent: DigitalTransformationIcon,
      },
      {
        title: 'The Crown',
        description:
          'Exclusive digital experience for industry leaders, with personalized strategy and premium content.',
        details: [
          'Personalized digital strategy',
          'Exclusive features and integrations',
          'Premium content and design',
          'Dedicated innovation team',
        ],
        price: '$105,000+',
        IconComponent: DigitalTransformationIcon,
      },
    ]),
  },
];
