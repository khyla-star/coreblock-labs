export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  iconClass: 'icon-purple' | 'icon-blue' | 'icon-green' | 'icon-pink';
};

export const developmentServices: ServiceItem[] = [
  {
    title: 'Blockchain Infrastructure',
    description:
      'Layer-1 and Layer-2 solutions, enterprise blockchain platforms, smart contract ecosystems, and cross-chain interoperability.',
    icon: '/assets/blockchain-development.svg',
    iconAlt: 'Blockchain Infrastructure',
    iconClass: 'icon-green',
  },
  {
    title: 'Digital Assets & Tokenization',
    description:
      'RWA tokenization, security token platforms, fractional ownership, and digital securities infrastructure.',
    icon: '/assets/rwa-tokenization.svg',
    iconAlt: 'Digital Assets and Tokenization',
    iconClass: 'icon-pink',
  },
  {
    title: 'Web3 Financial Systems',
    description:
      'DeFi platforms, digital wallets, crypto exchanges, stablecoin infrastructure, and payment settlement networks.',
    icon: '/assets/defi-platform-solutions.svg',
    iconAlt: 'Web3 Financial Systems',
    iconClass: 'icon-blue',
  },
  {
    title: 'AI-Powered Blockchain',
    description:
      'AI agents for Web3, blockchain analytics, fraud detection, predictive intelligence, and compliance automation.',
    icon: '/assets/ai-solutions.svg',
    iconAlt: 'AI-Powered Blockchain',
    iconClass: 'icon-purple',
  },
  {
    title: 'Digital Identity & DAOs',
    description:
      'Decentralized identity systems, DAO infrastructure, and governance platforms built for transparency and scale.',
    icon: '/assets/digital-transformation.svg',
    iconAlt: 'Digital Identity and DAOs',
    iconClass: 'icon-pink',
  },
  {
    title: 'Enterprise AI Systems',
    description:
      'Machine learning, intelligent automation, and decision-support platforms integrated with trusted digital infrastructure.',
    icon: '/assets/machine-learning.svg',
    iconAlt: 'Enterprise AI Systems',
    iconClass: 'icon-blue',
  },
  {
    title: 'Crypto Exchange Platforms',
    description:
      'Secure trading infrastructure with advanced matching engines, liquidity systems, and enterprise-grade protection.',
    icon: '/assets/crypto-exchanges.svg',
    iconAlt: 'Crypto Exchange Platforms',
    iconClass: 'icon-purple',
  },
  {
    title: 'NFT & Digital Marketplaces',
    description:
      'Marketplaces and asset platforms where ownership is verified, programmable, liquid, and secure on-chain.',
    icon: '/assets/nft-marketplace.svg',
    iconAlt: 'NFT and Digital Marketplaces',
    iconClass: 'icon-green',
  },
  {
    title: 'Web3 Gaming Economies',
    description:
      'Play-to-earn and on-chain gaming platforms that turn player engagement into sustainable digital economies.',
    icon: '/assets/p2e-game-development.svg',
    iconAlt: 'Web3 Gaming Economies',
    iconClass: 'icon-green',
  },
];
