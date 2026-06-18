import { Carousel } from 'bootstrap';
import { useEffect } from 'react';

type BootstrapCarousel = {
  next: () => void;
  prev: () => void;
  dispose: () => void;
};

function initHeroCarousel(): (() => void) | undefined {
  const heroCarouselElement = document.getElementById('heroCarousel');
  if (!heroCarouselElement) {
    return undefined;
  }

  const carouselInstance = Carousel.getOrCreateInstance(heroCarouselElement, {
    interval: 5000,
    touch: true,
    ride: 'carousel',
  }) as BootstrapCarousel;

  let startX = 0;
  let isDragging = false;
  const dragThreshold = 50;

  const onMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
    startX = e.pageX;
    isDragging = true;
  };

  const onMouseUp = (e: MouseEvent) => {
    if (!isDragging) return;
    isDragging = false;

    const diffX = startX - e.pageX;
    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) {
        carouselInstance.next();
      } else {
        carouselInstance.prev();
      }
    }
  };

  const onMouseLeave = () => {
    isDragging = false;
  };

  const onDragStart = (e: Event) => e.preventDefault();

  heroCarouselElement.addEventListener('mousedown', onMouseDown);
  heroCarouselElement.addEventListener('mouseup', onMouseUp);
  heroCarouselElement.addEventListener('mouseleave', onMouseLeave);
  heroCarouselElement.querySelectorAll('img').forEach((img) => {
    img.addEventListener('dragstart', onDragStart);
  });

  return () => {
    heroCarouselElement.removeEventListener('mousedown', onMouseDown);
    heroCarouselElement.removeEventListener('mouseup', onMouseUp);
    heroCarouselElement.removeEventListener('mouseleave', onMouseLeave);
    heroCarouselElement.querySelectorAll('img').forEach((img) => {
      img.removeEventListener('dragstart', onDragStart);
    });
    carouselInstance.dispose();
  };
}

export function useHeroCarousel() {
  useEffect(() => {
    const cleanup = initHeroCarousel();
    return () => cleanup?.();
  }, []);
}
