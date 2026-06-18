import { careerAwards } from '../../../data/careers';

export default function CareersSuccessSection() {
  return (
    <section className="careers-success-section custom-spacing-y bg-white">
      <div className="container">
        <div className="section-header-2 text-center mb-5">
          <h2 className="title-2">Celebrating Our Success</h2>
          <p className="subtitle mx-auto">
            Recognition from industry platforms and certification bodies that reflect our
            commitment to quality delivery.
          </p>
        </div>

        <div className="careers-awards-grid">
          {careerAwards.map((award) => {
            const image = (
              <img src={award.image} alt={award.name} className="careers-award-logo" />
            );

            if (award.href) {
              return (
                <a
                  key={award.id}
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="careers-award-link"
                  aria-label={award.name}
                >
                  {image}
                </a>
              );
            }

            return (
              <div key={award.id} className="careers-award-item">
                {image}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
