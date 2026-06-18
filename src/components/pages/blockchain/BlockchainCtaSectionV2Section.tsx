import { Link } from 'react-router-dom';

export default function BlockchainCtaSectionV2Section() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                                          <h2 className="text-white h2 fw-bold">
                              Blockchain Development that Delivers Real ROI                    </h2>
                      
                                          <p className="text-white-70 mb-0">
                              Secure solutions designed to grow your business at competitive market pricing.                    </p>
                      
                  </div>

                  <Link
                    to="/contact"
                    className="ld-card-cta no-animation btn btn-primary live-demo-highlight-2"
                  >
                    Get a Free Expert Consultation
                  </Link>
                                  
              </div>
          </div>
      </section>
    </>
  );
}
