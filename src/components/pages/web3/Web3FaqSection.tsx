import { Link } from 'react-router-dom';

export default function Web3FaqSection() {
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

                                            How is Web3 development different from traditional Web or blockchain development?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft1" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Web3 development extends the traditional web and blockchain development space with decentralized ownership, trustless execution, and user control over data. This is different from the traditional Web2, which depends on servers for execution, while the Web3 depends on blockchains, contracts, and digital wallets.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How do you decide between public, private, or hybrid Web3 architectures?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft2" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            The determination of the architecture depends on the regulatory requirements, the sensitivity of the data, the scalability requirements, and the governance requirements.
                                            Public chains are the best for permissionless platforms
                                            Private chains are the best for enterprises that require privacy
                                            Hybrid architectures provide the best solution for enterprises that require a mix of both
                                            We architect based on business results, not ideology.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How do Web3 platforms handle scalability and high transaction costs?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft3" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Modern Web3 systems leverage Layer 2 solutions, rollups, sidechains, and multi-chain architectures to significantly reduce transaction fees and latency. We design systems that keep critical logic on-chain while optimizing performance through off-chain computation and scalable data layers.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft4">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            What are the biggest risks in Web3 projects today?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft4" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            The most common risks include poor smart contract design, flawed tokenomics, weak governance models, inadequate security testing, and poor user experience. Successful Web3 development focuses equally on economic design, security, and usability, not just code.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft5">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            How long does it take to build a production-ready Web3 platform?                                    
                                        </button>
                                    </h2>

                                    <div id="faqLeft5" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                        <div className="accordion-body">
                                            Timelines vary based on scope and complexity:
                                            Proof of concept: 4–8 weeks
                                            MVP: 2–4 months
                                            Enterprise or multi-chain platforms: 4–9+ months
                                            A phased delivery approach ensures early validation, risk reduction, and faster time-to-market.                                    
                                        </div>
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

                                            Do all business use cases really need Web3?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight1" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Not all products need the benefits of the blockchain. Strategic development of a Web3 application starts with the validation of the use case, ensuring that the benefits of blockchain development are actually required for the business and that the complexity of blockchain development is justified.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight2">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Are Web3 applications secure enough for enterprise and financial use cases?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight2" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Yes, they are, if implemented properly. Enterprise-grade Web3 platforms require secure smart contract development, formal audits, governance, treasury, and infrastructure security. Security needs to be addressed throughout the entire stack, from architecture and development through deployment.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight3">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Can Web3 applications integrate with existing Web2 systems?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight3" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Absolutely. Most production Web3 platforms are hybrid by design, integrating with existing ERP systems, CRMs, analytics tools, payment gateways, and APIs. Web3 enhances existing systems rather than replacing them entirely, enabling gradual and low-risk adoption.                                    </div>
                                    </div>
                                </div>


                                <div className="accordion-item faq-card mb-4">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight4">

                                            <span className="faq-icon">
                                                <img src="/assets/question.svg" alt="Question" className="" />
                                            </span>

                                            Is Web3 development compliant with regulations?                                    
                                        </button>
                                    </h2>

                                    <div id="faqRight4" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                        <div className="accordion-body">
                                            Web3 systems can be designed to meet regulatory, compliance, and governance requirements, especially for enterprise and financial use cases. This includes permissioned access, auditability, identity frameworks, data privacy controls, and compliance-aware smart contracts. Regulatory considerations are addressed early in the strategy phase.                                    </div>
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
