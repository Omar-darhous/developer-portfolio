import bloomcartImg from '../assets/projects/bloomcart.jpg';
import interactiveCalculatorImg from '../assets/projects/interactive-calculator.png';

/**
 * Configurable profile, contact, social, skill, and project data for Omar Darhous.
 * Fill in any empty string ("") below to automatically display its button, link, or portrait in the UI.
 */

export const PROFILE_CONFIG = {
  monogram: 'OD',
  name: 'Omar Darhous',
  role: 'Frontend Developer',
  helloBadge: 'Hello There!',
  headline: 'I’m Omar Darhous, Frontend Developer',
  badge: 'React • Next.js',
  intro:
    'I build responsive web interfaces with React, with a focus on clear design and smooth interactions.',
  aboutSummary:
    'I am a Frontend Developer focused on building responsive, accessible web interfaces with React, Next.js, and modern JavaScript. I combine structured component architecture and semantic HTML/CSS with full-stack API integration using Node.js, Express, and MongoDB.',
  aboutHighlights: [
    {
      title: 'Component-Based Interfaces',
      description:
        'Reusable React components that keep interfaces easy to maintain.',
    },
    {
      title: 'Responsive Layouts',
      description: 'Pages that adapt from mobile screens to desktops.',
    },
    {
      title: 'API Integration',
      description:
        'Connecting interfaces to APIs and handling loading and error states.',
    },
  ],
  // Optional portrait image path or URL — uses "OD" monogram placeholder when empty
  portraitUrl: '',
  // Contact & Social links — leave empty ("") until provided; controls hide automatically when empty
  email: '', // e.g. 'omar@example.com' or 'mailto:omar@example.com'
  githubUrl: '', // e.g. 'https://github.com/omardarhous'
  linkedinUrl: '', // e.g. 'https://linkedin.com/in/omardarhous'
};

export const RIBBON_ITEMS = [
  'React',
  'Next.js',
  'JavaScript',
  'Responsive Design',
  'API Integration',
];

export const SKILL_GROUPS = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    subtitle: 'Frameworks & JS',
    iconType: 'frontend',
    description:
      'Component-driven interfaces, client and server rendering, state management, and interactive ES6+ application logic.',
    skills: [
      { name: 'React', detail: 'SPA Architecture & Hooks' },
      { name: 'Next.js', detail: 'SSR & App Router' },
      { name: 'JavaScript', detail: 'ES6+ & Async Patterns' },
    ],
  },
  {
    id: 'markup-styling',
    category: 'Markup & Styling',
    subtitle: 'HTML & CSS',
    iconType: 'layout',
    description:
      'Semantic HTML5 structure, accessible document outlines, responsive CSS Grid and Flexbox layouts, and fluid animations.',
    skills: [
      { name: 'HTML', detail: 'Semantic Markup & A11y' },
      { name: 'CSS', detail: 'Grid, Flexbox & Animations' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    subtitle: 'Server & Database',
    iconType: 'backend',
    description:
      'RESTful API integration, server-side routing, middleware pipelines, and NoSQL document data modeling.',
    skills: [
      { name: 'Node.js', detail: 'Runtime & API Services' },
      { name: 'Express', detail: 'Routing & Middleware' },
      { name: 'MongoDB', detail: 'NoSQL Schema & Queries' },
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 'bloomcart',
    label: 'Project · 01',
    title: 'BloomCart',
    description:
      'An e-commerce storefront interface featuring product catalog browsing, category filtering, and an interactive shopping cart with real-time order totals.',
    tags: ['React', 'Next.js', 'JavaScript', 'CSS'],
    previewType: 'bloomcart',
    image: bloomcartImg,
    imageAlt:
      'BloomCart floral and gift boutique storefront showing search bar, cart counter, and three flower and gift product cards',
    liveUrl: 'https://bloomcart-nine.vercel.app/',
    sourceUrl: '', // Provide URL to reveal "Source Code" link
  },
  {
    id: 'interactive-calculator',
    label: 'Project · 02',
    title: 'Interactive Calculator',
    description:
      'A responsive web calculator supporting chained arithmetic operations, keyboard input handling, expression history display, and precision formatting.',
    tags: ['JavaScript', 'HTML', 'CSS', 'DOM Events'],
    previewType: 'calculator',
    image: interactiveCalculatorImg,
    imageAlt:
      'Interactive Calculator interface with dark navy theme, digital display showing zero, and number and teal operator keys',
    liveUrl: 'https://interactive-calculator-ivory.vercel.app/',
    sourceUrl: '', // Provide URL to reveal "Source Code" link
  },
];
