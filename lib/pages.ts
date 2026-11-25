import type { Metadata } from 'next';

/* Every page of the site: its route name (what assets/site.js renders), title and description.
   The route name is passed to the page script through <meta name="li-route">. */
export const PAGES = {
  home: { title: 'Latch Infinity | Branding, Digital Marketing, EdTech & Gamification', description: 'Latch Infinity is a Bengaluru digital marketing and branding agency: branding, SEO, social media, paid ads, websites and apps, EdTech content and gamified event experiences.' },
  about: { title: 'About | Latch Infinity', description: 'We help you create, refine and strengthen your brand. Meet Latch Infinity, a Bengaluru agency working across industries and time zones.' },
  work: { title: 'Work | Latch Infinity', description: 'Our recent work and portfolio: brand identities, product design, films and photography for Kaynes, Oli, Cube, Dharmaram and Miln Town.' },
  'work-kaynes': { title: 'Kaynes Technology | Latch Infinity', description: 'A brand identity refresh for Kaynes Technology, India’s electronics and semiconductor company.' },
  'work-dharmaram': { title: 'Dharmaram Vidya Kshetram | Latch Infinity', description: 'A brand identity refresh and faculty system for Dharmaram Vidya Kshetram, a Pontifical Athenaeum in Bengaluru.' },
  'work-oli': { title: 'Oli | Latch Infinity', description: 'Brand, website and apps for Oli, a next-gen gig platform for live music.' },
  'work-cube': { title: 'Cube Audience Manager | Latch Infinity', description: 'Product design and films for Cube, an AI audience-research platform by Cubera.' },
  'work-milntown': { title: 'Miln Town | Latch Infinity', description: 'Photography, film and a table brochure for Miln Town, a heritage bungalow in Coonoor.' },
  marketing: { title: 'Digital Marketing Services in Bangalore | Latch Infinity', description: 'Branding, SEO, social media, paid advertising, content and websites, all under one roof, from Latch Infinity in Bangalore.' },
  branding: { title: 'Branding | Latch Infinity', description: 'Brand strategy, logo and identity design, brand guidelines, positioning and rebranding by Latch Infinity.' },
  advertising: { title: 'Advertising | Latch Infinity', description: 'Search, social, programmatic and display advertising that reaches the right people and drives results.' },
  'digital-services': { title: 'Digital Services | Latch Infinity', description: 'Websites, e-commerce, digital marketing, content and analytics to grow your brand online.' },
  'web-app-development': { title: 'Website & App Development | Latch Infinity', description: 'Custom websites and mobile apps, e-commerce platforms, optimisation and integrations by Latch Infinity.' },
  edtech: { title: 'EdTech | Latch Infinity', description: 'UGC-compliant online learning ecosystems: 4-Quadrant content, video and learning assets, compliance and LMS readiness.' },
  gamification: { title: 'Gamification | Latch Infinity', description: 'Turn events into interactive experiences with real-time multiplayer engagement played on attendees’ own phones.' },
  blog: { title: 'Blogs | Latch Infinity', description: 'Articles from Latch Infinity on branding, SEO, advertising, video production, web development and EdTech.' },
  contact: { title: 'Let’s Talk | Latch Infinity', description: 'Got an idea? Let’s discuss. Get in touch with Latch Infinity in Bengaluru.' },
  legal: { title: 'Terms & Privacy | Latch Infinity', description: 'Terms and conditions and privacy policy for Latch Infinity.' },
  start: { title: 'Let’s Talk | Latch Infinity', description: 'Talk to Latch Infinity in Bengaluru: call, WhatsApp, email or visit us, pick a service and build a plan with an approximate budget.' },
} as const;

export type Route = keyof typeof PAGES;

export function pageMeta(route: Route, extra: Record<string, string> = {}, override?: { title: string; description: string }): Metadata {
  const { title, description } = override || PAGES[route];
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' },
    robots: { index: false, follow: false },
    other: { 'li-route': route, ...extra },
  };
}
