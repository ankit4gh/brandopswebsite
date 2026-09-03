export const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Method', href: '#method' },
  { label: 'Why us', href: '#why' },
  { label: 'FAQ', href: '#faq' },
];

export const CONTACT = {
  email: 'ankit@thebrandops.com',
  phone: '+91 99209 67449',
  phoneHref: 'tel:+919920967449',
  address: 'The Brand Ops, Sector 29, Vashi, Navi Mumbai — 400703, India',
  bookHref:
    'mailto:ankit@thebrandops.com?subject=Free%20Brand%20Diagnostic&body=Hi%20Ankit%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20brand%20diagnostic%20for%20my%20business.%0A%0ABusiness%20name%3A%0AIndustry%3A%0AWebsite%20%2F%20Instagram%3A%0A',
};

export interface Service {
  num: string;
  tag: string;
  name: string;
  price: string;
  desc: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    num: '01',
    tag: 'STARTER',
    name: 'Starter Services',
    price: 'from ₹12,000',
    desc: 'Purpose-built for new businesses and startups. A sharp logo, core identity, and launch-ready assets — enough brand to be taken seriously from day one, without the agency markup.',
    items: ['Logo & core identity', 'Business stationery', 'Launch-ready assets'],
  },
  {
    num: '02',
    tag: 'VISIBILITY',
    name: 'Visibility Services',
    price: 'from ₹12,000/mo',
    desc: 'Social media and digital presence, run as a system. Consistent, on-brand content that keeps you in front of your audience every single week — designed, scheduled, and shipped.',
    items: ['Social media systems', 'Content design', 'Monthly retainers'],
  },
  {
    num: '03',
    tag: 'GROWTH',
    name: 'Brand Growth Packages',
    price: 'from ₹60,000',
    desc: 'The complete brand transformation. Strategy, identity, website, social, and print — one unified system built with the PRISM Method, delivered by one partner instead of five vendors.',
    items: ['Full PRISM strategy', 'Identity + website', 'Brand guidelines'],
  },
  {
    num: '04',
    tag: 'ECOMMERCE',
    name: 'Ecommerce Branding',
    price: 'from ₹25,000',
    desc: "Your product is great. Your listing is killing it. Product imagery, A+ content, and storefront branding engineered to convert browsers into buyers on every marketplace.",
    items: ['Listing images that convert', 'A+ / storefront content', 'Packaging design'],
  },
  {
    num: '05',
    tag: 'PERSONAL',
    name: 'Personal Branding',
    price: 'from ₹50,000',
    desc: 'The PRISM Method applied to individuals. For CAs, doctors, lawyers, coaches, and consultants who want to be the obvious choice in their field — positioning, identity, and content systems.',
    items: ['Positioning & narrative', 'Personal identity system', 'LinkedIn & content kit'],
  },
  {
    num: '06',
    tag: 'SPECIALIZED',
    name: 'Specialized Services',
    price: 'from ₹3,000',
    desc: 'Custom solutions for unique needs. Pitch decks, brand books, video, motion, GenAI-driven assets, event collateral — if it carries your brand, we can design it.',
    items: ['Pitch decks & brand books', 'Video & motion', 'GenAI-driven assets'],
  },
];

export const INDUSTRIES = [
  {
    num: '01',
    tag: 'REAL ESTATE',
    name: 'Real Estate & Construction',
    desc: 'Sell flats before the hoarding goes up. Premium branding that increases perceived value — and per-sq-ft pricing.',
    stat: '↑ per-sq-ft pricing power',
  },
  {
    num: '02',
    tag: 'ECOMMERCE / D2C',
    name: 'Ecommerce & D2C Brands',
    desc: "Your product is great. Your listing is killing it. Let's create images and branding that actually converts.",
    stat: '↑ listing conversion rate',
  },
  {
    num: '03',
    tag: 'PROFESSIONALS',
    name: 'Personal & Professional',
    desc: 'Personal and professional branding for CAs, Doctors, Lawyers, Coaches, and Consultants who want to stand out.',
    stat: '↑ inquiries & pricing power',
  },
];

export const PRISM = [
  {
    letter: 'P',
    num: '01',
    name: 'Positioning',
    tagline: 'Define your unique space.',
    desc: 'We find the one position in your market that only you can own — so customers stop comparing you on price and start choosing you on identity.',
  },
  {
    letter: 'R',
    num: '02',
    name: 'Research',
    tagline: 'Deep market insights.',
    desc: 'Competitors, customers, category codes. We map what everyone else looks like so your brand deliberately looks like none of them.',
  },
  {
    letter: 'I',
    num: '03',
    name: 'Identity',
    tagline: 'Create the visual language.',
    desc: 'Logo, color, type, imagery, voice — a complete visual language engineered around who you actually are, not a template.',
  },
  {
    letter: 'S',
    num: '04',
    name: 'Systems',
    tagline: 'Build the brand assets.',
    desc: 'Website, social kits, print, video, guidelines. Everything your team touches, built as one consistent, scalable system.',
  },
  {
    letter: 'M',
    num: '05',
    name: 'Momentum',
    tagline: 'Launch & grow.',
    desc: "Steps 01–04 are the build. This is the payoff: a brand that compounds — more inquiries, higher pricing power, better conversions.",
  },
];

export const COMPARISON_ROWS: { feature: string; brandops: 'yes' | 'partial' | 'no'; agency: 'yes' | 'partial' | 'no'; freelancer: 'yes' | 'partial' | 'no' }[] = [
  { feature: 'Strategy before design', brandops: 'yes', agency: 'partial', freelancer: 'no' },
  { feature: 'Logo + Web + Social + Print + Video', brandops: 'yes', agency: 'partial', freelancer: 'no' },
  { feature: 'Single point of contact', brandops: 'yes', agency: 'no', freelancer: 'yes' },
  { feature: 'Industry-specific playbooks', brandops: 'yes', agency: 'partial', freelancer: 'no' },
  { feature: 'Fortune 500–grade craft', brandops: 'yes', agency: 'yes', freelancer: 'no' },
  { feature: 'Transparent starting prices', brandops: 'yes', agency: 'no', freelancer: 'partial' },
  { feature: 'Founder-led execution', brandops: 'yes', agency: 'no', freelancer: 'yes' },
  { feature: 'Results talk, zero design jargon', brandops: 'yes', agency: 'no', freelancer: 'partial' },
];

export const TESTIMONIALS = [
  {
    quote:
      'Ankit was the first to bring art to the science of our Global Learning work. His brandbooks, animation, and GenAI-driven videos made our learning assets recognizable and scalable.',
    name: 'Vigla Clarke-Allison',
    role: 'Vice President — Global L&D, United States',
  },
  {
    quote:
      'Ankit combines creative design, learning technology, and AI to lead award-winning global programs recognized with multiple Brandon Hall Excellence Awards.',
    name: 'Denise Keller',
    role: 'Learning Experience Manager, United States',
  },
  {
    quote:
      'Ankit brings a rare blend of brand strategy and creative excellence, consistently translating complex technical concepts into clear, compelling global brand narratives.',
    name: 'Amr Mostafa',
    role: 'Data Science Consultant, Dubai',
  },
  {
    quote:
      'A consistently reliable and creative partner, delivering high-quality work across video, eLearning, and brand design. His responsiveness and collaborative approach made him a pleasure to work with.',
    name: 'Corey Klein',
    role: 'Training Programs & Communications Manager, US',
  },
  {
    quote:
      'One of the most useful assets he developed was the BrandBook — helping the team create a global, recognized look and feel and a strong brand.',
    name: 'Daniela González Saucedo',
    role: 'HRBP, Mexico',
  },
  {
    quote:
      'His passion for creating is seen through his work. He brings great energy to the team — it was a pleasure working with him at Colgate-Palmolive.',
    name: 'Priya Patti',
    role: 'Teaching Assistant, US',
  },
];

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'Starter identities ship in 2–3 weeks. Complete brand transformations under the Brand Growth Packages typically run 6–10 weeks depending on scope. We agree on a roadmap with fixed milestones before we start — so you always know what ships, and when.',
  },
  {
    q: 'Do you work with startups or only large brands?',
    a: "Both. The system was built at Fortune 500 scale, but the packages start at ₹3,000 precisely so that startups, D2C brands, and independent professionals get the same strategic approach — without the agency markup.",
  },
  {
    q: "What's included in your design packages?",
    a: 'It depends on the tier, but every package is strategy-first: positioning and research come before pixels. From there, deliverables range from logo and identity to full websites, social kits, print, video, and complete brand guidelines. Every package page lists exactly what ships.',
  },
  {
    q: 'Do you provide development services too?',
    a: 'Yes. We design and build websites, landing pages, and ecommerce storefronts as part of the same system as your identity — one vendor, one consistent brand, zero handoff friction.',
  },
  {
    q: 'How do we start a project?',
    a: "Book a free brand diagnostic. It's a quick 15-minute call where we audit how your brand currently looks against your competitors. You leave with honest findings either way — if it's a fit, we follow up with a scoped proposal and kickoff date.",
  },
  {
    q: 'Can you help with ongoing updates after launch?',
    a: 'Yes. Visibility retainers start at ₹12,000/month and cover ongoing social, content, and design support — so your brand stays consistent long after launch day.',
  },
];

export const MARQUEE_ITEMS = [
  'BRAND STRATEGY',
  'IDENTITY DESIGN',
  'WEBSITES',
  'SOCIAL SYSTEMS',
  'ECOMMERCE',
  'PACKAGING',
  'PRINT',
  'VIDEO & MOTION',
  'PERSONAL BRANDING',
  'BRAND BOOKS',
];
