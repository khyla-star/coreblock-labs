import type { CareerPerson } from '../../../data/careers';
import StarRating from './StarRating';

type PersonCardProps = {
  person: CareerPerson;
  variant?: 'founder' | 'teammate';
};

export default function CareersPersonCard({ person, variant = 'teammate' }: PersonCardProps) {
  return (
    <article className={`careers-person-card careers-person-card--${variant}`}>
      <div className="careers-person-photo-wrap">
        <img src={person.photo} alt={person.name} className="careers-person-photo" />
      </div>
      <div className="careers-person-body">
        {variant === 'founder' ? (
          <span className="careers-founder-badge">Founder</span>
        ) : null}
        <h3 className="careers-person-name">{person.name}</h3>
        <p className="careers-person-role">{person.role}</p>
        <StarRating rating={person.rating} />
        <p className="careers-person-bio">{person.bio}</p>
        {person.linkedin ? (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="careers-person-link"
          >
            View LinkedIn
          </a>
        ) : null}
      </div>
    </article>
  );
}
