import { useEffect, useRef } from 'react';
import { RECAPTCHA_SITE_KEY } from '../../../lib/emailjsConfig';

type JobApplicationRecaptchaProps = {
  onChange: (token: string) => void;
  resetKey: number;
};

const RECAPTCHA_SCRIPT_ID = 'google-recaptcha-v2';

function loadRecaptchaScript() {
  if (document.getElementById(RECAPTCHA_SCRIPT_ID)) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
    document.body.appendChild(script);
  });
}

export default function JobApplicationRecaptcha({
  onChange,
  resetKey,
}: JobApplicationRecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      return undefined;
    }

    let cancelled = false;

    loadRecaptchaScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.grecaptcha) {
          return;
        }

        window.grecaptcha.ready(() => {
          if (cancelled || !containerRef.current || !window.grecaptcha) {
            return;
          }

          if (widgetIdRef.current !== null) {
            window.grecaptcha.reset(widgetIdRef.current);
            onChange('');
            return;
          }

          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: (token: string) => onChange(token),
            'expired-callback': () => onChange(''),
            'error-callback': () => onChange(''),
          });
        });
      })
      .catch(() => {
        onChange('');
      });

    return () => {
      cancelled = true;
    };
  }, [onChange, resetKey]);

  if (!RECAPTCHA_SITE_KEY) {
    return (
      <p className="careers-field-error">
        reCAPTCHA is not configured. Please set VITE_RECAPTCHA_SITE_KEY.
      </p>
    );
  }

  return <div ref={containerRef} className="careers-recaptcha" />;
}

export function resetJobApplicationRecaptcha(widgetId: number | null) {
  if (widgetId !== null && window.grecaptcha) {
    window.grecaptcha.reset(widgetId);
  }
}
