import { coreValues } from '../data/company';

export default function SuccessSection() {
  return (
    <section id="success-section" className="success-section">
      <div className="container-fluid">
        <div className="success-container">
          <h2
            className="title text-anim text-white text-center mb-xl-5 mb-4"
            aria-label="Our Core Values"
          >
            <div className="line-mask" aria-hidden="true">
              <div className="line" aria-hidden="true">
                Our Core Values
              </div>
            </div>
          </h2>

          <div className="success-grid">
            {coreValues.map((value) => (
              <div key={value.title} className="success-card">
                <div className="success-icon">
                  <img src={value.icon} alt={value.iconAlt} loading="lazy" />
                </div>
                <h3 className="success-card-title">{value.title}</h3>
                <div className="success-card-desc">
                  <div>{value.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
