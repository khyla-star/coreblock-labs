export default function CryptoWeb3ApproachSection() {
  return (
    <>
      <section className="web3-approach custom-spacing-y ">
          <div className="container">

              <div className="section-header-2 text-center">
                  <h2 className="title-2">Execution Architecture of White-Label Tokenization</h2>
                  <p className="subtitle">This structure governs how white-label systems handle asset lifecycle, platform operations, and decision controls without breaking operational continuity.</p>
              </div>

              <div className="w3a-wrap">

                  <div className="w3a-spine">
                      <div className="w3a-spine-track"></div>
                      <div className="w3a-spine-fill"></div>
                  </div>

                  
                      <div className="w3a-row">

                          {/* LEFT STEP */}
                          <div className="w3a-side w3a-side--left">

                              <div className="w3a-card w3a-card--left">

                                  <div className="w3a-icon">
                                                                                                          <img src="/assets/distribute_plaining.svg" alt="System Level Architecture Design" className="" />
                                                                  </div>

                                  <div className="w3a-text">

                                      <h4 className="w3a-title">
                                          System Level Architecture Design                                </h4>

                                      <p className="w3a-desc">
                                          The platform runs on a layered architecture where blockchain, business logic, and user experience stay separate, ensuring stability, scalability, and smooth performance under real market load.                                 </p>

                                      
                                  </div>
                              </div>

                              <div className="w3a-badge">01</div>

                              <div className="w3a-hline">
                                  <div className="w3a-hline-fill"></div>
                              </div>

                          </div>

                          
                              {/* RIGHT STEP */}
                              <div className="w3a-side w3a-side--right">

                                  <div className="w3a-hline">
                                      <div className="w3a-hline-fill"></div>
                                  </div>

                                  <div className="w3a-badge">02</div>

                                  <div className="w3a-card w3a-card--right">

                                      <div className="w3a-text w3a-text--right">

                                          <h4 className="w3a-title">
                                              Unified Admin Control Console                                    </h4>

                                          <p className="w3a-desc">
                                              All platform operations are managed through a single console where teams can control assets, users, permissions, and configurations in real time without technical dependency.                                    </p>

                                          
                                      </div>

                                      <div className="w3a-icon">
                                                                                                                      <img src="/assets/Admin-Control.svg" alt="Unified Admin Control Console" className="" />
                                                                          </div>

                                  </div>

                              </div>

                          
                      </div>

                  
                      <div className="w3a-row">

                          {/* LEFT STEP */}
                          <div className="w3a-side w3a-side--left">

                              <div className="w3a-card w3a-card--left">

                                  <div className="w3a-icon">
                                                                                                          <img src="/assets/governence.svg" alt="Governance and Lifecycle Management" className="" />
                                                                  </div>

                                  <div className="w3a-text">

                                      <h4 className="w3a-title">
                                          Governance and Lifecycle Management                                </h4>

                                      <p className="w3a-desc">
                                          Built-in governance rules guide compliance and approvals while the system manages the full asset lifecycle from issuance to updates, ensuring consistent control as the platform scales.                                </p>

                                      
                                  </div>
                              </div>

                              <div className="w3a-badge">03</div>

                              <div className="w3a-hline">
                                  <div className="w3a-hline-fill"></div>
                              </div>

                          </div>

                          
                      </div>

                  
              </div>

                  </div>
      </section>
    </>
  );
}
