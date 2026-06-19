import { Link } from 'react-router-dom';

export default function CryptoFaqSection() {
    return (
        <>
            <section className="faq-section custom-spacing-y">
                <div className="container">

                    <div className="section-header-2 text-center">
                        <h2 className="title-2">White-Label Tokenization Related-FAQs</h2>
                        <p className="subtitle">
                        </p>
                    </div>

                    <div className="row g-lg-4">

                        {/* FAQ Left Column */}
                        <div className="col-lg-6">
                            <div className="accordion faq-accordion" id="faqLeft">


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft1">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            What is the difference between a white-label and custom tokenization platform?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft1" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            A white-label tokenization platform is pre-built and configurable, while a custom platform is built from scratch. White-label solutions reduce time, cost, and development complexity significantly.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Can we rebrand the investor dashboard and mobile app?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft2" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Yes, the entire interface including investor dashboard and mobile experience can be fully rebranded. This is a core part of white-label tokenization platform licensing.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Do we need our own smart contract developers?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft3" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            No, smart contracts are pre-built, audited, and configurable within the platform. You can launch without in-house blockchain engineering teams.                                    </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* FAQ Right Column */}
                        <div className="col-lg-6">
                            <div className="accordion faq-accordion" id="faqRight">


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight1">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Which blockchains do you support?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight1" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            We support major networks like Ethereum, Polygon, and Avalanche along with private and permissioned chains. This enables flexible tokenization for businesses based on regulatory and liquidity needs.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How do you handle regulated securities and transfer restrictions?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight2" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            The system includes built-in transfer controls, investor permissions, and compliance rules for regulated assets. This ensures compliance in white-label tokenization workflows across jurisdictions.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            What is the typical tokenization-as-a-service pricing model?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight3" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Pricing usually follows a setup fee plus ongoing subscription or usage-based model. This makes tokenization platform licensing predictable and scalable for growing businesses.                                    </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-5">
                        <Link to="/contact" className="btn btn-primary live-demo-highlight-2">
                            Still Have Questions? Get in Touch for a Custom Solution                    
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
