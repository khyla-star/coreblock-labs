/// <reference types="vite/client" />

interface IntlTelInstance {
  isValidNumber: () => boolean;
  getNumber: () => string;
}

declare global {
  interface Window {
    intlTelInput?: unknown;
    techfyteInitIntlTelInput?: () => void;
    techfyteInitWorkSections?: (root?: ParentNode) => () => void;
    techfyteDestroyWorkSections?: (root?: ParentNode) => void;
    gsap?: {
      matchMedia: () => { add: (query: string, fn: () => (() => void) | void) => void };
      set: (target: Element, vars: Record<string, unknown>) => void;
      timeline: (vars?: { onComplete?: () => void }) => {
        to: (
          target: Element,
          vars: Record<string, unknown>,
          position?: string,
        ) => unknown;
      };
      ticker: { add: (fn: (time: number) => void) => void; lagSmoothing: (value: number) => void };
      registerPlugin: (...plugins: unknown[]) => void;
    };
    ScrollTrigger?: {
      create: (vars: Record<string, unknown>) => { kill: () => void };
      update: () => void;
    };
    ScrollToPlugin?: unknown;
    Lenis?: new (options: Record<string, unknown>) => {
      on: (event: string, handler: () => void) => void;
      raf: (time: number) => void;
    };
    grecaptcha?: { reset: () => void };
    bootstrap?: {
      Modal: {
        getOrCreateInstance: (el: Element) => { show: () => void };
      };
      Carousel: {
        getOrCreateInstance: (
          el: Element,
          options?: { interval?: number; touch?: boolean; ride?: string },
        ) => { next: () => void; prev: () => void; dispose: () => void };
      };
    };
  }

  interface HTMLInputElement {
    _techfyteIti?: IntlTelInstance;
  }
}

export {};
