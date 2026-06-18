import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container-fluid">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                    <h2 className="text-white h2 fw-bold">
                      Building Trust. Powering Intelligence.
                    </h2>

                    <p className="text-white-70 mb-0">
                      Partner with CoreBlock Labs to engineer blockchain infrastructure, digital
                      asset ecosystems, and AI-powered systems built for long-term adoption.
                    </p>
                      
                  </div>

                  <Link
                    to="/contact"
                    className="ld-card-cta no-animation btn btn-primary live-demo-highlight-2"
                  >
                    Talk with Team
                  </Link>
                                  
              </div>
          </div>
      </section>
    </>
  );
}
