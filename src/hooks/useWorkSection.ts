import { useEffect, useRef } from 'react';

export function useWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

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

    const customScript = document.getElementById('techfyte-custom');
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
