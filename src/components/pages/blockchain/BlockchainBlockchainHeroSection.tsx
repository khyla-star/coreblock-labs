import { COMPANY_NAME } from '../../../data/company';

export default function BlockchainBlockchainHeroSection() {
  return (
    <section className="blockchain-hero pt-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge mb-3">
                <span className="badge-dot" />
                BLOCKCHAIN INFRASTRUCTURE
              </div>

              <h1 className="text-white mb-4">
                Enterprise Blockchain Platforms Built for Trust and Scale
              </h1>

              <p className="text-white-70 mb-4">
                {COMPANY_NAME} engineers layer-1 and layer-2 solutions, smart contract ecosystems,
                cross-chain interoperability, and digital identity systems that power the trust
                layer of the digital economy.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="hero-image-wrap">
              <img src="/assets/blockchain.webp" alt="Blockchain infrastructure" className="img-fluid mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
