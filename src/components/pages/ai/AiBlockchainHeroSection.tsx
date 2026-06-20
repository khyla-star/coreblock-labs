import { COMPANY_NAME } from '../../../data/company';

export default function AiBlockchainHeroSection() {
  return (
    <section className="blockchain-hero">
      <div className="container-fluid">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="carousel-content">
                <div className="hero-badge mb-3">
                  <span className="badge-dot" />
                  AI-POWERED BLOCKCHAIN
                </div>

                <h1 className="text-white mb-4">
                  Intelligent Automation on Trusted Digital Infrastructure
                </h1>

                <p className="text-white-70 mb-4">
                  {COMPANY_NAME} combines AI agents, predictive intelligence, and blockchain analytics
                  with secure, transparent infrastructure — building trust and powering intelligence.
                </p>
                <ul>
                  <li>AI Agents for Web3</li>
                  <li>Risk &amp; Fraud Detection</li>
                  <li>Compliance Automation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <div className="hero-image-wrap">
                <img
                  src="/assets/ai-page-hero.svg"
                  alt="Blockchain network with connected data blocks"
                  className="img-fluid mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
