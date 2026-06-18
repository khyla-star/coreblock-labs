import { Link } from 'react-router-dom';
import { openRoles } from '../../../data/careers';

export default function CareersOpenRolesSection() {
  return (
    <section className="careers-openings-section custom-spacing-y" id="open-roles">
      <div className="container">
        <div className="section-header-2 text-center mb-5">
          <h2 className="title-2">Current Openings</h2>
          <p className="subtitle mx-auto">
            Select a role to view the full description and submit your application.
          </p>
        </div>

        <div className="careers-role-list">
          {openRoles.map((job, index) => (
            <Link
              key={job.id}
              to={`/careers/jobs/${job.id}`}
              className="careers-role-item"
            >
              <span className="careers-role-item-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="careers-role-item-content">
                <h3 className="careers-role-item-title">{job.title}</h3>
                <p className="careers-role-item-meta mb-0">
                  {job.level}
                  {job.type ? ` · ${job.type}` : ''}
                  {job.location ? ` · ${job.location}` : ''}
                </p>
              </div>
              <span className="careers-role-item-cta">
                View Role
                <span className="careers-role-item-arrow" aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
