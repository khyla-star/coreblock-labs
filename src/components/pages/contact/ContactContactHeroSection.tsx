import { useContactForm } from '../../../hooks/useContactForm';
import { COMPANY_EMAIL, COMPANY_TAGLINE } from '../../../data/company';

export default function ContactContactHeroSection() {
  useContactForm({ referer: '/contact-us/' });

  return (
      <section className="contact-hero" id="contact-hero">
      <div className="container-fluid">
                  <div className="row g-4">
                      <div className="col-lg-5">
                          <div className="project-panel">
                              <div className="mb-4">
                                  <h2>Your Project Starts Here</h2>
                <p className="subtitle">{COMPANY_TAGLINE}</p>
                              </div>
              <p className="info-text">
                Fill in the form and our professionals will get in touch to:
              </p>

                              <ul className="check-list">
                                                              <li>
                                          <i className="bi bi-check-circle-fill">
                    <img
                      src="/assets/icon-tick.svg"
                      width={20}
                      height={20}
                      alt="Confirm your requirements"
                    />
                  </i>
                  Confirm your requirements
                </li>
                                                              <li>
                                          <i className="bi bi-check-circle-fill">
                    <img
                      src="/assets/icon-tick.svg"
                      width={20}
                      height={20}
                      alt="Schedule a free consultation"
                    />
                  </i>
                  Schedule a free consultation
                </li>
                                                              <li>
                                          <i className="bi bi-check-circle-fill">
                    <img
                      src="/assets/icon-tick.svg"
                      width={20}
                      height={20}
                      alt="Share customized recommendations for your project"
                    />
                  </i>
                  Share customized recommendations for your project
                </li>
                                                      </ul>

                                                      <div className="contact-info-inquiry mb-4">
                                  <p className="section-label">Project Inquries</p>
                <a href="mailto:hello@coreblocklabs.com" className="contact-link">
                                          <i className="bi bi-envelope-fill">
                    <img
                      src="/assets/icon-mail.svg"
                      alt="Email"
                      width={20}
                      height={20}
                    />
                  </i>
                  hello@coreblocklabs.com
                </a>
                              </div>

                                                          <p className="section-label">Follow Us</p>
                                                      <div className="social-icons">
                <a
                  href="https://t.me/coreblocklabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-telegram"
                  aria-label="Telegram"
                >
                  <img src="/assets/icon-telegram.svg" width={19} height={19} alt="Telegram" />
                </a>
                <a
                  href="https://www.linkedin.com/company/coreblocklabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-linkedin"
                  aria-label="LinkedIn"
                >
                  <img src="/assets/linkedin.svg" width={19} height={19} alt="LinkedIn" />
                </a>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="social-email"
                  aria-label="Email"
                >
                  <img src="/assets/icon-email.svg" width={19} height={19} alt="Email" />
                </a>
                                                          </div>
                                                  </div>
                      </div>

                      <div className="col-lg-7">
                          <div className="form-panel">
                              <div className="mb-4">
                <h3>Let&apos;s build something innovative together.</h3>
                <p className="form-subtitle">Start your journey with CoreBlock Labs today.</p>
                <div className="alert d-none" id="contact_form_status_top" role="alert" />
                              </div>

              <form
                id="contact-form"
                className="contact-form"
                method="post"
                action="/contact"
                noValidate
              >
          <input type="hidden" name="action" value="handle_contact_form_ajax" />
                <input type="hidden" id="contact_nonce" name="contact_nonce" value="d57a0ccec3" />
                <input type="hidden" name="_wp_http_referer" value="/contact-us/" />

          <div className="row g-3">
              <div className="col-md-6">
                    <label htmlFor="contactPageNameInput">
                      Your Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPageNameInput"
                      name="name"
                      className="form-control"
                      placeholder="John Trangely"
                    />
                    <div className="field-error" id="name_error" />
              </div>

              <div className="col-md-6">
                    <label htmlFor="contactPageEmailInput">
                      Your Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactPageEmailInput"
                      name="email"
                      className="form-control"
                      placeholder="hello@nurency.com"
                    />
                    <div className="field-error" id="email_error" />
              </div>

              <div className="col-md-6">
                    <label htmlFor="contactPagePhone">
                      Mobile Number<span className="text-danger">*</span>
                    </label>
                  <div className="phone-input-group">
                      <input
                        type="tel"
                        id="contactPagePhone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter mobile number"
                        autoComplete="tel"
                      />
                  </div>
                    <div className="field-error" id="phone_error" />
              </div>

              <div className="col-md-6">
                    <label htmlFor="contactPageQuerySelect">
                      Query For<span className="text-danger">*</span>
                    </label>
                    <select
                      id="contactPageQuerySelect"
                      name="query"
                      className="form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select One
                      </option>
                      <option value="Sales Query">Project / Sales Enquiry</option>
                      <option value="Support Query">Support Enquiry</option>
                      <option value="Partnership">Partnership</option>
                  </select>
                    <div className="field-error" id="query_error" />
              </div>

              <div className="col-12">
                    <label htmlFor="contactPageMessageInput">
                      Message<span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="contactPageMessageInput"
                      name="message"
                      className="form-control"
                      placeholder="Write here your message..."
                    />
                    <div className="field-error" id="message_error" />
              </div>
          </div>

          <p className="nda-text">
                  <img src="/assets/trust.png" alt="" aria-hidden="true" />
                  <span className="fw-normal">
                    Your Idea Is Fully Protected By Our{' '}
                    <span>Non Disclosure Agreement (NDA).</span>
                  </span>
          </p>

          <div className="row">
                  <div className="col-12 d-flex justify-content-end flex-wrap align-items-center w-100 gap-2">
                  <button type="submit" className="btn btn-primary" id="contact_submit_btn">
                      <span className="btn-text">Send Message</span>
                      <span className="btn-spinner" aria-hidden="true" />
                  </button>
              </div>
          </div>
      </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
  );
}
