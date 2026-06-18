import { useEffect } from 'react';

type ContactFormOptions = {
  referer?: string;
};

const PHONE_PATTERN = /^\+?[\d\s().-]{7,24}$/;

export function useContactForm({ referer = '/' }: ContactFormOptions = {}) {
  useEffect(() => {
    const formStatus =
      document.querySelector<HTMLElement>('#contact_form_status_top') ??
      document.querySelector<HTMLElement>('#contact_form_status');
    let statusTimer: ReturnType<typeof setTimeout> | null = null;

    const showFormNotice = (message: string) => {
      if (!formStatus) {
        return;
      }
      formStatus.classList.remove('d-none', 'alert-success');
      formStatus.classList.add('alert', 'alert-danger');
      formStatus.textContent = message;
      if (statusTimer) clearTimeout(statusTimer);
      statusTimer = setTimeout(() => {
        formStatus.classList.add('d-none');
        formStatus.textContent = '';
      }, 5000);
    };

    const showFormSuccess = (message: string) => {
      if (!formStatus) {
        return;
      }
      formStatus.classList.remove('d-none', 'alert-danger');
      formStatus.classList.add('alert', 'alert-success');
      formStatus.textContent = message;
      if (statusTimer) clearTimeout(statusTimer);
      statusTimer = setTimeout(() => {
        formStatus.classList.add('d-none');
        formStatus.textContent = '';
      }, 6000);
    };

    const preselectQuery = new URLSearchParams(window.location.search).get('param');
    const cleanups: Array<() => void> = [];

    const forms = document.querySelectorAll<HTMLFormElement>('form#contact-form');
    if (!forms.length) {
      return undefined;
    }

    forms.forEach((form) => {
      if (form.dataset.contactBound === '1') {
        return;
      }
      form.dataset.contactBound = '1';

      const refererInput = form.querySelector<HTMLInputElement>('input[name="_wp_http_referer"]');
      if (refererInput) {
        refererInput.value = referer;
      }

      const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]');
      const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
      const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
      const querySelect = form.querySelector<HTMLSelectElement>('select[name="query"]');
      const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
      const submitBtn = form.querySelector<HTMLButtonElement>('#contact_submit_btn');

      const nameError = form.querySelector<HTMLElement>('#name_error');
      const emailError = form.querySelector<HTMLElement>('#email_error');
      const phoneError = form.querySelector<HTMLElement>('#phone_error');
      const queryError = form.querySelector<HTMLElement>('#query_error');
      const messageError = form.querySelector<HTMLElement>('#message_error');

      if (querySelect && preselectQuery) {
        const normalized = preselectQuery.trim().toLowerCase();
        const match = Array.from(querySelect.options).find(
          (opt) => opt.value.toLowerCase() === normalized,
        );
        if (match) {
          querySelect.value = match.value;
        }
      }

      const onSubmit = (event: SubmitEvent) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (nameError) nameError.textContent = '';
        if (emailError) emailError.textContent = '';
        if (phoneError) phoneError.textContent = '';
        if (queryError) queryError.textContent = '';
        if (messageError) messageError.textContent = '';
        if (formStatus) formStatus.textContent = '';

        if (nameInput && !nameInput.value.trim()) {
          if (nameError) nameError.textContent = 'Please enter name';
          showFormNotice('Please fill in all required fields.');
          event.preventDefault();
          nameInput.focus();
          return;
        }

        if (nameInput && !nameRegex.test(nameInput.value.trim())) {
          if (nameError) nameError.textContent = 'Only alphabets and spaces are allowed.';
          showFormNotice('Please correct the highlighted fields before sending your message.');
          event.preventDefault();
          nameInput.focus();
          return;
        }

        if (nameInput && nameInput.value.trim().length > 100) {
          if (nameError) nameError.textContent = 'Only 100 letters with white space are allowed';
          showFormNotice('Please correct the highlighted fields before sending your message.');
          event.preventDefault();
          nameInput.focus();
          return;
        }

        if (emailInput && !emailInput.value.trim()) {
          if (emailError) emailError.textContent = 'Please enter an email';
          showFormNotice('Please fill in all required fields.');
          event.preventDefault();
          emailInput.focus();
          return;
        }

        if (emailInput && !emailRegex.test(emailInput.value.trim())) {
          if (emailError) emailError.textContent = 'Please enter a valid email';
          showFormNotice('Please correct the highlighted fields before sending your message.');
          event.preventDefault();
          emailInput.focus();
          return;
        }

        if (phoneInput && !phoneInput.value.trim()) {
          if (phoneError) phoneError.textContent = 'Phone is required';
          showFormNotice('Please fill in all required fields.');
          event.preventDefault();
          phoneInput.focus();
          return;
        }

        if (phoneInput && !PHONE_PATTERN.test(phoneInput.value.trim())) {
          if (phoneError) phoneError.textContent = 'Invalid phone number';
          showFormNotice('Please correct the highlighted fields before sending your message.');
          event.preventDefault();
          phoneInput.focus();
          return;
        }

        if (querySelect && !querySelect.value) {
          if (queryError) queryError.textContent = 'Please select a query type';
          showFormNotice('Please fill in all required fields.');
          event.preventDefault();
          querySelect.focus();
          return;
        }

        if (messageInput && !messageInput.value.trim()) {
          if (messageError) messageError.textContent = 'Message is required';
          showFormNotice('Please fill in all required fields.');
          event.preventDefault();
          messageInput.focus();
          return;
        }

        event.preventDefault();
        submitBtn?.classList.add('is-loading');
        if (submitBtn) submitBtn.disabled = true;

        window.setTimeout(() => {
          form.reset();
          showFormSuccess('Thank you for reaching out. Our team will get back to you shortly.');
          submitBtn?.classList.remove('is-loading');
          if (submitBtn) submitBtn.disabled = false;
        }, 300);
      };

      form.addEventListener('submit', onSubmit);
      cleanups.push(() => {
        form.removeEventListener('submit', onSubmit);
        delete form.dataset.contactBound;
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      if (statusTimer) clearTimeout(statusTimer);
    };
  }, [referer]);
}
