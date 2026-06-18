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
    id: 'ai-engineer-intern',
    title: 'AI Engineer',
    level: 'Trainee / Intern',
    location: 'Mumbai',
    profile: [
      'Basic understanding of programming (Python preferred)',
      'Familiarity with AI/ML concepts such as machine learning, deep learning, and NLP',
      'Exposure to TensorFlow, PyTorch, or Scikit-learn is preferred',
    ],
    skills: [
      'Data preprocessing, analysis, and model training fundamentals',
      'REST APIs and basic software development lifecycle knowledge',
      'Strong problem-solving and communication skills',
    ],
    responsibilities: [
      'Assist in developing and implementing AI/ML models',
      'Support data collection, cleaning, and preprocessing',
      'Participate in requirement understanding, testing, and documentation',
    ],
    education: "Bachelor's in Computer Science, IT, AI, Data Science, or related field",
  },
  {
    id: 'mvc-dotnet',
    title: 'MVC .Net Developer',
    level: 'Experience: 2–7 years',
    location: 'Mumbai',
    profile: [
      'Working knowledge of C#, .NET MVC, Entity Framework, LINQ, and jQuery',
      'Experience with MS SQL and Oracle databases',
    ],
    skills: [
      'MVC.NET and REST-based web service development',
      'ASP.NET, MSSQL, Oracle, and Entity Framework',
      'Requirement elicitation and SDLC methodologies',
    ],
    responsibilities: [
      'Analyze user requirements and document specifications',
      'Develop and maintain web applications in the .NET stack',
      'Maintain daily reporting and development documentation',
    ],
    education: "Bachelor's degree",
  },
  {
    id: 'react-developer',
    title: 'Experienced React JS Developer',
    level: '3–8 years of experience',
    location: 'Remote / Mumbai',
    type: 'Full Time',
    profile: ['3–8 years of experience in frontend web development'],
    skills: [
      'JavaScript, React.js, Redux, TypeScript, ES6, NPM, Webpack or Babel',
      'HTML5, CSS, Bootstrap, Material UI, and charting libraries',
      'RESTful APIs, React Hooks, Context, and Git version control',
    ],
    responsibilities: [
      'Build scalable frontend applications from scratch using React',
      'Collaborate on component architecture and state management',
      'Deliver polished UI experiences integrated with backend services',
    ],
  },
  {
    id: 'dotnet-lead',
    title: 'Project Lead / Technical Manager',
    level: 'Experience: 8+ years',
    location: 'Mumbai',
    profile: ['Strong background in .NET MVC and enterprise application delivery'],
    skills: [
      'Technical leadership and team mentoring',
      'Architecture design, code review, and delivery planning',
      'Client communication and stakeholder management',
    ],
    responsibilities: [
      'Lead development teams across planning, execution, and release',
      'Own technical decisions and quality standards',
      'Coordinate cross-functional delivery with product and QA',
    ],
    education: "Bachelor's degree in a relevant technical field",
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Developer',
    level: 'Experience: 2–5 years',
    location: 'Remote / Mumbai',
    type: 'Full Time',
    profile: [
      'Experience with smart contracts and Web3 application development',
      'Understanding of EVM or similar blockchain ecosystems',
    ],
    skills: ['Solidity, Hardhat/Foundry, Web3.js/ethers.js, and security best practices'],
    responsibilities: [
      'Develop and audit smart contracts for client platforms',
      'Integrate wallets, tokens, and on-chain logic into product flows',
      'Collaborate with full stack and product teams on delivery',
    ],
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    level: 'Experience: 3–6 years',
    location: 'Mumbai',
    type: 'Full Time',
    profile: ['Strong experience across frontend and backend web development'],
    skills: ['React, Node.js, TypeScript, SQL/NoSQL, REST APIs, and cloud deployment'],
    responsibilities: [
      'Own features from database schema to UI implementation',
      'Write maintainable, tested code and participate in code reviews',
      'Support production releases and incident resolution',
    ],
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    level: 'Experience: 2–5 years',
    location: 'Remote / Mumbai',
    type: 'Full Time',
    profile: ['Portfolio demonstrating UX/UI for web or mobile products'],
    skills: ['Figma, design systems, prototyping, and user research basics'],
    responsibilities: [
      'Create wireframes, flows, and high-fidelity designs for client products',
      'Partner with engineering to ensure feasible, accessible implementations',
      'Iterate based on feedback from stakeholders and users',
    ],
  },
  {
    id: 'python',
    title: 'Python Developer',
    level: 'Experience: 1–4 years',
    location: 'Mumbai',
    profile: ['Strong Python development fundamentals'],
    skills: ['Python, web frameworks, databases, and API development'],
    responsibilities: [
      'Build backend services, scripts, and automation tooling',
      'Collaborate on scalable architecture and integrations',
      'Contribute to testing and continuous improvement',
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
