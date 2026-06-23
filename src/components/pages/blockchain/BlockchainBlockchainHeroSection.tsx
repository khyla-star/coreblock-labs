import { COMPANY_NAME } from '../../../data/company';

export default function BlockchainBlockchainHeroSection() {
  return (
    <section className="blockchain-hero">
      <div className="container-fluid">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="carousel-content">
                <span className="hero-eyebrow">BLOCKCHAIN INFRASTRUCTURE</span>

                <h1 className="hero-title text-white mb-4">
                  Enterprise Blockchain Platforms Built for Trust and Scale
                </h1>

                <p className="text-white-70 mb-4">
                  {COMPANY_NAME} engineers layer-1 and layer-2 solutions, smart contract ecosystems,
                  cross-chain interoperability, and digital identity systems that power the trust
                  layer of the digital economy.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <div className="hero-image-wrap">
                <img
                  src="/assets/blockchain.webp"
                  alt="Blockchain infrastructure"
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
