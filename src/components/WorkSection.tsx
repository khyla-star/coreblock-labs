import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useWorkSection } from '../hooks/useWorkSection';

const workProjects = [
  {
    id: 'work-card-0',
    title: 'Maica24',
    description:
      'Maica24 is an AI-powered voice agent designed to transform how businesses interact with customers. It automates voice conversations across use cases such as customer support, reservations, lead conversion, and appointment scheduling, providing natural, human-like interactions powered by advanced voice AI.',
    stats: [
      { label: 'AI Conversations', value: '45', unit: 'K+' },
      { label: 'Businesses Enabled', value: '100', unit: '+' },
    ],
    mediaClass: 'item_media_1',
    image: '/assets/maica-1.webp',
    imageAlt: 'Maica24',
  },
  {
    id: 'work-card-1',
    title: 'Tria',
    description:
      'Tria wallet is a next-generation Web3 wallet designed to ease the complexities of the mainstream channels. It provides a one-stop-shop for the users to trade, stake, send/receive, mint, or explore decentralized apps.',
    stats: [
      { label: 'Wallets Created', value: '50', unit: 'K+' },
      { label: 'Chains Supported', value: '20', unit: '+' },
    ],
    mediaClass: 'item_media_2',
    image: '/assets/tria-1.webp',
    imageAlt: 'Tria',
  },
  {
    id: 'work-card-2',
    title: 'Mejhool',
    description:
      'Mejhool is a highly efficient decentralized web and mobile solution that offers text messaging, peer-to-peer file transfer, and voice-over-IP services. Users can send text messages, make voice/video calls, and share files while ensuring complete privacy and security.',
    stats: [
      { label: 'Encrypted Messages', value: '9', unit: 'M+' },
      { label: 'Active Nodes', value: '3', unit: 'k+' },
    ],
    mediaClass: 'item_media_3',
    image: '/assets/mejhool-1.webp',
    imageAlt: 'Mejhool',
  },
  {
    id: 'work-card-3',
    title: 'Auto Bids',
    description:
      'An AI-powered tool that automated the complete job-bidding process on Upwork. Auto Bid encourages startups, freelancers, and agencies to streamline their job search and acquire projects with minimal effort. With a plethora of features designed specifically for the platform users, it makes managing multiple jobs applications easy and efficient.',
    stats: [
      { label: 'Proposals Automated', value: '12', unit: 'K+' },
      { label: 'Faster Job Acquisition', value: '3.6', unit: 'X' },
    ],
    mediaClass: 'item_media_4',
    image: '/assets/autobid-1.webp',
    imageAlt: 'Auto Bids',
  },
  {
    id: 'work-card-4',
    title: 'Bookeep',
    description:
      'Bookeep is an innovative, AI-powered invoice management system that revolutionizes invoice handling. The platform successfully automates invoice management, allowing businesses to streamline their accounting process and build efficiency.',
    stats: [
      { label: 'Invoices Processed', value: '56', unit: 'K+' },
      { label: 'Faster Accounting Cycles', value: '60', unit: '%' },
    ],
    mediaClass: 'item_media_5',
    image: '/assets/bookeep-1.webp',
    imageAlt: 'Bookeep',
  },
  {
    id: 'work-card-5',
    title: 'Phantom Galaxies',
    description:
      'Phantom Galaxies is an expansive web3, sci-fi MMO where players pilot giant mechs, explore galaxies, and own every asset they earn or acquire. It is a hybrid experience that blends traditional high-quality gameplay with decentralized asset ownership.',
    stats: [
      { label: 'Registered pilots', value: '56', unit: 'K+' },
      { label: 'NFT Assets', value: '66', unit: 'K+' },
    ],
    mediaClass: 'item_media_6',
    image: '/assets/phantom-1.webp',
    imageAlt: 'Phantom Galaxies',
    imageClassName: 'item_media w-100 nsfw-detected',
  },
  {
    id: 'work-card-6',
    title: 'NemoLand Kingdom',
    description:
      'NemoLand Kingdom is a groundbreaking metaverse that redefines the way we experience, create and interact. It is a vibrant ecosystem that allows users to live, work, and socialize supported by the seamless functionality of HZM cryptocurrency.',
    stats: [
      { label: 'NFT Assets Created', value: '85', unit: 'K+' },
      { label: 'Metaverse Users', value: '40', unit: 'K' },
    ],
    mediaClass: 'item_media_7',
    image: '/assets/nemoland-1.webp',
    imageAlt: 'NemoLand Kingdom',
  },
] satisfies Array<{
  id: string;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string; unit: string }>;
  mediaClass: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}>;

export default function WorkSection() {
  const { sectionRef, slideCount } = useWorkSection();

  const scrollToCard = useCallback((index: number) => {
    document.getElementById(`work-card-${index}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <section
      id="work-section"
      ref={sectionRef}
      className="Work-section custom-spacing-y bg-white"
    >
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2 className="title">Our Recent Work That are Creating Ripples in the Market</h2>
        </div>
      </div>

      <div className="scroll-section vertical-section">
        <div className="container-fluid">
          <div className="scroll_wrapper">
            <div role="list" className="card_stack_wrap">
              {workProjects.map((project) => (
                <div
                  key={project.id}
                  role="listitem"
                  className="card_stack_item"
                  id={project.id}
                >
                  <div className="item_content">
                    <div className="card-info">
                      <div className="info_inn">
                        <h3 className="title m-0">{project.title}</h3>
                        <div className="description">
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="stats_wrap">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="stat">
                          <span className="stat-label">{stat.label}</span>
                          <h3 className="stat-full">
                            <span className="countup-value">{stat.value}</span>
                            <span className="stat-unit">{stat.unit}</span>
                          </h3>
                        </div>
                      ))}
                    </div>

                    <div className="cta-btn-wrapper text-center mt-md-5 mt-4">
                      <Link
                        to="/careers"
                        className="btn btn-primary ld-card-cta no-animation live-demo-highlight-2"
                      >
                        Join Us
                      </Link>
                    </div>
                  </div>

                  <div className={`media_wrap ${project.mediaClass}`}>
                    <img
                      src={project.image}
                      className={project.imageClassName ?? 'item_media w-100'}
                      alt={project.imageAlt}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="card-stack-nav d-lg-flex d-none align-items-center">
              <div className="card-stack-dots">
                {Array.from({ length: slideCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`card-stack-dot${index === 0 ? ' active' : ''}`}
                    data-slide={index}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="card-stack-nav card-stack-nav--mobile d-lg-none">
              <div className="card-stack-dots">
                {Array.from({ length: slideCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    className="card-stack-dot"
                    aria-label={`Jump to project ${index + 1}`}
                    onClick={() => scrollToCard(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
