const fs = require('fs');
const path = require('path');

// Define the SVG content for each icon
const icons = {
  'advanced-landing-page-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" rx="15" fill="#6610f2"/>
      <rect x="20" y="20" width="60" height="10" rx="5" fill="#ffffff"/>
      <rect x="20" y="35" width="60" height="10" fill="#f8f9fa"/>
      <rect x="20" y="50" width="60" height="20" rx="5" fill="#343a40"/>
      <circle cx="50" cy="75" r="5" fill="#ffffff"/>
    </svg>
  `,
  'boardwalk-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="70" width="80" height="20" fill="#e0a800"/>
      <rect x="10" y="10" width="80" height="60" fill="#0069d9"/>
      <rect x="20" y="20" width="60" height="40" rx="5" fill="#ffffff"/>
      <path d="M30 50 L70 50" stroke="#0069d9" stroke-width="4"/>
    </svg>
  `,
  'connect-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#17a2b8"/>
      <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="#ffffff"/>
      <path d="M50 35 L50 65" stroke="#17a2b8" stroke-width="4"/>
    </svg>
  `,
  'consigliere-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#343a40"/>
      <path d="M35 50 L65 50" stroke="#ffffff" stroke-width="6"/>
      <path d="M50 35 L50 65" stroke="#ffffff" stroke-width="6"/>
      <circle cx="50" cy="50" r="10" fill="#dc3545"/>
    </svg>
  `,
  'content-creation-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#007bff"/>
      <path d="M25 40 L75 40" stroke="#ffffff" stroke-width="4"/>
      <path d="M25 60 L75 60" stroke="#ffffff" stroke-width="4"/>
      <path d="M35 20 L65 80" stroke="#ffffff" stroke-width="4"/>
    </svg>
  `,
  'dark-mode-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#343a40"/>
      <path d="M50 10 A40 40 0 0 1 50 90 A40 40 0 0 1 50 10" fill="#f8f9fa"/>
      <circle cx="60" cy="50" r="10" fill="#343a40"/>
    </svg>
  `,
  'delivery-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="60" width="80" height="30" rx="10" fill="#28a745"/>
      <rect x="10" y="10" width="60" height="50" fill="#ffffff"/>
      <rect x="20" y="20" width="40" height="30" fill="#6c757d"/>
      <circle cx="25" cy="80" r="5" fill="#ffffff"/>
      <circle cx="75" cy="80" r="5" fill="#ffffff"/>
    </svg>
  `,
  'digital-transformation-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#17a2b8"/>
      <path d="M50,20 L70,50 L50,80 L30,50 Z" fill="#ffffff"/>
    </svg>
  `,
  'distribution-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="20" y="20" width="60" height="60" fill="#6f42c1"/>
      <circle cx="30" cy="30" r="10" fill="#ffffff"/>
      <circle cx="70" cy="30" r="10" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="20" fill="#ffffff"/>
    </svg>
  `,
  'ecommerce-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" rx="10" fill="#ff8800"/>
      <rect x="20" y="30" width="60" height="30" rx="10" fill="#ffffff"/>
      <path d="M30 40 H70" stroke="#ff8800" stroke-width="4"/>
      <circle cx="40" cy="70" r="5" fill="#ffffff"/>
      <circle cx="60" cy="70" r="5" fill="#ffffff"/>
    </svg>
  `,
  'engagement-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#dc3545"/>
      <path d="M50 35 L65 50 L50 65 L35 50 Z" fill="#ffffff"/>
      <circle cx="50" cy="50" r="10" fill="#343a40"/>
    </svg>
  `,
  'enterprise-web-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="#dc3545"/>
      <rect x="20" y="20" width="60" height="20" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="30" fill="#343a40"/>
    </svg>
  `,
  'gold-icon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <defs>
    <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFC700;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#goldGradient)" stroke="#DAA520" stroke-width="5"/>
  <text x="50%" y="55%" font-size="20" fill="#1C1C1C" font-weight="bold" text-anchor="middle" alignment-baseline="middle">Gold</text>
</svg>
`,

  'silver-icon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <defs>
    <radialGradient id="silverGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#C0C0C0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#A9A9A9;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#silverGradient)" stroke="#B0B0B0" stroke-width="5"/>
  <text x="50%" y="55%" font-size="20" fill="#2C2C2C" font-weight="bold" text-anchor="middle" alignment-baseline="middle">Silver</text>
</svg>
`,

  'bronze-icon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <defs>
    <radialGradient id="bronzeGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#CD7F32;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#A0522D;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#bronzeGradient)" stroke="#8B4513" stroke-width="5"/>
  <text x="50%" y="55%" font-size="20" fill="#3C3C3C" font-weight="bold" text-anchor="middle" alignment-baseline="middle">Bronze</text>
</svg>
`,

  'platinum-icon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <defs>
    <radialGradient id="platinumGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#E5E4E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#C0C0C0;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#platinumGradient)" stroke="#B0B0B0" stroke-width="5"/>
  <text x="50%" y="55%" font-size="20" fill="#4C4C4C" font-weight="bold" text-anchor="middle" alignment-baseline="middle">Platinum</text>
</svg>
`,

  'diamond-icon.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <defs>
    <radialGradient id="diamondGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#B9F2FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#87CEEB;stop-opacity:1" />
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="40" fill="url(#diamondGradient)" stroke="#87CEEB" stroke-width="5"/>
  <text x="50%" y="55%" font-size="20" fill="#333333" font-weight="bold" text-anchor="middle" alignment-baseline="middle">Diamond</text>
</svg>
`,

  'instagram-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" rx="20" fill="#E1306C"/>
      <circle cx="50" cy="50" r="25" fill="#ffffff"/>
      <circle cx="50" cy="50" r="15" fill="#E1306C"/>
      <circle cx="70" cy="30" r="5" fill="#ffffff"/>
    </svg>
  `,
  'landing-page-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="#007bff"/>
      <rect x="20" y="20" width="60" height="20" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="30" fill="#6c757d"/>
    </svg>
  `,
  'light-mode-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#f8f9fa"/>
      <circle cx="50" cy="50" r="20" fill="#ffd700"/>
      <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50" stroke="#ffd700" stroke-width="4"/>
    </svg>
  `,
  'membership-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#17a2b8"/>
      <rect x="30" y="30" width="40" height="40" fill="#ffffff"/>
      <path d="M50 40 L70 50 L50 60 L30 50 Z" fill="#17a2b8"/>
    </svg>
  `,
  'merch-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="20" y="20" width="60" height="60" fill="#dc3545"/>
      <path d="M30 30 L50 20 L70 30 L50 80 Z" fill="#ffffff"/>
      <circle cx="50" cy="60" r="10" fill="#dc3545"/>
    </svg>
  `,
  'monetization-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#28a745"/>
      <text x="50%" y="50%" font-size="30" fill="#ffffff" text-anchor="middle" alignment-baseline="middle">$</text>
    </svg>
  `,
  'personal-brand-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#007bff"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#ffffff"/>
      <circle cx="50" cy="50" r="10" fill="#007bff"/>
    </svg>
  `,
  'protection-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#6f42c1"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#ffffff"/>
    </svg>
  `,
  'real-estate-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="20" y="50" width="60" height="40" fill="#007bff"/>
      <path d="M20 50 L50 20 L80 50" fill="#ffffff"/>
      <rect x="30" y="60" width="20" height="20" fill="#ffffff"/>
      <rect x="60" y="60" width="10" height="10" fill="#ffffff"/>
    </svg>
  `,
  'recipe-blog-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#28a745"/>
      <path d="M40 35 L60 35 L70 45 L70 65 L60 75 L40 75 L30 65 L30 45 Z" fill="#ffffff"/>
      <circle cx="50" cy="55" r="10" fill="#28a745"/>
    </svg>
  `,
  'recipe-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#ffc107"/>
      <path d="M40 40 L60 40 L70 50 L70 70 L60 80 L40 80 L30 70 L30 50 Z" fill="#ffffff"/>
      <circle cx="50" cy="60" r="10" fill="#ffc107"/>
    </svg>
  `,
  'restaurant-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="20" y="20" width="60" height="60" fill="#28a745"/>
      <path d="M30 40 L50 20 L70 40 L50 80 Z" fill="#ffffff"/>
    </svg>
  `,
  'saas-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="#007bff"/>
      <rect x="20" y="20" width="60" height="20" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="30" fill="#6c757d"/>
    </svg>
  `,
  'seo-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#28a745"/>
      <text x="50%" y="50%" font-size="30" fill="#ffffff" text-anchor="middle" alignment-baseline="middle">SEO</text>
    </svg>
  `,
  'strategy-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#6c757d"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#ffffff"/>
      <circle cx="50" cy="50" r="10" fill="#6c757d"/>
    </svg>
  `,
  'trap-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="#dc3545"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#ffffff"/>
    </svg>
  `,
  'underworld-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="#343a40"/>
      <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="#ffffff"/>
      <circle cx="50" cy="50" r="10" fill="#343a40"/>
    </svg>
  `,
  'web-app-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="#ffc107"/>
      <rect x="20" y="20" width="60" height="20" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="30" fill="#6c757d"/>
    </svg>
  `,
  'web-development-icon.svg': `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="#007bff"/>
      <rect x="20" y="20" width="60" height="20" fill="#ffffff"/>
      <rect x="20" y="50" width="60" height="30" fill="#6c757d"/>
    </svg>
  `,

  'react-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#61DAFB" width="48px" height="48px">
  <path d="M12,0c-2.2,0-4.1,2.4-5.1,6c-0.7,2.5-1.1,5.3-1.1,8s0.4,5.5,1.1,8c1,3.6,2.9,6,5.1,6c2.2,0,4.1-2.4,5.1-6c0.7-2.5,1.1-5.3,1.1-8s-0.4-5.5-1.1-8C16.1,2.4,14.2,0,12,0z M12,20c-2.2,0-4-4.5-4-10S9.8,0,12,0s4,4.5,4,10S14.2,20,12,20z"/>
</svg>`,

  'nodejs-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#68A063" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M13.8,17.6l-3.3-1.7c-0.2,0.2-0.4,0.4-0.6,0.5
  c-0.4,0.2-0.8,0.3-1.2,0.3c-1.1,0-2-0.8-2-1.8v-1.7h1.5v1.7c0,0.3,0.3,0.6,0.7,0.6c0.1,0,0.2,0,0.3,0l2.2-1.1v-3.5H8v-1.5h2.5V8.8
  h1.5v1.5h2.5v1.5h-2.5v4.1l3.3,1.7v-2.7h1.5v3.6C15.6,17.2,14.7,17.6,13.8,17.6z"/>
</svg>`,

  'mongodb-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4FAA41" width="48px" height="48px">
  <path d="M12,0C8.7,0,6.3,1.4,6.3,3.2V7c0,1.1,1.1,1.9,2.3,1.9h7.2c1.2,0,2.3-0.8,2.3-1.9V3.2C17.7,1.4,15.3,0,12,0z M12,9.2
  c-0.5,0-1-0.3-1.2-0.7c-0.5-0.9-0.3-2.2,0.3-3.1c0.7-1,1.8-1.5,2.8-1.3c1.5,0.2,2.4,1.9,1.7,3.4C14.6,8.9,13.3,9.3,12,9.2z"/>
</svg>`,

  'express-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333333" width="48px" height="48px">
  <path d="M0,12C0,5.4,5.4,0,12,0s12,5.4,12,12c0,6.6-5.4,12-12,12C5.4,24,0,18.6,0,12z M18,15l-4-4l-4,4L6,10v5H4V9.2l7,7
  l7-7V15H18z"/>
</svg>`,

  'javascript-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F0DB4F" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M10.4,17.3c0.2,0.4,0.6,0.7,1.1,0.7
  c0.4,0,0.6-0.2,0.6-0.5c0-0.3-0.2-0.4-0.6-0.5l-1-0.3c-1.4-0.3-2.1-1-2.1-2.1c0-1.1,0.8-1.9,2.1-1.9c1.2,0,1.9,0.7,2.1,1.6h-1.5
  c-0.2-0.3-0.5-0.4-0.7-0.4c-0.4,0-0.6,0.2-0.6,0.4c0,0.3,0.3,0.4,0.6,0.5l1,0.3c1.4,0.3,2.1,1,2.1,2.2c0,1.2-1,2-2.3,2
  c-1.5,0-2.3-0.8-2.5-1.7H10.4z M16,17.8c0.5,0,0.8-0.2,0.8-0.5c0-0.3-0.2-0.4-0.6-0.5l-0.4-0.1c-0.4-0.1-0.8-0.3-0.8-0.8
  c0-0.4,0.3-0.8,1-0.8c0.4,0,0.7,0.1,0.9,0.3l0.5-1.1c-0.3-0.2-0.7-0.4-1.5-0.4c-1,0-1.8,0.6-1.8,1.5c0,0.7,0.5,1,1,1.1
  l0.5,0.1c0.4,0.1,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-1,0.6c-0.4,0-0.7-0.1-0.9-0.3l-0.5,1.1C15,17.7,15.5,17.8,16,17.8z"/>
</svg>`,

  'htmlcss-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E44D26" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M12,21.1l-6.4-1.7l0.9-9.6h11L18.4,19.4
  L12,21.1z M10,10H8.3l0.1,1.1h1.6l0.1,1.1H7.3l-0.4,4.2h6.2l0.4-4.2h-3.2L10,10z"/>
</svg>`,

  'python-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#306998" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M16.6,16.3c0.1-0.6,0.3-1.2,0.3-1.8
  c0-1.1-0.8-1.9-2.1-1.9c-1.2,0-2.1,0.9-2.1,1.9c0,0.6,0.2,1.1,0.6,1.5c-0.8,0.2-1.7,0.3-2.6,0.3c-1.4,0-2.8-0.4-4.1-1.2l0.8-0.9
  c1,0.5,2.1,0.7,3.2,0.7c2.5,0,4.5-1.9,4.5-4.3c0-1.3-0.5-2.4-1.4-3.2c-0.3-0.3-0.7-0.5-1-0.7c0.4-1.6,0.5-3.3,0.3-5
  c-0.1-0.5-0.5-0.9-1-1c-1.3-0.2-2.6-0.2-3.8,0c-0.6,0.1-1,0.5-1.1,1c-0.2,1.2-0.3,2.5-0.1,3.8h-2.1c-0.9,0-1.8,0.7-1.8,1.6v5.6
  c0,1.6,1.4,2.9,3,2.9h2.6c0.7,0,1.4-0.2,2-0.7c0.4,0.1,0.7,0.1,1.1,0.1c0.7,0,1.3-0.1,2-0.2c0.4-0.1,0.8-0.4,1-0.8
  c0.5-1,1-1.9,1.3-3C17.1,17.4,16.9,16.9,16.6,16.3z"/>
</svg>`,

  'django-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#092E20" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M15.2,15.4v1.5h1.5v-1.5h-1.5z
  M15.2,8.1v5.8h1.5V8.1H15.2z M10.3,7.4c-0.3,0-0.6,0.2-0.8,0.5L7.8,13.6l0.3,1.1c0.2,0.5,0.6,0.8,1,0.8c0.2,0,0.4,0,0.6-0.2
  c0.2-0.1,0.4-0.4,0.5-0.7l1.1-4.7c0.1-0.5-0.2-0.9-0.7-0.9H10.3z M11.6,16.4c-0.4,0.2-1.2,0.6-1.8,1c-0.2,0.1-0.2,0.5,0,0.6
  c0.8,0.6,1.7,1.1,2.8,1.5c1,0.3,2,0.5,3.1,0.5c2.6,0,4.8-1.7,4.8-4.4V8.1c0-2.6-2.2-4.4-4.8-4.4c-1,0-2.1,0.2-3.1,0.5
  c-0.8,0.2-1.6,0.6-2.4,1.1c-0.2,0.1-0.2,0.5,0,0.6c0.9,0.7,1.8,1.4,2.7,2c0.2,0.1,0.5,0.1,0.7-0.1c0.7-0.7,1.7-1.2,2.8-1.2
  c2.1,0,3.7,1.5,3.7,3.6v3.7c0,2.1-1.6,3.6-3.7,3.6c-1.2,0-2.2-0.5-2.8-1.3c-0.2-0.2-0.5-0.3-0.7-0.1c-1,0.7-2,1.4-3,2.2
  C11.6,16.3,11.6,16.4,11.6,16.4z"/>
</svg>`,

  'sql-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CC2927" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M10.3,15.8c0.2,0.3,0.2,0.5,0.3,0.8
  c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.5,0.4,0.7c0.3,0.4,0.6,0.6,1,0.6c0.4,0,0.7-0.2,1-0.6c0.3-0.4,0.5-0.8,0.7-1.2
  c0.2-0.4,0.5-0.9,0.8-1.4c0.3-0.5,0.6-1,1-1.5c0.3-0.5,0.7-0.9,1.1-1.3c0.3-0.3,0.7-0.7,1-1c0.3-0.3,0.7-0.6,1-1
  c0.3-0.4,0.6-0.8,0.9-1.2c0.2-0.3,0.4-0.6,0.5-1.1c0.1-0.5,0.1-0.9,0-1.3c-0.1-0.4-0.3-0.8-0.6-1.2c-0.4-0.5-0.9-0.9-1.5-1.2
  c-0.6-0.3-1.3-0.4-2-0.4c-1.1,0-2.2,0.2-3.2,0.7c-0.5,0.2-0.9,0.4-1.3,0.7c-0.4,0.3-0.7,0.5-1,0.7c-0.4,0.2-0.6,0.5-0.9,0.9
  c-0.3,0.4-0.5,0.8-0.7,1.2c-0.2,0.4-0.3,0.8-0.3,1.2c0,0.3,0.1,0.5,0.4,0.7c0.3,0.2,0.7,0.3,1.2,0.3c0.5,0,0.9-0.1,1.2-0.4
  c0.3-0.3,0.6-0.5,0.8-0.7c0.3-0.2,0.5-0.4,0.8-0.5c0.5-0.2,1-0.3,1.6-0.3c0.4,0,0.8,0.1,1.2,0.3c0.4,0.2,0.7,0.5,0.9,0.9
  c0.3,0.4,0.3,0.9,0,1.3c-0.2,0.3-0.6,0.6-1.1,0.9c-0.4,0.3-1,0.7-1.7,1.1c-0.7,0.4-1.4,0.9-2,1.4c-0.7,0.5-1.4,1.1-2,1.7
  C10.6,15.3,10.4,15.6,10.3,15.8z"/>
</svg>`,

  'git-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F05032" width="48px" height="48px">
  <path d="M23.1,10.5L13.5,0.9c-0.7-0.7-1.9-0.7-2.6,0l-1.9,1.9l2.7,2.7c0.9-0.3,2-0.2,2.8,0.5c0.8,0.8,1,2.1,0.5,3l2.5,2.5
  c0.9-0.5,2.2-0.4,3,0.5C22.9,12.5,23,14,22.2,15c-0.8,1-2.3,1.1-3.3,0.3c-0.9-0.7-1-1.9-0.5-2.8l-2.3-2.3v6.1c0.8,0.4,1.3,1.2,1.3,2.1
  c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.9,0.5-1.7,1.3-2.1v-6.4c-0.3-0.1-0.5-0.1-0.8-0.1c-0.3,0-0.5,0-0.8,0.1v6.4
  c0.8,0.4,1.3,1.2,1.3,2.1c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.9,0.5-1.7,1.3-2.1v-6.1c-0.8-0.4-1.3-1.2-1.3-2.1
  c0-1.3,1.1-2.4,2.4-2.4c0.3,0,0.5,0,0.8,0.1L8.3,3.7L0.9,11.1c-0.7,0.7-0.7,1.9,0,2.6l9.6,9.6c0.7,0.7,1.9,0.7,2.6,0l10.1-10.1
  C23.8,12.3,23.8,11.2,23.1,10.5z"/>
</svg>`,

  'aws-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF9900" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M15.9,15.1c-0.2,0.1-0.4,0.2-0.6,0.2
  c-0.3,0-0.6-0.1-0.8-0.3l-2-2c-0.4-0.4-0.4-1,0-1.4l2-2c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.2,1.2l1.2,1.2C16.3,14.2,16.3,14.8,15.9,15.1
  z M10.9,9c-0.4,0-0.7-0.3-0.7-0.7S10.5,7.5,10.9,7.5h2.2c0.4,0,0.7,0.3,0.7,0.7S13.5,9,13.1,9H10.9z M9.5,16.4c-0.4,0.4-1,0.4-1.4,0
  l-2-2c-0.4-0.4-0.4-1,0-1.4l2-2c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.2,1.2l1.2,1.2C9.9,15.4,9.9,16,9.5,16.4z"/>
</svg>`,

  'docker-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2496ED" width="48px" height="48px">
  <path d="M6,10h2V8H6V10z M8,12H6v2h2V12z M10,12H8v2h2V12z M8,14H6v2h2V14z M10,14H8v2h2V14z M12,10h-2v2h2V10z M10,10H8v2h2V10z
  M12,8h-2v2h2V8z M14,10h-2v2h2V10z M14,8h-2v2h2V8z M16,8h-2v2h2V8z M16,10h-2v2h2V10z M18,8h-2v2h2V8z M12,14h-2v2h2V14z
  M18,14h-2v2h2V14z M20,12h-2v2h2V12z M20,10h-2v2h2V10z M12,12h-2v2h2V12z M14,12h-2v2h2V12z M16,12h-2v2h2V12z"/>
</svg>`,

  'kubernetes-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#326CE5" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M16.6,12.7c0,0.3-0.3,0.6-0.7,0.6H8
  c-0.4,0-0.7-0.3-0.7-0.6v-1.5C7.3,10.3,7.6,10,8,10h7.9c0.4,0,0.7,0.3,0.7,0.6V12.7z"/>
</svg>`,

  'cicd-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#239120" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M15,18l-5.4-5.4L15,7.2v3.6H9.6V8.1L5.1,12
  l4.5,3.9v-2.7H15V18z"/>
</svg>`,

  'agile-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333333" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M16.5,8.3l-0.8,2.8H8.2l0.8-2.8h7.5
  M19.5,9l-0.3,0.7H15l0.9-3.2h4.5L19.5,9z"/>
</svg>`,

  'scrum-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#26C485" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M17.3,12.8c-0.1,1.7-0.7,3.4-1.9,4.9
  c-2.2,2.6-5.6,3.6-9,2.8c-1.4-0.3-2.8-1-4.1-2c-0.5-0.4-0.6-1.1-0.3-1.6c0.4-0.5,1.1-0.6,1.6-0.3c0.5,0.4,1,0.7,1.6,1
  c2.2,0.8,4.6,0.2,6.2-1.5c0.9-1.1,1.4-2.5,1.5-3.9h-1.6c-0.5,0-0.9-0.4-0.9-0.9V9.5c0-0.5,0.4-0.9,0.9-0.9h2.5c0.5,0,0.9,0.4,0.9,0.9
  v4.3c0,0.5-0.4,0.9-0.9,0.9h-1.2C16.7,15.7,17.1,14.3,17.3,12.8z"/>
</svg>`,

  'kanban-icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00C4CC" width="48px" height="48px">
  <path d="M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12C24,5.4,18.6,0,12,0z M10,15.9H5V9.5h5V15.9z M19,15.9h-5V5.3h5
  V15.9z"/>
</svg>`,
};

// Directory where the icons should be saved
const outputDir = path.join(__dirname, 'src/assets/icons');

// Ensure the directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create each SVG file
Object.entries(icons).forEach(([filename, svgContent]) => {
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Created ${filePath}`);
});

console.log('SVG files created successfully.');
