export default function Web3Web3BusinessValueSection() {
  return (
    <section className="web3-business-value custom-spacing-y">
      <div className="container">
        <div className="section-header-2 text-center mb-5">
          <h2 className="title-2">Unlock Business Value with Web3 Technologies</h2>
          <p className="subtitle mx-auto">
            We provide businesses with the ability to develop and implement Web3 solutions that will
            allow them to innovate at a faster rate than their competitors while allowing them to
            confidently lead in an ever-changing digital economy.
          </p>
        </div>

        <div className="row g-4 bv-grid">
          <div className="col-lg-6">
            <div className="bv-card bv-card--featured h-100">
              <div className="bv-card-visual">
                <img
                  src="/assets/blockchain_technology.png"
                  alt="Blockchain technology illustration"
                />
              </div>
              <h3 className="bv-card-title">Blockchain Technology</h3>
              <p className="bv-card-text text-white-70">
                Blockchain technology ensures transparent, immutable transaction records across
                distributed networks, providing full traceability, auditability, and trusted execution
                for businesses and consumers. We also implement advanced blockchain architectures such
                as <a className="no-break" href="/blockchain">Cosmos SDK</a> and{' '}
                <a className="no-break" href="/blockchain">Polkadot parachains</a> for scalable
                ecosystems.
              </p>
            </div>
          </div>

          <div className="col-lg-6 bv-right-cards d-flex flex-column gap-4">
            <div className="bv-card bv-card--compact flex-grow-1">
              <div className="bv-card-visual">
                <img src="/assets/decentralization.png" alt="Decentralization illustration" />
              </div>
              <h3 className="bv-card-title">Decentralization</h3>
              <p className="bv-card-text text-white-70">
                Web 3.0 shifts control from centralized intermediaries to distributed networks, giving
                users ownership of their data and assets while enabling transparent, trustless digital
                systems.
              </p>
            </div>

            <div className="bv-card bv-card--compact flex-grow-1">
              <div className="bv-card-visual">
                <img
                  src="/assets/security_privacy.png"
                  alt="Enhanced security and privacy illustration"
                />
              </div>
              <h3 className="bv-card-title">Enhanced Security and Privacy</h3>
              <p className="bv-card-text text-white-70">
                Web3 eliminates single points of failure with decentralized architectures, giving users
                full control over data access and permissions while ensuring privacy and protection
                from unauthorized changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
