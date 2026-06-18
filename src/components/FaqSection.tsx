import { homeFaqs } from '../data/company';

export default function FaqSection() {
  const leftFaqs = homeFaqs.filter((faq) => faq.parent === 'faqLeft');
  const rightFaqs = homeFaqs.filter((faq) => faq.parent === 'faqRight');

  return (
    <section className="faq-section custom-spacing-y">
      <div className="container-fluid">
        <div className="section-header-2 text-center">
          <h2 className="title-2">We Answer All Your Questions</h2>
          <p className="subtitle">
            Learn how CoreBlock Labs helps organizations build trust infrastructure with blockchain
            and AI.
          </p>
        </div>

        <div className="row g-lg-4">
          <div className="col-lg-6">
            <div className="accordion faq-accordion" id="faqLeft">
              {leftFaqs.map((faq) => (
                <div key={faq.id} className="accordion-item faq-card mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                    >
                      <span className="faq-icon">
                        <img src="/assets/question.svg" alt="Question" />
                      </span>
                      {faq.question}
                    </button>
                  </h2>
                  <div id={faq.id} className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion faq-accordion" id="faqRight">
              {rightFaqs.map((faq) => (
                <div key={faq.id} className="accordion-item faq-card mb-4">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${faq.id}`}
                    >
                      <span className="faq-icon">
                        <img src="/assets/question.svg" alt="Question" />
                      </span>
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={faq.id}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqRight"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
