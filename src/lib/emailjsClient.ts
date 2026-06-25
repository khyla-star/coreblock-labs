import emailjs from '@emailjs/browser';

export type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

let initializedPublicKey = '';

function readEmailJsConfig(
  serviceId: string | undefined,
  templateId: string | undefined,
  publicKey: string | undefined,
): EmailJsConfig {
  return {
    serviceId: serviceId?.trim() ?? '',
    templateId: templateId?.trim() ?? '',
    publicKey: publicKey?.trim() ?? '',
  };
}

export function resolveEmailJsConfig(primary: EmailJsConfig, fallback: EmailJsConfig): EmailJsConfig {
  return {
    serviceId: primary.serviceId || fallback.serviceId,
    templateId: primary.templateId || fallback.templateId,
    publicKey: primary.publicKey || fallback.publicKey,
  };
}

function assertEmailJsConfig(config: EmailJsConfig, label: string) {
  if (!config.serviceId || !config.templateId || !config.publicKey) {
    throw new Error(
      `${label} EmailJS is not configured. Add the required VITE_* variables to your .env file and restart the dev server.`,
    );
  }
}

function ensureEmailJsInitialized(publicKey: string) {
  if (initializedPublicKey === publicKey) {
    return;
  }

  emailjs.init({ publicKey });
  initializedPublicKey = publicKey;
}

export function getEmailJsErrorMessage(error: unknown, fallback: string) {
  if (error && typeof error === 'object') {
    if ('text' in error && typeof error.text === 'string' && error.text.trim()) {
      return error.text;
    }

    if ('message' in error && typeof error.message === 'string' && error.message.trim()) {
      return error.message;
    }
  }

  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}

export async function sendEmailJsMessage(
  config: EmailJsConfig,
  templateParams: Record<string, string>,
  label: string,
) {
  assertEmailJsConfig(config, label);
  ensureEmailJsInitialized(config.publicKey);

  try {
    const result = await emailjs.send(config.serviceId, config.templateId, templateParams, {
      publicKey: config.publicKey,
    });

    if (result.status !== 200) {
      throw new Error(result.text || `${label} email could not be sent.`);
    }

    return result;
  } catch (error) {
    throw new Error(getEmailJsErrorMessage(error, `${label} email could not be sent.`));
  }
}

export { readEmailJsConfig };
