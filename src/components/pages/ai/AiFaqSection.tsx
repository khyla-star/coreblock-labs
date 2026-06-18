import { Link } from 'react-router-dom';

export default function AiFaqSection() {
  return (
    <>
      <section className="faq-section custom-spacing-y">
          <div className="container">

              <div className="section-header-2 text-center">
                  <h2 className="title-2">AI Agent Infrastructure-Related FAQs </h2>
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

                                              What is AI agent infrastructure?                                    </button>
                                      </h2>

                                      <div id="faqLeft1" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              AI agent infrastructure is the platform and framework on which autonomous agents can operate, communicate, and perform functions. This defines the architecture of an AI agent and explains how its decision-making processes are implemented.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft2">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              Does CoreBlock Labs support industry standards like A2A and MCP?                                    </button>
                                      </h2>

                                      <div id="faqLeft2" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              Yes. CoreBlock Labs is built on open protocols from the ground up. We support A2A (Agent-to-Agent) for multi-agent collaboration and MCP (Model Context Protocol) for tool and data connectivity, both backed by the Linux Foundation and adopted by over 150 organizations including Google, Anthropic, AWS, and Microsoft.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft3">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              How do agents communicate with each other?                                    </button>
                                      </h2>

                                      <div id="faqLeft3" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              Agent interaction is achieved through message passing protocols, shared memory, and event-driven mechanisms to facilitate coordination in multi-agent systems.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft4">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              How does agent infrastructure handle failures?                                    </button>
                                      </h2>

                                      <div id="faqLeft4" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              The agent infrastructure incorporates fault tolerance measures including retrying operations and fallback agents and state recovery.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft5">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              How much does AI agent infrastructure cost to deploy?                                    </button>
                                      </h2>

                                      <div id="faqLeft5" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              It depends on how big, complex, and integrated your implementation will be. For enterprise-level implementation, there would be infrastructure, orchestration, and monitoring involved.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqLeft6">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              What is the difference between AI agents and workflows?                                    </button>
                                      </h2>

                                      <div id="faqLeft6" className="accordion-collapse collapse" data-bs-parent="#faqLeft">
                                          <div className="accordion-body">
                                              A workflow implies a set of pre-determined steps, whereas an agent takes actions based on its analysis. Agentic process automation integrates both.                                    </div>
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

                                              How does multi-agent orchestration work?                                    </button>
                                      </h2>

                                      <div id="faqRight1" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                          <div className="accordion-body">
                                              Multi-agent orchestration involves task allocation, interdependence, and coordination among agents in order to achieve a common goal. The orchestration of the agents is carried out in order to ensure their coordination during their operations.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight2">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              What is the difference between single agent and multi-agent systems?                                    </button>
                                      </h2>

                                      <div id="faqRight2" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                          <div className="accordion-body">
                                              The differences between single and multi-agent systems include independent operation of tasks by the former and task distribution to various agents in the latter. Multi-agent systems also offer scalability and complex problem solving.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight3">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              What is agent memory and why is it important?                                    </button>
                                      </h2>

                                      <div id="faqRight3" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                          <div className="accordion-body">
                                              Agent memory consists of information related to the agent's experiences and history of its interactions. Agent memory plays a critical role in decision-making by the agent.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight4">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              Can AI agents integrate with existing enterprise systems?                                    </button>
                                      </h2>

                                      <div id="faqRight4" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                          <div className="accordion-body">
                                              Yes, agents can be integrated with APIs, databases, and legacy systems and thus provide interaction within enterprise environments without breaking any work processes.                                    </div>
                                      </div>
                                  </div>

                          
                                  <div className="accordion-item faq-card mb-4">
                                      <h2 className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqRight5">

                                              <span className="faq-icon">
                                                  <img src="/assets/question.svg" alt="Question" className="" />
                                              </span>

                                              What is the time needed to develop and implement an agent system?                                    </button>
                                      </h2>

                                      <div id="faqRight5" className="accordion-collapse collapse" data-bs-parent="#faqRight">
                                          <div className="accordion-body">
                                              Depending on how complex your system needs to be, the timeframe varies from a couple of weeks for simple systems to a few months for enterprise multi-agents implementations.                                    </div>
                                      </div>
                                  </div>

                          
                      </div>
                  </div>

              </div>

                          <div className="text-center mt-5">
                              <Link
                                to="/contact"
                                className="btn btn-primary live-demo-highlight-2"
                              >
                                Still Have Questions? Get in Touch for a Custom Solution
                              </Link>
                                  </div>
                  </div>
      </section>
    </>
  );
}
