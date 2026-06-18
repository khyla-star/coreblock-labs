import { founders } from '../../../data/careers';
import CareersPersonCard from './CareersPersonCard';

export default function CareersFoundersSection() {
  return (
    <section className="careers-founders-section custom-spacing-y">
      <div className="container">
        <div className="section-header-2 text-center mb-5">
          <h2 className="title-2 careers-founders-title">Our Founders</h2>
          <p className="subtitle mx-auto">
            The leadership team guiding CoreBlock Labs — setting vision, technical direction,
            and the people-first culture behind our work.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {founders.map((person) => (
            <div key={person.id} className="col-lg-4 col-md-6">
              <CareersPersonCard person={person} variant="founder" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
