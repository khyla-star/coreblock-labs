import { useState } from 'react';
import {
  industryBentoSlides,
  type IndustryBentoCard,
  type IndustryBentoSlide,
} from '../data/industries';
import CarouselDots from './ui/CarouselDots';
import SectionTitle from './ui/SectionTitle';
import './IndustriesSection.css';

function IndustryCard({ card }: { card: IndustryBentoCard }) {
  return (
    <div className="industry-card">
      <img src={card.image} className="industry-card-bg" alt={card.imageAlt} />
      <div className="industry-card-overlay">
        <h4 className="industry-card-title">{card.title}</h4>
        <div className="industry-tags">
          {card.tags.map((tag) => (
            <span key={tag} className="industry-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoSlide({ slide }: { slide: IndustryBentoSlide }) {
  return (
    <div className="industries-bento">
      {slide.cards.map((card) => (
        <div key={card.title} className={card.slot}>
          <IndustryCard card={card} />
        </div>
      ))}
    </div>
  );
}

export default function IndustriesSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="industries-section custom-spacing-y">
      <div className="container-fluid">
        <div className="industries-container">
          <div className="section-header text-center">
            <SectionTitle
              lines={['Shaking up things… ', 'One Industry at a time!']}
              ariaLabel="Shaking up things… One Industry at a time!"
            />
            <div
              className="subtitle text-anim"
              aria-label="We help industries rethink and solve their operation glitches by embedding intelligence and trust into their digital core; unlocking efficiency, scale, and long-term value."
            >
              <div className="line-mask" aria-hidden="true">
                <div className="line" aria-hidden="true">
                  We help industries transform operations by embedding intelligence, trust, and
                  decentralized infrastructure into the digital core — unlocking efficiency, scale,
                  and long-term value.
                </div>
              </div>
            </div>
          </div>

          <div className="industries-carousel">
            {industryBentoSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`industries-slide${index === activeSlide ? ' is-active' : ''}`}
                role="tabpanel"
                aria-hidden={index !== activeSlide}
                id={`industries-slide-${index}`}
              >
                <BentoSlide slide={slide} />
              </div>
            ))}

            <CarouselDots
              className="industries-carousel-dots"
              count={industryBentoSlides.length}
              activeIndex={activeSlide}
              onSelect={setActiveSlide}
              idPrefix="industries-slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
