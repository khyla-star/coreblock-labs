import { readEmailJsConfig, resolveEmailJsConfig } from './emailjsClient';

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? '';

export const CONTACT_FORM_EMAILJS = readEmailJsConfig(
  import.meta.env.VITE_CONTACT_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_CONTACT_EMAILJS_TEMPLATE_ID,
  import.meta.env.VITE_CONTACT_EMAILJS_PUBLIC_KEY,
);

export const CAREER_APPLICATION_EMAILJS = resolveEmailJsConfig(
  readEmailJsConfig(
    import.meta.env.VITE_CAREER_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_CAREER_EMAILJS_TEMPLATE_ID,
    import.meta.env.VITE_CAREER_EMAILJS_PUBLIC_KEY,
  ),
  CONTACT_FORM_EMAILJS,
);

export type CareerApplicationEmailParams = {
  from_name: string;
  from_email: string;
  from_phone: string;
  from_linkedin: string;
  message: string;
};

export type ContactFormEmailParams = {
  from_name: string;
  from_email: string;
  from_phone: string;
  message: string;
};
