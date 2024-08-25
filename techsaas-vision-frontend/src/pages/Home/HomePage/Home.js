import React, { useEffect } from 'react';
import HeroSection from '../../../components/HeroSection/HeroSection';
import Testimonials from '../../../components/Testimonials/Testimonials';
import FooterCTA from '../../../components/FooterCTA/FooterCTA';
import Section from '../../../components/CustomSection/Section';
import { useThemeSettings } from '../../../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import AOS from 'aos';

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
      text: 'The team at TechSaas Vision is phenomenal. They delivered beyond our expectations.',
      author: 'Alice Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      text: 'Their innovative solutions have significantly boosted our business.',
      author: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      text: 'Professional, efficient, and highly skilled. TechSaas Vision is the best!',
      author: 'Emily Davis',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      text: 'We saw immediate results after partnering with TechSaas Vision.',
      author: 'Chris Wilson',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      text: 'Their customer service is top-notch. Highly recommend!',
      author: 'Sarah Miller',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      text: 'TechSaas Vision provided us with exceptional service and results.',
      author: 'David Martinez',
      avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      text: 'Their expertise in the field is unparalleled.',
      author: 'Laura Garcia',
      avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      text: 'We are extremely satisfied with the results from TechSaas Vision.',
      author: 'James Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      text: 'TechSaas Vision helped us achieve our business goals efficiently.',
      author: 'Linda Martinez',
      avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    {
      text: 'Their team is knowledgeable and very responsive.',
      author: 'Robert Hernandez',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      text: 'We highly recommend TechSaas Vision for their outstanding service.',
      author: 'Barbara Lopez',
      avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
    {
      text: 'Their innovative approach has greatly benefited our company.',
      author: 'William Gonzalez',
      avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
    {
      text: 'TechSaas Vision is a game-changer for our business.',
      author: 'Elizabeth Perez',
      avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
    {
      text: 'Their solutions are both effective and efficient.',
      author: 'Charles Thompson',
      avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    },
    {
      text: 'We are thrilled with the results from TechSaas Vision.',
      author: 'Patricia White',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    },
    {
      text: 'Their team is professional and highly skilled.',
      author: 'Joseph Harris',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    },
    {
      text: 'TechSaas Vision exceeded our expectations in every way.',
      author: 'Jennifer Clark',
      avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
    {
      text: 'We highly recommend TechSaas Vision for their exceptional service.',
      author: 'Thomas Lewis',
      avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    return () => {
      AOS.refresh();
    };
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
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      {/* Hero Section */}
      <HeroSection
        title="Empowering Your Business with Visionary Tech Solutions"
        subtitle="We provide innovative, scalable web development and SaaS solutions."
        align="center"
        buttonText="Check out our Services"
        buttonAction="/services"
      />

      {/* Why TechSaaS Vision Section */}
      <Section
        title="Your Partner in Innovation"
        content="At TechSaaS Vision, we're not just developers—we're your digital architects, crafting solutions that push boundaries and set you apart from the competition."
        buttonText="Discover How"
        buttonAction={() => console.log('Navigate to How')}
      />

      {/* Our Process Section */}
      <Section
        title="From Concept to Reality"
        content="We take your ideas and turn them into digital masterpieces. With a focus on collaboration and transparency, our process ensures that your vision is realized at every stage."
        buttonText="See Our Process"
        buttonAction={() => console.log('Navigate to Process')}
      />

      {/* Testimonials */}
      <Testimonials testimonials={dummyTestimonials} />

      {/* Client Success Stories Section */}
      <Section
        title="Success Speaks for Itself"
        content="Our clients' success is our greatest achievement. Hear from our clients and see how TechSaaS Vision has transformed their digital landscapes."
        buttonText="Read Testimonials"
        buttonAction={() => console.log('Navigate to Testimonials')}
      />

      {/* Footer CTA */}
      <FooterCTA />
    </div>
  );
};

export default Home;
