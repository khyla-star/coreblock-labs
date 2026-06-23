import { useState, type CSSProperties, type MouseEvent } from 'react';
import {
  profileTestimonials,
  type ProfileTestimonial,
} from '../data/profileTestimonials';
import { useProfileTestimonialsVisibleCount } from '../hooks/useBreakpoint';
import CarouselDots from './ui/CarouselDots';
import './ProfileTestimonialsSection.css';

type ProfileTestimonialCardProps = {
  testimonial: ProfileTestimonial;
  isPinned: boolean;
  onPin: () => void;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
};

function ProfileTestimonialCard({
  testimonial,
  isPinned,
  onPin,
  onClose,
}: ProfileTestimonialCardProps) {
  return (
    <article
      className={`profile-testimonial-slide${isPinned ? ' is-pinned' : ''}`}
    >
      <div
        className="profile-testimonial-card"
        onClick={onPin}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onPin();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Read testimonial from ${testimonial.name}`}
      >
        <div className="profile-testimonial-front" aria-hidden={isPinned}>
          <div className="profile-testimonial-photo">
            <img src={testimonial.image} alt={testimonial.imageAlt} loading="lazy" />
          </div>

          <div className="profile-testimonial-meta">
            <h3 className="profile-testimonial-name">{testimonial.name}</h3>
            <p className="profile-testimonial-role">{testimonial.role}</p>
            <span className="profile-testimonial-label">Testimonial</span>
          </div>
        </div>

        <div className="profile-testimonial-overlay" aria-hidden={!isPinned}>
          <button
            type="button"
            className="profile-testimonial-close"
            aria-label={`Close ${testimonial.name} testimonial`}
            onClick={onClose}
          >
            ×
          </button>

          <div className="profile-testimonial-expanded-header">
            <h3 className="profile-testimonial-name">{testimonial.name}</h3>
            <p className="profile-testimonial-role">{testimonial.role}</p>
          </div>

          <p className="profile-testimonial-quote">{testimonial.quote}</p>
        </div>
      </div>
    </article>
  );
}

export default function ProfileTestimonialsSection() {
  const visibleCount = useProfileTestimonialsVisibleCount();
  const maxIndex = Math.max(0, profileTestimonials.length - visibleCount);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const currentIndex = Math.min(activeIndex, maxIndex);

  const carouselStyle = {
    '--total-slides': profileTestimonials.length,
    '--visible-count': visibleCount,
    '--active-index': currentIndex,
  } as CSSProperties;

  const handleSelectSlide = (index: number) => {
    setPinnedId(null);
    setActiveIndex(index);
  };

  return (
    <section
      id="profile-testimonials-section"
      className="profile-testimonials-section custom-spacing-y"
    >
      <div className="container-fluid">
        <div className="section-header text-center">
          <h2 className="profile-testimonials-title">Testimonials</h2>
          <p className="profile-testimonials-subtitle">
            See What People Have To Say About Us
          </p>
        </div>

        <div className="profile-testimonials-carousel">
          <div
            className="profile-testimonials-carousel-viewport"
            style={carouselStyle}
          >
            <div className="profile-testimonials-carousel-track">
              {profileTestimonials.map((testimonial) => (
                <ProfileTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isPinned={pinnedId === testimonial.id}
                  onPin={() =>
                    setPinnedId((current) =>
                      current === testimonial.id ? null : testimonial.id,
                    )
                  }
                  onClose={(event) => {
                    event.stopPropagation();
                    setPinnedId(null);
                  }}
                />
              ))}
            </div>
          </div>

          <CarouselDots
            className="profile-testimonials-carousel-dots"
            count={maxIndex + 1}
            activeIndex={currentIndex}
            onSelect={handleSelectSlide}
            idPrefix="profile-testimonial-slide"
          />
        </div>
      </div>
    </section>
  );
}
