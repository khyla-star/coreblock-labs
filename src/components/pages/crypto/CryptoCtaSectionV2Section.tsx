import { Link } from 'react-router-dom';

export default function CryptoCtaSectionV2Section() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                                          <h2 className="text-white h2 fw-bold">
                              Launch your Tokenization Platform Faster                    </h2>
                      
                                          <p className="text-white-70 mb-0">
                              Use a ready-made white-label infrastructure to avoid complex blockchain development and focus on scaling your business.                    </p>
                      
                  </div>

                  <Link
                    to="/careers"
                    className="ld-card-cta no-animation btn btn-primary live-demo-highlight-2"
                  >
                    Start Building Now
                  </Link>
                                  
              </div>
          </div>
      </section>
    </>
  );
}
