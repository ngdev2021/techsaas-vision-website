import './Services.css';

const Services = ({ theme }) => {
  const getServicesContent = () => {
    switch (theme) {
      case 'Mafia':
        return {
          title: 'Services to Protect and Expand',
          description:
            'We make sure your digital empire remains untouchable.',
        };
      case 'Drug Game':
        return {
          title: 'Your Digital Supply Chain',
          description:
            'We provide the goods that keep your operation running.',
        };
      case 'Adult Entertainment':
        return {
          title: 'Entertain Your Audience',
          description:
            'Services designed to keep your audience coming back for more.',
        };
      case 'Monopoly':
        return {
          title: 'Control the Board',
          description:
            'Strategic services to help you dominate your industry.',
        };
      case 'Foodie Influencer':
        return {
          title: 'Serving Up Solutions',
          description:
            'Delicious digital services tailored to your needs.',
        };
      case 'Social Media Influencer':
        return {
          title: 'Boost Your Brand',
          description:
            'Let’s make your brand the next big thing online.',
        };
      default:
        return {
          title: 'Our Services',
          description:
            'Explore our innovative and scalable web development and SaaS solutions.',
        };
    }
  };

  const { title, description } = getServicesContent();

  return (
    <section
      className={`services ${theme.toLowerCase()}`}
      data-aos="fade-up"
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Services;