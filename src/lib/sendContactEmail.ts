import { CONTACT_FORM_EMAILJS, type ContactFormEmailParams } from './emailjsConfig';
import { sendEmailJsMessage } from './emailjsClient';

export function sendContactEmail(params: ContactFormEmailParams) {
  const templateParams = {
    from_name: params.from_name,
    from_email: params.from_email,
    from_phone: params.from_phone,
    from_linkedin: '',
    message: params.message,
  };

  return sendEmailJsMessage(CONTACT_FORM_EMAILJS, templateParams, 'Contact form');
}
