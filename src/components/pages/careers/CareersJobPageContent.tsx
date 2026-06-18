import { useEffect, useState, type ReactNode } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CAREERS_APPLY_EMAIL, getJobById } from '../../../data/careers';
import CareerApplicationModal from './CareerApplicationModal';

function JobMetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="careers-job-meta-chip">
      <span className="careers-job-meta-chip-label">{label}</span>
      <span className="careers-job-meta-chip-value">{value}</span>
    </div>
  );
}

function JobSection({
  title,
  index,
  children,
}: {
  title: string;
  index: number;
  children: ReactNode;
}) {
  return (
    <article className="careers-job-section">
      <div className="careers-job-section-heading">
        <span className="careers-job-section-index">{String(index).padStart(2, '0')}</span>
        <h2 className="careers-job-section-title">{title}</h2>
      </div>
      <div className="careers-job-section-body">{children}</div>
    </article>
  );
}

export default function CareersJobPageContent() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? getJobById(jobId) : undefined;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!notice) return undefined;

    const timer = window.setTimeout(() => setNotice(''), 6000);
    return () => window.clearTimeout(timer);
  }, [notice]);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const employmentType = job.type ?? 'Open to discussion';
  const roleLocation = job.location ?? 'Flexible';

  return (
    <div className="pages-data careers-page careers-job-page">
      {notice ? (
        <div className="careers-application-toast" role="alert">
          {notice}
        </div>
      ) : null}

      <section className="careers-job-hero">
        <div className="container-fluid">
          <Link to="/careers#open-roles" className="careers-back-link careers-back-link--light">
            ← Back to Open Roles
          </Link>

          <div className="careers-job-hero-content">
            <p className="careers-job-hero-eyebrow">Open Position</p>
            <h1 className="careers-job-hero-title">{job.title}</h1>
            <p className="careers-job-hero-lead">
              Join CoreBlock Labs and help engineer the trust infrastructure of the digital economy
              through blockchain, tokenization, and AI-powered systems.
            </p>

            <div className="careers-job-meta-chips">
              <JobMetaChip label="Experience" value={job.level} />
              <JobMetaChip label="Employment" value={employmentType} />
              <JobMetaChip label="Location" value={roleLocation} />
            </div>
          </div>
        </div>
      </section>

      <section className="careers-job-body">
        <div className="container-fluid">
          <div className="careers-job-layout">
            <main className="careers-job-main">
              <JobSection title="What you'll do" index={1}>
                <ul className="careers-job-checklist">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </JobSection>

              <JobSection title="Who we're looking for" index={2}>
                <ul className="careers-job-checklist">
                  {job.profile.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </JobSection>

              <JobSection title="Skills & tools" index={3}>
                <ul className="careers-job-skill-list">
                  {job.skills.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </JobSection>

              {job.education ? (
                <JobSection title="Education" index={4}>
                  <p className="careers-job-education-text">{job.education}</p>
                </JobSection>
              ) : null}
            </main>

            <aside className="careers-job-sidebar">
              <div className="careers-job-summary-card">
                <h3 className="careers-job-summary-title">Apply for this role</h3>
                <p className="careers-job-summary-text">
                  Ready to move forward? Share your details and we will review your application
                  with our hiring team.
                </p>

                <dl className="careers-job-summary-facts">
                  <div>
                    <dt>Role</dt>
                    <dd>{job.title}</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>{job.level}</dd>
                  </div>
                  <div>
                    <dt>Employment</dt>
                    <dd>{employmentType}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{roleLocation}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="btn btn-primary w-100 careers-job-apply-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply Now
                </button>

                <p className="careers-job-summary-email">
                  Questions?{' '}
                  <a href={`mailto:${CAREERS_APPLY_EMAIL}`}>{CAREERS_APPLY_EMAIL}</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CareerApplicationModal
        job={job}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={setNotice}
      />
    </div>
  );
}
