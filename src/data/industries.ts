export type BentoSlot =
  | 'bento-large'
  | 'bento-right-top'
  | 'bento-right-bottom'
  | 'bento-bottom-left'
  | 'bento-bottom-right';

export type IndustryBentoCard = {
  slot: BentoSlot;
  title: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export type IndustryBentoSlide = {
  id: string;
  cards: IndustryBentoCard[];
};

export const industryBentoSlides: IndustryBentoSlide[] = [
  {
    id: 'industries-set-1',
    cards: [
      {
        slot: 'bento-large',
        title: 'Finance & Fintech',
        image: '/assets/finance-fintech.webp',
        imageAlt: 'Finance & Fintech',
        tags: [
          'DeFi solutions',
          'Fraud detection & credit scoring',
          'Transaction verification',
          'Smart contract–based lending & settlements',
        ],
      },
      {
        slot: 'bento-right-top',
        title: 'Education & EdTech',
        image: '/assets/education.webp',
        imageAlt: 'Education & EdTech',
        tags: [
          'Adaptive learning',
          'Blockchain-based ID check',
          'Student analytics',
          'Performance tracking',
          'Secure digital certificates',
        ],
      },
      {
        slot: 'bento-right-bottom',
        title: 'Gaming & Entertainment',
        image: '/assets/gaming-entertainment.webp',
        imageAlt: 'Gaming & Entertainment',
        tags: [
          'P2E ecosystems',
          'NFT integration',
          'Metaverse-ready GameFi',
          'Player behavior & retention analytics',
        ],
      },
      {
        slot: 'bento-bottom-left',
        title: 'Retail & E-Commerce',
        image: '/assets/retail.webp',
        imageAlt: 'Retail & E-Commerce',
        tags: [
          'AI-driven personalization',
          'Product authenticity & traceability',
          'Smart pricing',
          'Demand prediction',
        ],
      },
      {
        slot: 'bento-bottom-right',
        title: 'SaaS & Enterprise Platforms',
        image: '/assets/sass.webp',
        imageAlt: 'SaaS & Enterprise Platforms',
        tags: [
          'AI-driven workflow automation',
          'Blockchain-based access control',
          'Intelligent analytics',
          'Reporting engines',
        ],
      },
    ],
  },
  {
    id: 'industries-set-2',
    cards: [
      {
        slot: 'bento-large',
        title: 'Healthcare',
        image: '/assets/healthcare.webp',
        imageAlt: 'Healthcare',
        tags: [
          'Secure virtual consultations',
          'AI-powered diagnostics',
          'EHR/EMR system integrations',
          'HIPAA-compliant cloud storage',
        ],
      },
      {
        slot: 'bento-right-top',
        title: 'Real Estate & PropTech',
        image: '/assets/real-estate.webp',
        imageAlt: 'Real Estate & PropTech',
        tags: [
          'Tokenized RE assets',
          'Smart contracts for leasing & transactions',
          'AI-powered property valuation',
          'Secure document management',
        ],
      },
      {
        slot: 'bento-right-bottom',
        title: 'Manufacturing',
        image: '/assets/manufacturing.webp',
        imageAlt: 'Manufacturing',
        tags: [
          'AI-driven predictive maintenance',
          'Blockchain-based supplier check',
          'Smart factory automation',
          'Secure machine-to-machine transactions',
        ],
      },
      {
        slot: 'bento-bottom-left',
        title: 'Energy & Utilities',
        image: '/assets/energy-utilities.webp',
        imageAlt: 'Energy & Utilities',
        tags: [
          'Energy trading platforms',
          'AI-powered demand forecasting & grid optimization',
          'Smart contracts for billing',
          'Carbon credit tracking',
        ],
      },
      {
        slot: 'bento-bottom-right',
        title: 'Supply Chain & Logistics',
        image: '/assets/supply-chain.webp',
        imageAlt: 'Supply Chain & Logistics',
        tags: [
          'Real-time asset tracking',
          'AI-based inventory optimization',
          'Smart contract automation',
        ],
      },
    ],
  },
];
