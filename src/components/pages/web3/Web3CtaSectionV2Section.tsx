import { Link } from 'react-router-dom';

export default function Web3CtaSectionV2Section() {
  return (
    <>
      <section className="cta-section-v2 py-5">
        <div className="container">
          <div className="d-flex gap-4 align-items-center justify-content-between flex-lg-nowrap flex-wrap">

            <div className="cta-content">

              <h2 className="text-white h2 fw-bold">
                Ready to Build a Truly Decentralized Web3 Platform?                    
              </h2>

              <p className="text-white-70 mb-0">
                Connect with our Web3 development experts to design secure, and user-owned decentralized solutions customized for your business.                    
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
