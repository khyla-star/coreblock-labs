import { COMPANY_NAME } from '../../../data/company';

export default function Web3BlockchainHeroSection() {
  return (
    <section className="blockchain-hero pt-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge mb-3">
                <span className="badge-dot" />
                WEB3 &amp; DECENTRALIZED SYSTEMS
              </div>

              <h1 className="text-white mb-4">
                Decentralized Platforms for the Next Evolution of the Internet
              </h1>

              <p className="text-white-70 mb-4">
                {COMPANY_NAME} builds production-ready Web3 infrastructure — from dApps and DAO
                systems to digital identity and enterprise-grade decentralized platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="hero-image-wrap">
              <img src="/assets/banner-1.png" alt="Web3 development" className="img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
