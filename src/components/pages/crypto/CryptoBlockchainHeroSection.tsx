import { COMPANY_NAME } from '../../../data/company';

export default function CryptoBlockchainHeroSection() {
  return (
    <section className="blockchain-hero pt-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-badge mb-3">
                <span className="badge-dot" />
                DIGITAL ASSETS &amp; TOKENIZATION
              </div>

              <h1 className="text-white mb-4">
                Tokenization Infrastructure for Real-World Assets and Digital Securities
              </h1>

              <p className="text-white-70 mb-4">
                {COMPANY_NAME} delivers RWA tokenization, security token platforms, and fractional
                ownership infrastructure that unlocks liquidity, transparency, and global market
                access.
              </p>
              <ul>
                <li>Real-world asset tokenization</li>
                <li>Security token &amp; compliance-ready platforms</li>
                <li>Fractional ownership and digital securities</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="hero-image-wrap">
              <img
                src="/assets/white_label_tokenization_banner.webp"
                alt="Digital asset tokenization"
                className="img-fluid mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
