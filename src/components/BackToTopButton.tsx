import { useCallback, useEffect, useState } from 'react';
import './BackToTopButton.css';

const SCROLL_THRESHOLD = 200;

function getScrollY() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(getScrollY() >= SCROLL_THRESHOLD);
    };

    updateVisibility();

    window.addEventListener('scroll', updateVisibility, { passive: true });

    let lenisCleanup: (() => void) | undefined;
    const attachLenis = () => {
      const lenis = window.siteLenis;
      if (!lenis?.on) return false;

      lenis.on('scroll', updateVisibility);
      lenisCleanup = () => {
        lenis.off?.('scroll', updateVisibility);
      };
      return true;
    };

    let pollId: number | undefined;
    if (!attachLenis()) {
      pollId = window.setInterval(() => {
        if (attachLenis() && pollId !== undefined) {
          window.clearInterval(pollId);
        }
      }, 150);
    }

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      if (pollId !== undefined) window.clearInterval(pollId);
      lenisCleanup?.();
    };
  }, []);

  const scrollToTop = useCallback(() => {
    if (window.siteLenis?.scrollTo) {
      window.siteLenis.scrollTo(0, { immediate: false });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 5.5 5.5 12l1.4 1.4L11 8.9V18h2V8.9l4.1 4.5 1.4-1.4L12 5.5Z" />
      </svg>
    </button>
  );
}
