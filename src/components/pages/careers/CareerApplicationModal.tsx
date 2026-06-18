import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import type { CareerJob } from '../../../data/careers';
import {
  CAREERS_RESUME_ACCEPT,
  CAREERS_RESUME_MAX_BYTES,
  isAcceptedResumeFile,
} from '../../../data/careers';

type CareerApplicationModalProps = {
  job: CareerJob;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>> & {
  resume?: string;
};

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  linkedin: '',
  message: '',
};

export default function CareerApplicationModal({
  job,
  isOpen,
  onClose,
  onSuccess,
}: CareerApplicationModalProps) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const resumeInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setForm(emptyForm);
    setResumeFile(null);
    setErrors({});
    if (resumeInputRef.current) {
      resumeInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleResumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setResumeFile(file);
    setErrors((current) => ({ ...current, resume: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!form.name.trim()) nextErrors.name = 'Please enter your name';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email';
    else if (!emailRegex.test(form.email.trim())) nextErrors.email = 'Please enter a valid email';

    if (!resumeFile) {
      nextErrors.resume = 'Please upload your resume';
    } else if (!isAcceptedResumeFile(resumeFile)) {
      nextErrors.resume = 'Resume must be a PDF, DOC, or DOCX file';
    } else if (resumeFile.size > CAREERS_RESUME_MAX_BYTES) {
      nextErrors.resume = 'Resume file must be 5 MB or smaller';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate() || !resumeFile) return;

    onSuccess(
      `Your application for ${job.title} has been received. We will review it and get back to you soon.`,
    );
    handleClose();
  };

  return (
    <div className="careers-modal-backdrop" onClick={handleClose} role="presentation">
      <div
        className="careers-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="careers-application-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="careers-modal-header">
          <h2 id="careers-application-title" className="careers-modal-title">
            Apply for {job.title}
          </h2>
          <button type="button" className="careers-modal-close" onClick={handleClose} aria-label="Close">
            ×
          </button>
        </div>

        <form className="careers-modal-form" onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="careerApplyName">Full Name *</label>
              <input
                id="careerApplyName"
                className="form-control"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
              {errors.name ? <p className="careers-field-error">{errors.name}</p> : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="careerApplyEmail">Email *</label>
              <input
                id="careerApplyEmail"
                type="email"
                className="form-control"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
              />
              {errors.email ? <p className="careers-field-error">{errors.email}</p> : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="careerApplyPhone">Phone</label>
              <input
                id="careerApplyPhone"
                type="tel"
                className="form-control"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
              />
              {errors.phone ? <p className="careers-field-error">{errors.phone}</p> : null}
            </div>
            <div className="col-md-6">
              <label htmlFor="careerApplyLinkedin">LinkedIn</label>
              <input
                id="careerApplyLinkedin"
                className="form-control"
                value={form.linkedin}
                onChange={(event) => updateField('linkedin', event.target.value)}
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div className="col-12">
              <label htmlFor="careerApplyResume">Resume *</label>
              <div className="careers-resume-upload">
                <input
                  ref={resumeInputRef}
                  id="careerApplyResume"
                  type="file"
                  className="careers-resume-input"
                  accept={CAREERS_RESUME_ACCEPT}
                  onChange={handleResumeChange}
                />
                <label htmlFor="careerApplyResume" className="careers-resume-label">
                  <span className="careers-resume-label-title">
                    {resumeFile ? resumeFile.name : 'Choose resume file'}
                  </span>
                  <span className="careers-resume-label-hint">PDF, DOC, or DOCX · Max 5 MB</span>
                </label>
              </div>
              {errors.resume ? <p className="careers-field-error">{errors.resume}</p> : null}
            </div>
            <div className="col-12">
              <label htmlFor="careerApplyMessage">Cover Message</label>
              <textarea
                id="careerApplyMessage"
                className="form-control"
                rows={4}
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                placeholder="Optional: tell us why you are a great fit for this role"
              />
            </div>
          </div>

          <div className="careers-modal-actions">
            <button type="button" className="btn btn-outline-secondary" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
