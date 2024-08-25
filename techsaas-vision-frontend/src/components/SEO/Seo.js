import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta
      name="description"
      content={
        description ||
        'TechSaaS Vision - Empowering Your Business with Innovative, Scalable, and Secure Solutions'
      }
    />
    <meta
      name="keywords"
      content={
        keywords ||
        'TechSaaS, web development, SaaS solutions, scalable solutions, secure applications'
      }
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://techsaasvision.com/" />
    <meta property="og:title" content={title} />
    <meta
      property="og:description"
      content={
        description ||
        'TechSaaS Vision - Empowering Your Business with Innovative, Scalable, and Secure Solutions'
      }
    />
    <meta property="og:url" content="https://techsaasvision.com/" />
  </Helmet>
);

export default SEO;
