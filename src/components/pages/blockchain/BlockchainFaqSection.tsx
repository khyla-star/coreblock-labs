import { Link } from 'react-router-dom';

export default function BlockchainFaqSection() {
    return (
        <>
            <section className="faq-section custom-spacing-y">
                <div className="container">

                    <div className="section-header-2 text-center">
                        <h2 className="title-2">Frequently Asked Questions</h2>
                        <p className="subtitle">
                            Find answers to common questions about our Web3 development services and processes.            
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

                                            What does a blockchain development company do?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft1" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            A Blockchain Development Company assists in designing, building, and maintaining distributed and decentralized networks, smart contracts, and blockchain applications to meet the business needs of the customer.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Is blockchain suitable for small businesses?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft2" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Yes, if used strategically. Even small-to-midsize companies will benefit from reduced operating costs with greater visibility and transparency through the use of blockchain.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How secure are blockchain applications?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft3" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            When using best practices in the development of blockchain applications along with the execution of security audits. The resulting blockchain applications will be very secure and virtually tamper-proof.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft4">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            What is the difference between public and private blockchains?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft4" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Public blockchains are open for anyone to join and are fully decentralized. Private blockchains are restrictive of who can join, and they tend to be designed as an enterprise solution.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft5">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Do you provide post-launch support?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft5" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Yes. We provide the necessary maintenance and support after you have launched your blockchain application. This includes providing product software updates, enhancements, performance optimization, and security audits and monitoring for your system.                                    </div>
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

                                            How long does blockchain development take?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight1" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            The time it requires to develop a blockchain project varies by the level of difficulty in developing the project. It can take from just a few weeks (for proof of concept) to many months for large-scale, enterprise solutions.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            What industries benefit most from blockchain?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight2" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            The industries that will benefit the most from the adoption of blockchain technology include finance, supply chain, healthcare, real estate, government, and gaming.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Can I integrate my current business systems with blockchain?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight3" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Yes. You can integrate blockchain with your existing systems (ERP, CRM, etc.) through the use of API's or middleware.                                    
                                        </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight4">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How much will blockchain development cost?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight4" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            The cost of developing a blockchain application depends upon a number of factors including: scope of the project, the technology stack that will be utilized in the development, and the complexity of the project. The best way to determine the final costs is to perform a complete assessment.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight5">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Why Should You Invest In Blockchain Development Services?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight5" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Blockchain development services can help businesses increase transparency, automate operations, improve security and create new digital revenue opportunities.                                    </div>
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
