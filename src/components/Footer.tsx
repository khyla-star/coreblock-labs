import { Link } from 'react-router-dom';
import { COMPANY_EMAIL, COMPANY_LINKEDIN, COMPANY_LOGO, COMPANY_NAME } from '../data/company';
import './Footer.css';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'AI', to: '/ai' },
  { label: 'Blockchain', to: '/blockchain' },
  { label: 'Web3', to: '/web3' },
  { label: 'Crypto', to: '/crypto' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export default function Footer() {
  return (
    <footer className="main-footer footer-modern custom-spacing-t">
      <div className="footer-bg-text">COREBLOCK LABS</div>

      <div className="footer-modern-inner container-fluid">
        <div className="footer-modern-top">
          <Link to="/" className="footer-logo-link" aria-label={`${COMPANY_NAME} home`}>
            <img
              src={COMPANY_LOGO}
              alt=""
              width={56}
              height={56}
              className="footer-logo-mark"
            />
            <span className="footer-logo-text">
              CoreBlock <span className="footer-logo-accent">Labs</span>
            </span>
          </Link>
        </div>

        <div className="footer-modern-grid">
          <section className="footer-modern-panel footer-modern-panel--brand">
            <h3 className="footer-column-title">Follow Us</h3>

            <p className="footer-follow-text">
              Stay connected and follow us on social media for the latest updates, insights,
              and innovations.
            </p>

            <div className="footer-social-grid">
              <a
                href="https://t.me/coreblocklabs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-telegram"
                aria-label="Telegram"
              >
                <img src="/assets/icon-telegram.svg" width={19} height={19} alt="Telegram" />
              </a>
              <a
                href={COMPANY_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon social-linkedin"
                aria-label="LinkedIn"
              >
                <img src="/assets/linkedin.svg" width={19} height={19} alt="LinkedIn" />
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="social-icon social-email"
                aria-label="Email"
              >
                <img src="/assets/icon-email.svg" width={19} height={19} alt="Email" />
              </a>
            </div>
          </section>

          <section className="footer-modern-panel footer-modern-panel--links">
            <h3 className="footer-column-title">Quick Links</h3>

            <ul className="footer-links footer-links--grid">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-modern-panel footer-modern-panel--connect">
            <h3 className="footer-column-title">Connect</h3>

            <div className="footer-connect-group">
              <h4 className="footer-sub-title">Sales</h4>

              <div className="footer-contact-item">
                <a href="mailto:hello@coreblocklabs.com">
                  <img src="/assets/email.svg" alt="Email" />
                  hello@coreblocklabs.com
                </a>
              </div>

              <div className="footer-contact-item">
                <a href="tel:+971 50 293 1801">
                  <img src="/assets/phone.svg" alt="Phone" />
                  +971 50 293 1801
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-bottom footer-modern-bottom">
          <p className="footer-copyright mb-0">
            © 2026 CoreBlock Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
