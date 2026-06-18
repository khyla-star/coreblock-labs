import { Link } from 'react-router-dom';

export default function AiCtaSectionV2Section2() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                                          <h2 className="text-white h2 fw-bold">
                              Build Production-Ready AI Agents with Confidence                    </h2>
                      
                                          <p className="text-white-70 mb-0">
                              Accelerate deployment and reduce risk. Explore our AI services or engage our experts to architect your agent infrastructure.
                          </p>
                      
                  </div>

                  <Link
                    to="/careers"
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
