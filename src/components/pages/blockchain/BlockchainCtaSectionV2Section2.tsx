import { Link } from 'react-router-dom';

export default function BlockchainCtaSectionV2Section2() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                                          <h2 className="text-white h2 fw-bold">
                              Ready to Converge Intelligence and Trust?                    </h2>
                      
                                          <p className="text-white-70 mb-0">
                              Build intelligent, decentralized systems with our AI development services and advanced blockchain capabilities.                    </p>
                      
                  </div>

                  <Link
                    to="/contact"
                    className="ld-card-cta no-animation btn btn-primary live-demo-highlight-2"
                  >
                    Join Us
                  </Link>
                                  
              </div>
          </div>
      </section>
    </>
  );
}
