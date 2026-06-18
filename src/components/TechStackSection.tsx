export default function TechStackSection() {
    return (
        <>
            <section className="tech-stack-section custom-spacing-y">

                <div className="container">
                    <div className="section-header text-center">
                        <div className="section-header text-center">

                            <h2 className="title">A Future-Ready Tech Stack At Your Disposal</h2>

                            <p className="subtitle">An arsenal of latest technologies commissioned to deliver scalable, secure, and innovative business solutions, just for you.</p>

                        </div>
                    </div>
                </div>

                <div className="tech-stack-inner">
                    <div className="container">
                        <div className="row">

                            {/* LEFT TABS (DESKTOP) */}
                            <div className="col-xl-3 col-lg-4">

                                <ul className="nav nav-tabs d-none d-lg-flex tech-nav" role="tablist">


                                    <li className="nav-item">

                                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-10">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-aiml.svg" alt="tech-aiml" className="" />

                                            </span>

                                            <span>AI, ML &amp; Data Science</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-11">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-blockchain.svg" alt="tech-blockchain" className="" />

                                            </span>

                                            <span>Blockchain Development</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-14">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-nft.svg" alt="tech-nft" className="" />

                                            </span>

                                            <span>DeFi, NFTs &amp; DApp Ecosystem</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-15">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-layer2.svg" alt="tech-layer2" className="" />

                                            </span>

                                            <span>Layer 2 Scaling Solutions</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-16">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-layer3.svg" alt="tech-layer3" className="" />

                                            </span>

                                            <span>Layer 3</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-13">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-wallet.svg" alt="tech-wallet" className="" />

                                            </span>

                                            <span>Wallets &amp; Payment Infrastructure</span>

                                        </button>

                                    </li>


                                    <li className="nav-item">

                                        <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab-12">

                                            <span className="tech-icon-bg">

                                                <img src="/assets/tech-web3.svg" alt="tech-web3" className="" />

                                            </span>

                                            <span>Web3 Infrastructure</span>

                                        </button>

                                    </li>


                                </ul>

                            </div>


                            {/* RIGHT CONTENT */}
                            <div className="col-xl-9 col-lg-8">

                                <div className="tab-content accordion" id="techTabContent">


                                    <div className="tab-pane fade accordion-item show active" id="tab-10">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-10">

                                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10">

                                                AI, ML &amp; Data Science
                                            </button>

                                        </h2>


                                        <div id="collapse-10" className="accordion-collapse collapse show d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/openai.svg" alt="openai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                OpenAI                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/claude-ai.svg" alt="claude-ai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Claude                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/gemini.svg" alt="gemini" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Gemini                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Mistral-Ai.svg" alt="Mistral-Ai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Mistral AI                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/python-icon.svg" alt="python-icon" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Python                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/meta.svg" alt="meta" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Llama 3                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Pinecone.svg" alt="Pinecone" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Pinecone                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/ChromaDB.svg" alt="ChromaDB" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                ChromaDB                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/ollama.svg" alt="ollama" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Ollama                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/wisper-ai.svg" alt="wisper-ai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Whisper                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/stable.svg" alt="stable" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Stable Diffusion                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Pytorch.svg" alt="Pytorch" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                PyTorch                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Tensorflow.svg" alt="Tensorflow" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                TensorFlow                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/OpenCV.svg" alt="OpenCV" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                OpenCV                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Huggingface.svg" alt="Huggingface" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Hugging Face                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Langchain.svg" alt="Langchain" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                LangChain                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Llambdaindex.svg" alt="Llambdaindex" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                LlamaIndex                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Google-Cloud.svg" alt="Google Cloud" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Google Cloud AI                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/AWS-Sagemaker.svg" alt="AWS-Sagemaker" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                AWS SageMaker                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Azure-Machine.svg" alt="Azure-Machine" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Azure Machine Learning                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/vertex-ai.svg" alt="vertex-ai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Vertex AI                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Databricks.svg" alt="Databricks" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Databricks                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Pandas.svg" alt="Pandas" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Pandas                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/NumPy.svg" alt="NumPy" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                NumPy                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Apache-Spark.svg" alt="Apache-Spark" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Apache Spark                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/dvc.svg" alt="dvc" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                DVC                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/snowflake.svg" alt="snowflake" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Snowflake                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/BigQuery.svg" alt="BigQuery" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                BigQuery                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/mlflow.svg" alt="mlflow" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                MLflow                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Kubeflow.svg" alt="Kubeflow" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Kubeflow                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Bentoml.svg" alt="Bentoml" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                BentoML                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/FastAPI.svg" alt="FastAPI" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                FastAPI                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Docker.svg" alt="Docker" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Docker                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Kubernetes.svg" alt="Kubernetes" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Kubernetes                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-11">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-11">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11">

                                                Blockchain Development
                                            </button>

                                        </h2>


                                        <div id="collapse-11" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Ethreum.svg" alt="Ethreum" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Ethereum                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/BNB-Smart.svg" alt="BNB-Smart" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                BNB Smart Chain                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/solana.svg" alt="solana" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Solana                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/avalanche.svg" alt="avalanche" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Avalanche                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Cardano.svg" alt="Cardano" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Cardano                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/polkadot.svg" alt="polkadot" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Polkadot                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Cosmos-SDK.svg" alt="Cosmos-SDK" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Cosmos SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/near-protocol-near.svg" alt="near-protocol-near" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Near Protocol                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/solidity.svg" alt="solidity" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Solidity                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Vyper.svg" alt="Vyper" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Vyper                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/rust.svg" alt="rust" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Rust                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Move.svg" alt="Move" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Move                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/go.svg" alt="go" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Go                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/web3JS.svg" alt="web3JS" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Web3.js                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Ether.svg" alt="Ether" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Ethers.js                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Hardhat.svg" alt="Hardhat" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Hardhat                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Foundry-1.svg" alt="Foundry" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Foundry                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Truffle.svg" alt="Truffle" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Truffle                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/IPFS.svg" alt="IPFS" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                IPFS                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/arweave.svg" alt="arweave" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Arweave                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/filecoin.svg" alt="filecoin" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Filecoin                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/graph.svg" alt="graph" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                The Graph                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/LayerZero.svg" alt="LayerZero" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                LayerZero                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/wormhole.svg" alt="wormhole" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Wormhole                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Axelar.svg" alt="Axelar" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Axelar                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/IBC.svg" alt="IBC" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                IBC (Cosmos)                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Hyperlane.svg" alt="Hyperlane" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Hyperlane                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Chainlink.svg" alt="Chainlink" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Chainlink CCIP                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/brownie.svg" alt="brownie" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Brownie                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/remix-logo-icon-1.svg" alt="remix-logo-icon 1" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Remix IDE                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-14">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-14">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-14">

                                                DeFi, NFTs &amp; DApp Ecosystem
                                            </button>

                                        </h2>


                                        <div id="collapse-14" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/uniswap.svg" alt="uniswap" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Uniswap SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/0x-Protocol.svg" alt="0x-Protocol" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                0x Protocol                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Aave-SDK.svg" alt="Aave-SDK" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Aave SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/balancer.svg" alt="balancer" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Balancer                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Curve.svg" alt="Curve" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Curve                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/compound.svg" alt="compound" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Compound                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/openzeppelin.svg" alt="openzeppelin" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                OpenZeppelin                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/zora.svg" alt="zora" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Zora • Reservoir                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/opensea.svg" alt="opensea" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                OpenSea SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/opensea-1.svg" alt="opensea" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Seaport Protocol                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/pinata-1.svg" alt="pinata" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Pinata                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Moralis-1.svg" alt="Moralis" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Moralis NFT API                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/unity-web3.svg" alt="unity-web3" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Unity Web3 SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/unreal.svg" alt="unreal" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Unreal Web3                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Chainlink-1.svg" alt="Chainlink" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Chainlink                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/pyth.svg" alt="pyth" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Pyth                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Redstone.svg" alt="Redstone" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                RedStone                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/DIA.svg" alt="DIA" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                DIA                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Band-Protocol.svg" alt="Band-Protocol" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Band Protocol                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-15">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-15">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-15">

                                                Layer 2 Scaling Solutions
                                            </button>

                                        </h2>


                                        <div id="collapse-15" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/arbitrum.svg" alt="arbitrum" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Arbitrum One                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Arbitrum-Nova.svg" alt="Arbitrum-Nova" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Arbitrum Nova                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/optimism.svg" alt="optimism" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Optimism                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/base.svg" alt="base" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Base                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/polygon.svg" alt="polygon" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Polygon CDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/zkSync-Era.svg" alt="zkSync-Era" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                zkSync Era                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/starknet.svg" alt="starknet" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                StarkNet                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/scroll.svg" alt="scroll" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Scroll                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Linea.svg" alt="Linea" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Linea                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Mantle.svg" alt="Mantle" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Mantle                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/blast.svg" alt="blast" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Blast                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/manta.svg" alt="manta" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Manta                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/metis.svg" alt="metis" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Metis                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Loopring.svg" alt="Loopring" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Loopring                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-16">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-16">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-16">

                                                Layer 3
                                            </button>

                                        </h2>


                                        <div id="collapse-16" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/orbs.svg" alt="orbs" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Orbs Degen Chain                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/xai.svg" alt="xai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                XAI Network                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Apex.svg" alt="Apex" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Proof of Play Apex L3                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Caldera.svg" alt="Caldera" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Caldera                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Conduit.svg" alt="Conduit" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Conduit L3s                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/AltLayer.svg" alt="AltLayer" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                AltLayer                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Arbitrum-Orbit.svg" alt="Arbitrum-Orbit" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Arbitrum Orbit                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/zkSync-Era-1.svg" alt="zkSync-Era" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                zkStack                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Movement.svg" alt="Movement" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Movement Labs                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Eclipse.svg" alt="Eclipse" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Eclipse                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-13">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-13">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-13">

                                                Wallets &amp; Payment Infrastructure
                                            </button>

                                        </h2>


                                        <div id="collapse-13" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Metamask.svg" alt="Metamask" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                MetaMask SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/WalletConnect.svg" alt="WalletConnect" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                WalletConnect v2                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/coinbase.svg" alt="coinbase" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Coinbase Wallet SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Solflare.svg" alt="Solflare" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Solflare (Solana) Phantom                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Rainbow.svg" alt="Rainbow" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Rainbow                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Ledger.svg" alt="Ledger" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Ledger                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Gnosis-Safe.svg" alt="Gnosis-Safe" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Safe (formerly Gnosis Safe)                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Biconomy.svg" alt="Biconomy" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Biconomy                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/stackup.svg" alt="stackup" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Stackup                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/zeroDev.svg" alt="zeroDev" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                ZeroDev                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Argent.svg" alt="Argent" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Argent                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Candide.svg" alt="Candide" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Candide                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Fireblocks.svg" alt="Fireblocks" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Fireblocks                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/CopperQredo.svg" alt="CopperQredo" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Copper Qredo                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Bitgo.svg" alt="Bitgo" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                BitGo                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/taurus.svg" alt="taurus" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Taurus                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/MoonPay.svg" alt="MoonPay" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                MoonPay                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Transak.svg" alt="Transak" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Transak                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Ramp.svg" alt="Ramp" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Ramp                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Circle.svg" alt="Circle" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Circle                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Wyre.svg" alt="Wyre" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Wyre                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Stripe.svg" alt="Stripe" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Stripe Crypto                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="tab-pane fade accordion-item " id="tab-12">

                                        {/* MOBILE ACCORDION HEADER */}
                                        <h2 className="accordion-header d-lg-none" id="heading-12">

                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-12">

                                                Web3 Infrastructure
                                            </button>

                                        </h2>


                                        <div id="collapse-12" className="accordion-collapse collapse  d-lg-block" data-bs-parent="#techTabContent">

                                            <div className="accordion-body">

                                                <div className="row g-4">


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Thirdweb.svg" alt="Thirdweb" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Thirdweb                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Moralis.svg" alt="Moralis" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Moralis                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Alchemy-1.svg" alt="Alchemy" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Alchemy SDK                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/QuickNode.svg" alt="QuickNode" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                QuickNode                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Tatum.svg" alt="Tatum" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Tatum                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/BlockNative.svg" alt="BlockNative" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Blocknative                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Scaffold-ETH.svg" alt="Scaffold-ETH" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Scaffold-ETH                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Wagmi.svg" alt="Wagmi" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Wagmi + Viem                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Dune.svg" alt="Dune" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Dune Analytics                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/nansen-ai.svg" alt="nansen-ai" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Nansen                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Flipside.svg" alt="Flipside" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Flipside Crypto                                                        </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/covalent.svg" alt="covalent" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Covalent                                                        
                                                            </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Defilama.svg" alt="Defilama" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                DefiLlama APIs                                                        
                                                            </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/pinata.svg" alt="pinata" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Pinata                                                        
                                                            </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Infura.svg" alt="Infura" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Infura                                                        
                                                            </span>

                                                        </div>

                                                    </div>


                                                    <div className="col-md-4 col-xl-3 col-6">

                                                        <div className="tech-card">

                                                            <div className="tech-icon">
                                                                <img src="/assets/Alchemy.svg" alt="Alchemy" className="" />
                                                            </div>

                                                            <span className="tech-name">
                                                                Alchemy                                                        </span>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
