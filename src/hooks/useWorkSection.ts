import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function primeWorkStackLayout(section: HTMLElement) {
  if (window.innerWidth < 992) {
    return;
  }

  const scrollSection = section.querySelector<HTMLElement>('.scroll-section');
  const stackRoot = scrollSection ?? section;
  const items = stackRoot.querySelectorAll<HTMLElement>('.card_stack_item');

  items.forEach((item, index) => {
    gsap.set(item, {
      opacity: 1,
      scale: 1,
      zIndex: index + 1,
      yPercent: index === 0 ? 0 : 125,
      borderRadius: '0px',
      filter: 'blur(0px)',
    });
  });
}

export function useWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    primeWorkStackLayout(section);

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const attach = () => {
      if (cancelled || cleanup) {
        return;
      }

      if (!window.gsap || !window.ScrollTrigger || !window.techfyteInitWorkSections) {
        return;
      }

      cleanup = window.techfyteInitWorkSections(section);
    };

    attach();

    const customScript = document.getElementById('coreblock-custom');
    const onScriptLoad = () => attach();
    customScript?.addEventListener('load', onScriptLoad);

    const pollId = window.setInterval(() => {
      attach();
      if (cleanup) {
        window.clearInterval(pollId);
      }
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
      customScript?.removeEventListener('load', onScriptLoad);
      window.techfyteDestroyWorkSections?.(section);
      cleanup = undefined;
    };
  }, []);

  return { sectionRef };
}
