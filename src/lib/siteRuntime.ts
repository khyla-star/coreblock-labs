import * as bootstrap from 'bootstrap';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let customScriptPromise: Promise<void> | null = null;

function loadScript(src: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export function initSiteRuntime() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.ScrollToPlugin = ScrollToPlugin;
  window.bootstrap = bootstrap;
  window.Lenis = Lenis;

  document.documentElement.style.scrollBehavior = 'smooth';
}

export function loadCustomScript() {
  if (!customScriptPromise) {
    customScriptPromise = loadScript('/js/custom.js', 'coreblock-custom');
  }
  return customScriptPromise;
}
