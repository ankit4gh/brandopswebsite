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
  address: 'The Brand Ops, Sector 29, Vashi, Navi Mumbai 400703, India',
  bookHref:
    'mailto:ankit@thebrandops.com?subject=Free%20Brand%20Diagnostic&body=Hi%20Ankit%2C%0A%0AI%27d%20like%20to%20book%20a%20free%20brand%20diagnostic%20for%20my%20business.%0A%0ABusiness%20name%3A%0AIndustry%3A%0AWebsite%20%2F%20Instagram%3A%0A',
};

/* ═══════════════════════════════════════════════════════════════
   SERVICES: two main categories, BRANDING & COMMUNICATION
   ═══════════════════════════════════════════════════════════════ */

export interface PillarItem {
  name: string;
  desc: string;
}

export interface BrandingPillar {
  num: string;
  name: string;
  tagline: string;
  illustration: string;
  items: PillarItem[];
}

/* Category 01 · BRANDING: Brandops Branding Services, 8 pillars */
export const BRANDING_PILLARS: BrandingPillar[] = [
  {
    num: '01',
    illustration: '/pillars/pillar-1.png',
    name: 'Research & Discovery',
    tagline: 'We understand your market before we touch your brand',
    items: [
      { name: 'Brand audit', desc: 'where you are NOW' },
      { name: 'Competitor intelligence', desc: 'where OTHERS are' },
      { name: 'Market research', desc: 'where the OPPORTUNITY is' },
      { name: 'Stakeholder insights', desc: 'what PEOPLE think' },
      { name: 'Opportunity brief', desc: 'what YOU should own' },
    ],
  },
  {
    num: '02',
    illustration: '/pillars/pillar-2.png',
    name: 'Brand Strategy',
    tagline: 'We build the thinking behind the brand',
    items: [
      { name: 'Positioning', desc: 'how you sit in the market' },
      { name: 'Architecture', desc: 'how brand parts relate' },
      { name: 'Purpose & Values', desc: 'why you exist' },
      { name: 'Customer personas', desc: 'who you serve' },
      { name: 'Founder narrative & Naming', desc: 'your story + name' },
    ],
  },
  {
    num: '03',
    illustration: '/pillars/pillar-3.png',
    name: 'Verbal Identity',
    tagline: 'We define how your brand SPEAKS',
    items: [
      { name: 'Brand voice system', desc: 'how you sound' },
      { name: 'Messaging framework', desc: 'what you say, to whom' },
      { name: 'Taglines', desc: "how you're remembered" },
      { name: 'Copy bank', desc: 'ready-to-use brand language' },
      { name: 'Storytelling framework', desc: 'how you narrate' },
    ],
  },
  {
    num: '04',
    illustration: '/pillars/pillar-4.png',
    name: 'Visual Identity',
    tagline: 'We define how your brand LOOKS',
    items: [
      { name: 'Logo direction brief', desc: 'not execution - direction' },
      { name: 'Colour system', desc: 'psychology + application' },
      { name: 'Typography', desc: 'font rules + hierarchy' },
      { name: 'Iconography', desc: 'icon style + library' },
      { name: 'Photography direction', desc: 'image language' },
    ],
  },
  {
    num: '05',
    illustration: '/pillars/pillar-5.png',
    name: 'Experience & Environment',
    tagline: 'We design how your brand FEELS',
    items: [
      { name: 'Brand experience audit', desc: 'touchpoint mapping' },
      { name: 'Physical space direction', desc: 'office/store/events' },
      { name: 'Client journey design', desc: 'every interaction' },
      { name: 'Internal brand system', desc: 'how team lives it' },
    ],
  },
  {
    num: '06',
    illustration: '/pillars/pillar-6.png',
    name: 'Campaign & Content Systems',
    tagline: 'We build HOW you show up consistently',
    items: [
      { name: 'Campaign architecture', desc: 'how campaigns connect' },
      { name: 'Content system', desc: 'content engine structure' },
      { name: 'Founder-led content strategy', desc: 'your voice online' },
      { name: 'Visual template direction', desc: 'repeatable assets' },
    ],
  },
  {
    num: '07',
    illustration: '/pillars/pillar-7.png',
    name: 'Marketing Systems & GTM',
    tagline: 'We build the ENGINE that grows the brand',
    items: [
      { name: 'GTM strategy', desc: 'how you enter/grow market' },
      { name: 'Sales enablement system', desc: 'brand in sales' },
      { name: 'Marketing operations', desc: 'tools + processes' },
      { name: 'Notion OS structure', desc: 'brand command centre' },
    ],
  },
  {
    num: '08',
    illustration: '/pillars/pillar-8.png',
    name: 'Brand Governance',
    tagline: 'We protect the brand LONG TERM',
    items: [
      { name: 'Governance framework', desc: 'who decides what' },
      { name: 'Compliance manual', desc: 'rules + standards' },
      { name: 'Asset management system', desc: 'where things live' },
      { name: 'Brand training program', desc: 'team education' },
    ],
  },
];

/* Category 02 · COMMUNICATION */
export interface CommunicationService {
  num: string;
  name: string;
  tagline: string;
  illustration: string;
  desc: string;
  items: string[];
}

export const COMMUNICATION_SERVICES: CommunicationService[] = [
  {
    num: '01',
    illustration: '/pillars/communication.png',
    name: 'Event & Corporate Campaign',
    tagline: 'We make your brand show up in the room',
    desc: 'End-to-end brand presence for launches, corporate events, and campaigns: from event identity and stage design direction to campaign rollout across every channel, built as one consistent system.',
    items: [
      'Event identity & theming',
      'Stage, booth & venue branding',
      'Campaign creative & rollout',
      'Corporate films & AV assets',
      'Collateral, merch & signage',
      'Post-event content system',
    ],
  },
];

export const INDUSTRIES = [
  {
    num: '01',
    tag: 'REAL ESTATE',
    name: 'Real Estate & Construction',
    desc: 'Sell flats before the hoarding goes up. Premium branding that increases perceived value, and per-sq-ft pricing.',
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
    desc: 'We find the one position in your market that only you can own, so customers stop comparing you on price and start choosing you on identity.',
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
    desc: 'Logo, color, type, imagery, voice, a complete visual language engineered around who you actually are, not a template.',
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
    desc: "Steps 01–04 are the build. This is the payoff: a brand that compounds, more inquiries, higher pricing power, better conversions.",
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
    role: 'Vice President, Global L&D, United States',
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
      'One of the most useful assets he developed was the BrandBook, helping the team create a global, recognized look and feel and a strong brand.',
    name: 'Daniela González Saucedo',
    role: 'HRBP, Mexico',
  },
  {
    quote:
      'His passion for creating is seen through his work. He brings great energy to the team, it was a pleasure working with him at Colgate-Palmolive.',
    name: 'Priya Patti',
    role: 'Teaching Assistant, US',
  },
];

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'Single-pillar engagements ship in 2–4 weeks. Complete brand builds across multiple Branding pillars typically run 6–10 weeks depending on scope. We agree on a roadmap with fixed milestones before we start, so you always know what ships, and when.',
  },
  {
    q: 'Do you work with startups or only large brands?',
    a: "Both. The system was built at Fortune 500 scale, but every engagement is scoped to fit, so startups, D2C brands, and independent professionals get the same strategic approach, without the agency markup.",
  },
  {
    q: "What's included in your services?",
    a: 'Our work lives under two categories: Branding and Communication. Branding covers eight pillars, from Research & Discovery through Brand Governance. Communication covers events and corporate campaigns. Every engagement is strategy-first: positioning and research come before pixels, and each pillar lists exactly what ships.',
  },
  {
    q: 'Do you provide development services too?',
    a: 'Yes. We design and build websites, landing pages, and ecommerce storefronts as part of the same system as your identity, one vendor, one consistent brand, zero handoff friction.',
  },
  {
    q: 'How do we start a project?',
    a: "Book a free brand diagnostic. It's a quick 15-minute call where we audit how your brand currently looks against your competitors. You leave with honest findings either way, if it's a fit, we follow up with a scoped proposal and kickoff date.",
  },
  {
    q: 'Can you help with ongoing updates after launch?',
    a: 'Yes. Our Campaign & Content Systems and Brand Governance pillars cover ongoing content, design support, and brand protection, so your brand stays consistent long after launch day.',
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
