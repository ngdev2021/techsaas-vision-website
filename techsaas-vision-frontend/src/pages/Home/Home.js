import React, { useEffect } from 'react';
import { useThemeSettings } from '../../context/ThemeSettingsContext';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServiceOverview from '../../components/ServiceOverview/ServiceOverview';
import Testimonials from '../../components/Testimonials/Testimonials';
import FooterCTA from '../../components/FooterCTA/FooterCTA';
import './Home.css';

const Home = () => {
  const themeSettings = useThemeSettings();

  const dummyTestimonials = [
    {
      text: 'TechSaas Vision transformed our online presence. Their expertise and professionalism are unmatched.',
      author: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      text: "Outstanding service and incredible results. I can't recommend them enough!",
      author: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      text: 'Their innovative approach helped us reach new heights. A true game-changer for our business.',
      author: 'Emily Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      text: 'Top-notch solutions that delivered beyond our expectations. We are thrilled with the results.',
      author: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      text: 'The team at TechSaas Vision goes above and beyond to ensure client satisfaction. Highly recommended!',
      author: 'Sarah Williams',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      text: 'Their creativity and attention to detail are exceptional. Our website has never looked better!',
      author: 'David Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      text: 'A seamless experience from start to finish. TechSaas Vision truly understands their clients’ needs.',
      author: 'Jessica Davis',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      text: 'Their tech solutions have helped us scale our business efficiently. A fantastic team to work with.',
      author: 'Robert Martinez',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      text: 'Innovative, reliable, and efficient—TechSaas Vision has been a game-changer for our digital strategy.',
      author: 'Laura Garcia',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      text: 'I was impressed by their dedication and commitment to delivering outstanding results.',
      author: 'James Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
  ];

  useEffect(() => {
    // Initialize animations or other effects if needed
  }, []);

  if (!themeSettings || !themeSettings.content) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="home-page"
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
        fontFamily: themeSettings.typography.fontFamily,
      }}
    >
      <HeroSection
        title="Empowering Your Business with Visionary Tech Solutions"
        description="We provide innovative, scalable web development and SaaS solutions."
        align="center" // Or 'left' or 'right'
        buttons={[
          { label: 'Get Started', href: '/get-started' },
          { label: 'Learn More', href: '/learn-more' },
        ]}
      />
      <ServiceOverview services={themeSettings.content.services} />
      <Testimonials testimonials={dummyTestimonials} />;
      <FooterCTA />
    </div>
  );
};

export default Home;
