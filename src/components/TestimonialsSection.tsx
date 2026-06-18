import { useState, type CSSProperties } from 'react';
import { testimonials, type Testimonial } from '../data/testimonials';
import { useVisibleSlideCount } from '../hooks/useBreakpoint';
import CarouselDots from './ui/CarouselDots';
import SectionTitle from './ui/SectionTitle';
import './TestimonialsSection.css';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-slide">
      <div className="testimonial-card">
        <div className="quote-header">
          <div className="quote-icon">
            <img src="/assets/quote.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="testimonial-content">
          <div className="testimonial-text">
            <p>{testimonial.quote}</p>
          </div>
        </div>

        <div className="testimonial-footer">
          <div className="client-info">
            <div className="client-details">
              <h4 className="client-name">{testimonial.name}</h4>
              <span className="client-role">{testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const visibleCount = useVisibleSlideCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = Math.min(activeIndex, maxIndex);

  const carouselStyle = {
    '--total-slides': testimonials.length,
    '--visible-count': visibleCount,
    '--active-index': currentIndex,
  } as CSSProperties;

  return (
    <section className="testimonials-section custom-spacing-y">
      <div className="container-fluid">
        <div className="mb-xl-5 mb-4 text-center">
          <SectionTitle
            lines={['Hear From Our Clients Vouch', 'For Our Credibility']}
            ariaLabel="Hear From Our Clients Vouch For Our Credibility"
          />
        </div>

        <div className="testimonials-slider-wrapper">
          <div className="testimonials-carousel">
            <div className="testimonials-carousel-viewport" style={carouselStyle}>
              <div className="testimonials-carousel-track">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>

            <CarouselDots
              className="testimonials-carousel-dots"
              count={maxIndex + 1}
              activeIndex={currentIndex}
              onSelect={setActiveIndex}
              idPrefix="testimonial-slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
