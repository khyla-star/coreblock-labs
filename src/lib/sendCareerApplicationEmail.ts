import {
  CAREER_APPLICATION_EMAILJS,
  type CareerApplicationEmailParams,
} from './emailjsConfig';
import { sendEmailJsMessage } from './emailjsClient';

function buildCareerApplicationMessage(params: CareerApplicationEmailParams) {
  return [
    params.message.trim(),
    params.from_linkedin.trim() ? `LinkedIn: ${params.from_linkedin.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}

export function sendCareerApplicationEmail(params: CareerApplicationEmailParams) {
  const templateParams = {
    from_name: params.from_name,
    from_email: params.from_email,
    from_phone: params.from_phone,
    from_linkedin: '',
    message: buildCareerApplicationMessage(params),
  };

  return sendEmailJsMessage(
    CAREER_APPLICATION_EMAILJS,
    templateParams,
    'Career application',
  );
}
