export type ProfileTestimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  imageAlt: string;
};

export const profileTestimonials: ProfileTestimonial[] = [
  {
    id: 'sara-moioli',
    name: 'Sara Moioli',
    role: 'HR RECRUITMENT',
    quote:
      'CoreBlock Labs engineered an AI-powered hiring platform that slashed time-to-hire and elevated talent quality across our teams. They build systems that scale people as powerfully as they scale technology.',
    image: '/assets/testimonials/sara-moioli.webp',
    imageAlt: 'Sara Moioli',
  },
  {
    id: 'david-mihal',
    name: 'David Mihal',
    role: 'WEB3 DEVELOPMENT',
    quote:
      'CoreBlock Labs delivered audit-ready smart contracts, resilient Web3 architecture, and flawless on-chain integrations. Our platform went live with enterprise confidence from day one.',
    image: '/assets/testimonials/david-mihal.webp',
    imageAlt: 'David Mihal',
  },
  {
    id: 'andrew-khizhnyak',
    name: 'Andrew Khizhnyak',
    role: 'Solana Development',
    quote:
      'CoreBlock Labs built our Solana gaming infrastructure for sub-second finality and seamless in-game transactions. Players feel the speed — we trust the architecture.',
    image: '/assets/testimonials/andrew-khizhnyak.webp',
    imageAlt: 'Andrew Khizhnyak',
  },
  {
    id: 'arthur-s',
    name: 'Arthur S',
    role: '3D DESIGN',
    quote:
      'CoreBlock Labs turned our product vision into stunning 3D assets and interactive experiences that strengthened our brand and drove measurable engagement.',
    image: '/assets/testimonials/arthur-s.webp',
    imageAlt: 'Arthur S',
  },
  {
    id: 'lincoln-murr',
    name: 'Lincoln Murr',
    role: 'MOBILE DEVELOPMENT',
    quote:
      'From prototype to App Store launch, CoreBlock Labs delivered mobile performance and UX at enterprise grade. They take ownership from first commit to final release.',
    image: '/assets/testimonials/lincoln-murr.webp',
    imageAlt: 'Lincoln Murr',
  },
  {
    id: 'jordi-baylina',
    name: 'Jordi Baylina',
    role: 'DeFi',
    quote:
      'CoreBlock Labs architected our DeFi lending protocol with institutional-grade security and transparent on-chain logic — unlocking capital efficiency traditional finance could not match.',
    image: '/assets/testimonials/jordi-baylina.webp',
    imageAlt: 'Jordi Baylina',
  },
];
