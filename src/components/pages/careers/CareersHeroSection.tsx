import { COMPANY_NAME, COMPANY_TAGLINE, companyMission } from '../../../data/company';

export default function CareersHeroSection() {
  return (
    <section
      className="careers-vision-hero"
      style={{ backgroundImage: "url('/assets/careers/careers-hero-bg.jpg')" }}
    >
      <div className="careers-vision-hero-overlay" />
      <div className="container-fluid careers-vision-hero-content">
        <h1 className="careers-vision-title">{COMPANY_TAGLINE}</h1>
        <p className="careers-vision-text">
          At {COMPANY_NAME}, every team member acts like a founder. {companyMission} Join us to
          build technologies that create measurable business value, engineering excellence, and
          long-term impact.
        </p>
      </div>
    </section>
  );
}
