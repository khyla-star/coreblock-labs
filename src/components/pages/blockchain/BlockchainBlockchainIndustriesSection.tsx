export default function BlockchainBlockchainIndustriesSection() {
    return (
        <>
            <section className="blockchain-industries bg-white custom-spacing-y">
                <div className="container">
                    <div className="section-header-2 text-center">
                        <h2 className="title-2">How Enterprises Are Using Blockchain Across Key Industries</h2>
                        <p className="subtitle">
                            Explore how modern enterprises are setting new standards throughout main industry sectors.                </p>
                    </div>
                    <div className="industry-tabs-wrap">
                        {/* Desktop Tabs Navigation */}
                        <div className="industry-nav-wrapper mb-xxl-5 mb-4 d-none d-lg-flex">
                            <button className="industry-nav-arrow industry-nav-arrow--prev industry-nav-arrow--hidden" id="industryNavPrev" aria-label="Scroll left">
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>

                            <div className="industry-nav-scroll" id="industryNavScroll">
                                <ul className="nav nav-pills industry-nav" id="industryTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="industry-financial-services-banking-tab" data-bs-toggle="pill" data-bs-target="#industry-financial-services-banking" type="button" role="tab" aria-controls="industry-financial-services-banking" aria-selected="true">
                                            <img src="/assets/finance.svg" alt="Financial Services &amp; Banking" className="tab-icon" />
                                            Financial Services &amp; Banking                                
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="industry-supply-chain-logistics-tab" data-bs-toggle="pill" data-bs-target="#industry-supply-chain-logistics" type="button" role="tab" aria-controls="industry-supply-chain-logistics" aria-selected="false" tabIndex={-1}>
                                            <img src="/assets/supply.svg" alt="Supply Chain &amp; Logistics" className="tab-icon" />
                                            Supply Chain &amp; Logistics                                
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="industry-healthcare-life-sciences-tab" data-bs-toggle="pill" data-bs-target="#industry-healthcare-life-sciences" type="button" role="tab" aria-controls="industry-healthcare-life-sciences" aria-selected="false" tabIndex={-1}>
                                            <img src="/assets/health.svg" alt="Healthcare &amp; Life Sciences" className="tab-icon" />
                                            Healthcare &amp; Life Sciences                                
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="industry-real-estate-property-management-tab" data-bs-toggle="pill" data-bs-target="#industry-real-estate-property-management" type="button" role="tab" aria-controls="industry-real-estate-property-management" aria-selected="false" tabIndex={-1}>
                                            <img src="/assets/real.svg" alt="Real Estate &amp; Property Management" className="tab-icon" />
                                            Real Estate &amp; Property Management                                
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="industry-government-public-sector-tab" data-bs-toggle="pill" data-bs-target="#industry-government-public-sector" type="button" role="tab" aria-controls="industry-government-public-sector" aria-selected="false" tabIndex={-1}>
                                            <img src="/assets/govt.svg" alt="Government &amp; Public Sector" className="tab-icon" />
                                            Government &amp; Public Sector                                
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link " id="industry-media-gaming-digital-ownership-tab" data-bs-toggle="pill" data-bs-target="#industry-media-gaming-digital-ownership" type="button" role="tab" aria-controls="industry-media-gaming-digital-ownership" aria-selected="false" tabIndex={-1}>
                                            <img src="/assets/gaming-metaverse.svg" alt="Media, Gaming &amp; Digital Ownership" className="tab-icon" />
                                            Media, Gaming &amp; Digital Ownership                                
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <button className="industry-nav-arrow industry-nav-arrow--next industry-nav-arrow--hidden" id="industryNavNext" aria-label="Scroll right">
                                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Tab Content */}
                        <div className="tab-content industry-tab-content d-none d-lg-block" id="industryTabContent">
                            <div className="tab-pane fade show active" id="industry-financial-services-banking" role="tabpanel" aria-labelledby="industry-financial-services-banking-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/finance-industries.jpg" alt="Financial Services &amp; Banking" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Financial Services &amp; Banking</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Traditional banking methods rely on outside parties to facilitate transactions. This resulted in lengthy transaction timelines. The introduction of blockchain resolves these inefficiencies by providing a means of facilitating real-time settlement.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>Reduction of transaction costs</li>
                                                    <li>Fractional ownership of assets through tokenization</li>
                                                    <li>Automated compliance and reporting</li>
                                                    <li>Secure digital ID for KYC &amp; AML processes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="industry-supply-chain-logistics" role="tabpanel" aria-labelledby="industry-supply-chain-logistics-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/supply-chain.jpg" alt="Supply Chain &amp; Logistics" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Supply Chain &amp; Logistics</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Supply chains typically have multiple suppliers and buyers, making it difficult for everyone in the network to access the same data. Blockchain creates a single source of truth that can be used and viewed by all parties involved.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>End-to-end traceability of a product</li>
                                                    <li>Validation of product authenticity and origin</li>
                                                    <li>Automatic supplier payment authorization</li>
                                                    <li>Faster visibility into available inventory</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="industry-healthcare-life-sciences" role="tabpanel" aria-labelledby="industry-healthcare-life-sciences-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/healthcare.jpg" alt="Healthcare &amp; Life Sciences" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Healthcare &amp; Life Sciences</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Patient confidentiality is critical, but blockchain provides an alternative way for people to have stronger assurances around privacy as well as controlled access to their medical data.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>Management of patient health records</li>
                                                    <li>Sharing medical data with patient permission</li>
                                                    <li>Maintaining data integrity during clinical trials</li>
                                                    <li>Tracking pharmaceutical products from manufacturer to patient</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="industry-real-estate-property-management" role="tabpanel" aria-labelledby="industry-real-estate-property-management-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/real-estate.jpg" alt="Real Estate &amp; Property Management" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Real Estate &amp; Property Management</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Real estate transactions consume enormous amounts of paperwork and take significant time to settle. Blockchain reduces processing time by enabling real-time transactions and better market visibility.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>Tokenizing real estate assets</li>
                                                    <li>Transferring property through smart contracts</li>
                                                    <li>Building land registration systems with smart contracts</li>
                                                    <li>Automating rent and lease payment collection</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="industry-government-public-sector" role="tabpanel" aria-labelledby="industry-government-public-sector-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/government.jpg" alt="Government &amp; Public Sector" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Government &amp; Public Sector</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Governments are utilizing blockchain to provide better transparency across services and improve the overall citizen experience. This strengthens trust, accountability, and operational efficiency in public service delivery.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>Digital voting</li>
                                                    <li>Records management</li>
                                                    <li>Subsidy and welfare programs</li>
                                                    <li>Managing citizen identity</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="industry-media-gaming-digital-ownership" role="tabpanel" aria-labelledby="industry-media-gaming-digital-ownership-tab">
                                <div className="industry-pane card shadow-sm border-0 overflow-hidden">
                                    <div className="row g-0">
                                        <div className="col-lg-5">
                                            <div className="industry-image h-100">
                                                <img src="/assets/Gaming.jpg" alt="Media, Gaming &amp; Digital Ownership" className="img-fluid h-100 w-100 object-fit-cover" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="industry-content p-4 p-md-5">
                                                <h3 className="industry-title text-dark mb-4">Media, Gaming &amp; Digital Ownership</h3>
                                                <div className="industry-desc text-muted mb-4">
                                                    <p>Blockchain has introduced a new model of ownership through digital tokens, NFTs, and decentralized applications. This enables verifiable ownership and greater control for creators, players, and users.</p>
                                                </div>
                                                <ul className="industry-list text-muted mb-0 list">
                                                    <li>NFT marketplaces</li>
                                                    <li>In-game asset ownership</li>
                                                    <li>Automated royalty payouts</li>
                                                    <li>Decentralized content distribution</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Mobile Accordion */}
                        <div className="accordion industry-accordion d-lg-none" id="industryAccordion">
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-financial-services-banking">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-financial-services-banking" aria-expanded="true" aria-controls="collapse-financial-services-banking">
                                        <img src="/assets/finance.svg" alt="Financial Services &amp; Banking" className="tab-icon me-2" />
                                        Financial Services &amp; Banking                            </button>
                                </h2>
                                <div id="collapse-financial-services-banking" className="accordion-collapse collapse show" data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/finance-industries.jpg" alt="Financial Services &amp; Banking" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Financial Services &amp; Banking</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Traditional banking methods rely on outside parties to facilitate transactions. This resulted in lengthy transaction timelines. The introduction of blockchain resolves these inefficiencies by providing a means of facilitating real-time settlement.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>Reduction of transaction costs</li>
                                                <li>Fractional ownership of assets through tokenization</li>
                                                <li>Automated compliance and reporting</li>
                                                <li>Secure digital ID for KYC &amp; AML processes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-supply-chain-logistics">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-supply-chain-logistics" aria-expanded="false" aria-controls="collapse-supply-chain-logistics">
                                        <img src="/assets/supply.svg" alt="Supply Chain &amp; Logistics" className="tab-icon me-2" />
                                        Supply Chain &amp; Logistics                            
                                    </button>
                                </h2>
                                <div id="collapse-supply-chain-logistics" className="accordion-collapse collapse " data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/supply-chain.jpg" alt="Supply Chain &amp; Logistics" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Supply Chain &amp; Logistics</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Supply chains typically have multiple suppliers and buyers, making it difficult for everyone in the network to access the same data. Blockchain creates a single source of truth that can be used and viewed by all parties involved.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>End-to-end traceability of a product</li>
                                                <li>Validation of product authenticity and origin</li>
                                                <li>Automatic supplier payment authorization</li>
                                                <li>Faster visibility into available inventory</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-healthcare-life-sciences">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-healthcare-life-sciences" aria-expanded="false" aria-controls="collapse-healthcare-life-sciences">
                                        <img src="/assets/health.svg" alt="Healthcare &amp; Life Sciences" className="tab-icon me-2" />
                                        Healthcare &amp; Life Sciences                            
                                    </button>
                                </h2>
                                <div id="collapse-healthcare-life-sciences" className="accordion-collapse collapse " data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/healthcare.jpg" alt="Healthcare &amp; Life Sciences" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Healthcare &amp; Life Sciences</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Patient confidentiality is critical, but blockchain provides an alternative way for people to have stronger assurances around privacy as well as controlled access to their medical data.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>Management of patient health records</li>
                                                <li>Sharing medical data with patient permission</li>
                                                <li>Maintaining data integrity during clinical trials</li>
                                                <li>Tracking pharmaceutical products from manufacturer to patient</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-real-estate-property-management">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-real-estate-property-management" aria-expanded="false" aria-controls="collapse-real-estate-property-management">
                                        <img src="/assets/real.svg" alt="Real Estate &amp; Property Management" className="tab-icon me-2" />
                                        Real Estate &amp; Property Management                            
                                    </button>
                                </h2>
                                <div id="collapse-real-estate-property-management" className="accordion-collapse collapse " data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/real-estate.jpg" alt="Real Estate &amp; Property Management" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Real Estate &amp; Property Management</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Real estate transactions consume enormous amounts of paperwork and take significant time to settle. Blockchain reduces processing time by enabling real-time transactions and better market visibility.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>Tokenizing real estate assets</li>
                                                <li>Transferring property through smart contracts</li>
                                                <li>Building land registration systems with smart contracts</li>
                                                <li>Automating rent and lease payment collection</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-government-public-sector">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-government-public-sector" aria-expanded="false" aria-controls="collapse-government-public-sector">
                                        <img src="/assets/govt.svg" alt="Government &amp; Public Sector" className="tab-icon me-2" />
                                        Government &amp; Public Sector                            
                                    </button>
                                </h2>
                                <div id="collapse-government-public-sector" className="accordion-collapse collapse " data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/government.jpg" alt="Government &amp; Public Sector" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Government &amp; Public Sector</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Governments are utilizing blockchain to provide better transparency across services and improve the overall citizen experience. This strengthens trust, accountability, and operational efficiency in public service delivery.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>Digital voting</li>
                                                <li>Records management</li>
                                                <li>Subsidy and welfare programs</li>
                                                <li>Managing citizen identity</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item mb-3 border-0 shadow-sm rounded-4 overflow-hidden">
                                <h2 className="accordion-header" id="heading-media-gaming-digital-ownership">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-media-gaming-digital-ownership" aria-expanded="false" aria-controls="collapse-media-gaming-digital-ownership">
                                        <img src="/assets/gaming-metaverse.svg" alt="Media, Gaming &amp; Digital Ownership" className="tab-icon me-2" />
                                        Media, Gaming &amp; Digital Ownership                            
                                    </button>
                                </h2>
                                <div id="collapse-media-gaming-digital-ownership" className="accordion-collapse collapse " data-bs-parent="#industryAccordion">
                                    <div className="accordion-body p-0">
                                        <div className="industry-image">
                                            <img src="/assets/Gaming.jpg" alt="Media, Gaming &amp; Digital Ownership" className="img-fluid w-100 object-fit-cover" />
                                        </div>
                                        <div className="industry-content p-4">
                                            <h3 className="industry-title fs-4 text-dark mb-3">Media, Gaming &amp; Digital Ownership</h3>
                                            <div className="industry-desc text-muted mb-3">
                                                <p>Blockchain has introduced a new model of ownership through digital tokens, NFTs, and decentralized applications. This enables verifiable ownership and greater control for creators, players, and users.</p>
                                            </div>
                                            <ul className="industry-list text-muted mb-0 list">
                                                <li>NFT marketplaces</li>
                                                <li>In-game asset ownership</li>
                                                <li>Automated royalty payouts</li>
                                                <li>Decentralized content distribution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Mobile Accordion */}
                    </div>


                </div>
            </section>
        </>
    );
}
