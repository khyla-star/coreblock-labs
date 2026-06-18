import { Link } from 'react-router-dom';

export default function AiCtaSectionV2Section() {
  return (
    <>
      <section className="cta-section-v2 py-5">
          <div className="container">
              <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

                  <div className="cta-content">

                                          <h2 className="text-white h2 fw-bold">
                              Ready to Deploy Autonomous AI Agents?                    </h2>
                      
                                          <p className="text-white-70 mb-0">
                              Scale intelligent automation faster and explore our AI services or start building your AI agent infrastructure today.
                          </p>
                      
                  </div>

                  <Link
                    to="/contact"
                    className="ld-card-cta no-animation btn btn-primary live-demo-highlight-2"
                  >
                    Discuss Your Use Case
                  </Link>
                                  
              </div>
          </div>
      </section>
    </>
  );
}
