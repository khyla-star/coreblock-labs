export type CareerJob = {
  id: string;
  title: string;
  level: string;
  location: string;
  type?: string;
  profile: string[];
  skills: string[];
  responsibilities: string[];
  education?: string;
};

export type CareerPerson = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  rating: number;
  linkedin?: string;
};

export type CareerAward = {
  id: string;
  name: string;
  image: string;
  href?: string;
};

export const CAREERS_APPLY_EMAIL = 'hello@coreblocklabs.com';

export const CAREERS_RESUME_ACCEPT = '.pdf,.doc,.docx';
export const CAREERS_RESUME_MAX_BYTES = 5 * 1024 * 1024;

const CAREERS_RESUME_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

export function isAcceptedResumeFile(file: File): boolean {
  const extension = file.name.toLowerCase().match(/\.[^.]+$/)?.[0] ?? '';
  const acceptedExtensions = ['.pdf', '.doc', '.docx'];
  return (
    acceptedExtensions.includes(extension) ||
    CAREERS_RESUME_MIME_TYPES.has(file.type)
  );
}

export const founders: CareerPerson[] = [
  {
    id: 'ceo',
    name: 'Marcus Chen',
    role: 'Chief Executive Officer',
    bio: 'Sets company vision and partnerships, guiding CoreBlock Labs toward production-grade AI, blockchain, and Web3 delivery.',
    photo: '/assets/careers/founder-ceo.jpg',
    rating: 5,
    linkedin: 'https://www.linkedin.com/company/coreblocklabs',
  },
  {
    id: 'cto',
    name: 'Elena Vasquez',
    role: 'Chief Technology Officer',
    bio: 'Leads engineering strategy, architecture standards, and the technical culture behind every product we ship.',
    photo: '/assets/careers/founder-cto.jpg',
    rating: 5,
    linkedin: 'https://www.linkedin.com/company/coreblocklabs',
  },
  {
    id: 'head-recruitment',
    name: 'Amara Okafor',
    role: 'Head of Recruitment',
    bio: 'Builds diverse, high-performing teams and ensures every candidate experience reflects our values of clarity and respect.',
    photo: '/assets/careers/founder-recruitment.jpg',
    rating: 4.9,
    linkedin: 'https://www.linkedin.com/company/coreblocklabs',
  },
];

export const openRoles: CareerJob[] = [
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    level: 'Experience: 2–5 years',
    location: 'Remote / Anywhere',
    type: 'Full Time',
    profile: [
      'Experience with smart contracts and Web3 application development',
      'Understanding of EVM or similar blockchain ecosystems',
      'Comfortable working with cross-functional product and engineering teams',
    ],
    skills: [
      'Solidity, Hardhat/Foundry, Web3.js/ethers.js, and security best practices',
      'Token standards, wallet integrations, and on-chain/off-chain architecture',
      'Code review, testing, and deployment on testnet and mainnet',
    ],
    responsibilities: [
      'Develop and audit smart contracts for client platforms',
      'Integrate wallets, tokens, and on-chain logic into product flows',
      'Collaborate with full stack, frontend, and product teams on delivery',
    ],
  },
  {
    id: 'web3-frontend-developer',
    title: 'Web3 Frontend Developer',
    level: 'Experience: 2–5 years',
    location: 'Remote / Anywhere',
    type: 'Full Time',
    profile: [
      'Strong frontend development experience with React and TypeScript',
      'Familiarity with Web3 wallets, dApps, and blockchain UX patterns',
    ],
    skills: [
      'React, Next.js, TypeScript, and modern component architecture',
      'ethers.js/viem, wallet connectors, and transaction flow handling',
      'Responsive design, performance optimization, and accessibility basics',
    ],
    responsibilities: [
      'Build polished dApp interfaces connected to smart contracts and APIs',
      'Implement wallet connect, signing, and on-chain interaction flows',
      'Partner with designers and backend/blockchain engineers on feature delivery',
    ],
  },
  {
    id: 'blockchain-fullstack-developer',
    title: 'Blockchain Full Stack Developer',
    level: 'Experience: 3–6 years',
    location: 'Remote / Anywhere',
    type: 'Full Time',
    profile: [
      'End-to-end web development experience across frontend and backend',
      'Exposure to blockchain integrations, APIs, and Web3 product delivery',
    ],
    skills: [
      'React, Node.js, TypeScript, REST/GraphQL APIs, and SQL/NoSQL databases',
      'Smart contract integration, indexing services, and cloud deployment',
      'Git, code review, and production release practices',
    ],
    responsibilities: [
      'Own features from database and API design through UI implementation',
      'Integrate blockchain services, wallets, and backend systems',
      'Write maintainable, tested code and support production releases',
    ],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    level: 'Experience: 3–6 years',
    location: 'Remote / Anywhere',
    type: 'Full Time',
    profile: [
      'Experience shipping B2B or technical products in software or Web3',
      'Strong stakeholder communication and roadmap planning skills',
    ],
    skills: [
      'Requirements gathering, user stories, and agile delivery',
      'Cross-functional coordination with engineering, design, and clients',
      'Metrics, prioritization, and go-to-market collaboration',
    ],
    responsibilities: [
      'Translate client goals into clear product roadmaps and milestones',
      'Align engineering and design around measurable outcomes',
      'Own release planning, feedback loops, and delivery communication',
    ],
    education: "Bachelor's degree in a relevant field or equivalent experience",
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    level: 'Experience: 2–5 years',
    location: 'Remote / Anywhere',
    type: 'Full Time',
    profile: [
      'Portfolio demonstrating UX/UI for web, mobile, or complex technical products',
      'Ability to simplify blockchain and enterprise workflows for end users',
    ],
    skills: ['Figma, design systems, prototyping, and user research basics'],
    responsibilities: [
      'Create wireframes, flows, and high-fidelity designs for client products',
      'Partner with engineering to ensure feasible, accessible implementations',
      'Iterate based on feedback from stakeholders and users',
    ],
  },
];

export const careerAwards: CareerAward[] = [
  { id: 'iso', name: 'ISO Certified', image: '/assets/iso-certified-1.webp' },
  { id: 'duns', name: 'DUNS Registered', image: '/assets/DUNS-2.webp' },
  {
    id: 'goodfirms',
    name: 'GoodFirms',
    image: '/assets/GoodFirms-top-software-development-companies.webp',
    href: 'https://www.goodfirms.co',
  },
  {
    id: 'selectedfirms',
    name: 'SelectedFirms',
    image: '/assets/selectedfirms.webp',
    href: 'https://selectedfirms.co',
  },
  { id: 'top-app', name: 'Top App Development Companies', image: '/assets/top-app-development-companies.webp' },
  {
    id: 'clutch',
    name: 'Clutch',
    image: '/assets/top-clutch.webp',
    href: 'https://clutch.co',
  },
  {
    id: 'topdevelopers',
    name: 'Top Developers',
    image: '/assets/topdevelopers-top-software-developers-2023.webp',
    href: 'https://www.topdevelopers.co',
  },
];

export function getJobById(jobId: string): CareerJob | undefined {
  return openRoles.find((job) => job.id === jobId);
}

const LOCAL_PHONE_DIGIT_COUNT = { min: 7, max: 12 };

export function isValidCareerPhoneNumber(countryCode: string, localNumber: string): boolean {
  if (!/^\+\d{1,4}$/.test(countryCode.trim())) return false;

  const digits = localNumber.replace(/\D/g, '');
  if (!digits) return false;

  return (
    digits.length >= LOCAL_PHONE_DIGIT_COUNT.min &&
    digits.length <= LOCAL_PHONE_DIGIT_COUNT.max
  );
}

export function formatCareerPhone(countryCode: string, localNumber: string): string {
  const digits = localNumber.replace(/\D/g, '');
  return `${countryCode.trim()} ${digits}`;
}

export function isValidCareerLinkedIn(url: string): boolean {
  const trimmed = url.trim();
  return /^https:\/\/www\.linkedin\.com\/in\/[\w%-]+\/?(\?.*)?$/i.test(trimmed);
}
