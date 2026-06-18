import { useState, type CSSProperties } from 'react';
import { developmentServices, type ServiceItem } from '../data/services';
import { useServicesVisibleCount } from '../hooks/useBreakpoint';
import CarouselDots from './ui/CarouselDots';
import SectionTitle from './ui/SectionTitle';
import './ServicesSection.css';

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="service-card-wrapper">
      <div className="service-card">
        <div className={`service-icon ${service.iconClass}`}>
          <img src={service.icon} alt={service.iconAlt} loading="lazy" />
        </div>
        <h4 className="service-card-title">{service.title}</h4>
        <p className="service-card-desc">{service.description}</p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const visibleCount = useServicesVisibleCount();
  const maxIndex = Math.max(0, developmentServices.length - visibleCount);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndex = Math.min(activeIndex, maxIndex);

  const carouselStyle = {
    '--total-slides': developmentServices.length,
    '--visible-count': visibleCount,
    '--active-index': currentIndex,
  } as CSSProperties;

  return (
    <section className="services-section custom-spacing-y">
      <div className="services-wrapper">
        <div className="container-fluid">
          <div className="section-header">
            <SectionTitle
              lines={['What We Build', 'at CoreBlock Labs']}
              ariaLabel="What We Build at CoreBlock Labs"
            />
          </div>

          <div className="services-carousel">
            <div className="services-carousel-viewport" style={carouselStyle}>
              <div className="services-carousel-track">
                {developmentServices.map((service) => (
                  <ServiceCard key={service.title} service={service} />
                ))}
              </div>
            </div>

            <CarouselDots
              className="services-carousel-dots"
              count={maxIndex + 1}
              activeIndex={currentIndex}
              onSelect={setActiveIndex}
              idPrefix="service-slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
