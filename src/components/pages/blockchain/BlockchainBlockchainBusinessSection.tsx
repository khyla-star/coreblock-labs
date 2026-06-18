import { Link } from 'react-router-dom';

export default function BlockchainBlockchainBusinessSection() {
  return (
    <>
      <section className="blockchain-business custom-spacing-y">
              <div className="container">
                  <div className="row align-items-center">

                      {/* LEFT CONTENT */}
                      <div className="col-lg-6 mb-5 mb-lg-0">
                          <div className="business-content text-start">

                                                          <h2 className="text-white mb-4">
                                      Blockchain Technology Explained for Business Use                            </h2>
                              
                                                          <p className="text-white-50 mb-5">
                                      Blockchain is a distributed, immutable ledger that records transactions across multiple nodes instead of a single centralized system. Each transaction is time-stamped, encrypted, and permanently linked, ensuring transparency.                            </p>
                                                      
                                                          <div className="business-feature-list mb-5">

                                                                                                                  <div className="business-feature-item mb-4">

                                                                                                  <div className="feature-icon">
                                                          <img src="/assets/data-records.svg" alt="data-records" className="" />
                                                      </div>
                                                  
                                                                                                  <span className="text-white">
                                                          Tamper-proof data records across organizations                                                </span>
                                                  
                                              </div>
                                                                                                                                                      <div className="business-feature-item mb-4">

                                                                                                  <div className="feature-icon">
                                                          <img src="/assets/programmable-trust.svg" alt="programmable-trust" className="" />
                                                      </div>
                                                  
                                                                                                  <span className="text-white">
                                                          Programmable trust through smart contracts                                                </span>
                                                  
                                              </div>
                                                                                                                                                      <div className="business-feature-item mb-4">

                                                                                                  <div className="feature-icon">
                                                          <img src="/assets/automated-execution-1.svg" alt="automated-execution" className="" />
                                                      </div>
                                                  
                                                                                                  <span className="text-white">
                                                          Automated execution of business rules                                                </span>
                                                  
                                              </div>
                                                                                                                                                      <div className="business-feature-item mb-4">

                                                                                                  <div className="feature-icon">
                                                          <img src="/assets/intermediaries.svg" alt="intermediaries" className="" />
                                                      </div>
                                                  
                                                                                                  <span className="text-white">
                                                          Reduced reliance on intermediaries                                                </span>
                                                  
                                              </div>
                                                                          
                                  </div>
                              
                                                          <div className="business-quote-box mt-5 mb-5">
                                      <p className="mb-0 italic">
                                          We help organizations convert this technology into secure, compliant, and scalable blockchain solutions aligned with real business objectives.                                </p>
                                  </div>
                              
                                                          <div className="mt-4 business-cta">
                                                                          <Link to="/contact" className="btn btn-primary live-demo-highlight-2">
                                              Talk with Team                                    </Link>
                                                                  </div>
                              
                          </div>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="col-lg-6 ps-lg-5">
                          <div className="business-image-wrap text-center">

                                                          <img src="/assets/business-use.jpg" alt="business-use" className="img-fluid rounded-4 shadow-lg" />
                              
                          </div>
                      </div>

                  </div>
              </div>
          </section>
    </>
  );
}
