import { homeHeroSlides } from '../data/company';
import { useHeroCarousel } from '../hooks/useHeroCarousel';

export default function HeroSection() {
  useHeroCarousel();

  return (
    <section className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {homeHeroSlides.map((slide, index) => {
            const HeadingTag = slide.isPrimaryHeading ? 'h1' : 'h2';

            return (
              <div
                key={slide.title}
                className={`carousel-item${index === 0 ? ' active' : ''}`}
              >
                <div className="container-fluid">
                  <div className="hero-content">
                    <div className={`row ${slide.rowAlign}`}>
                      <div className="col-lg-7">
                        <div className="carousel-content">
                          <div className="hero-text">
                            <span className="badge badge-primary mb-3">{slide.badge}</span>

                            <HeadingTag className="hero-title mb-3">{slide.title}</HeadingTag>

                            <p className="hero-subtitle mb-4">{slide.subtitle}</p>
                          </div>

                          <div className="stats-container">
                            <div className="stat-item">
                              <div className="stat-number">2k+</div>
                              <div className="stat-label">Platforms Delivered</div>
                            </div>
                            <div className="stat-item">
                              <div className="stat-number">12+</div>
                              <div className="stat-label">Years of Innovation</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-5 d-none d-lg-block">
                        <div className="carousel-image">
                          <img
                            src={slide.image}
                            className="img-fluid ms-lg-auto"
                            alt={slide.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="carousel-indicators">
          {homeHeroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === 0 ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
