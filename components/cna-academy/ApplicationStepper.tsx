import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import { uploadPresigned } from '@vercel/blob/client';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { applyContent } from '../../content/cnaAcademy';
import {
  ApplicationFormValues,
  DRAFT_RETENTION_MS,
  STORAGE_KEY,
  STORAGE_SAVED_AT_KEY,
  STORAGE_STEP_KEY,
  applicationSchema,
  defaultApplicationValues,
  stepFieldNames,
} from './application/schema';
import PersonalInfoStep from './application/PersonalInfoStep';
import EducationStep from './application/EducationStep';
import EmploymentStep from './application/EmploymentStep';
import QuestionsStep from './application/QuestionsStep';
import DocumentsStep from './application/DocumentsStep';
import ReviewStep from './application/ReviewStep';

type UploadedDocument = { pathname: string; filename: string; contentType: string; size: number };
type UploadedFiles = Record<'resume' | 'diploma' | 'governmentId', UploadedDocument | null>;

const MAX_TOTAL_FILE_SIZE = 18 * 1024 * 1024;
const MAX_FILE_SIZE = 15 * 1024 * 1024;
const fileNameField: Record<keyof UploadedFiles, 'resumeName' | 'diplomaName' | 'governmentIdName'> = {
  resume: 'resumeName',
  diploma: 'diplomaName',
  governmentId: 'governmentIdName',
};
const allowedFileTypes: Record<string, string[]> = {
  pdf: ['application/pdf'],
  jpg: ['image/jpeg'],
  jpeg: ['image/jpeg'],
  png: ['image/png'],
  doc: ['application/msword'],
  docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

function loadSavedValues(): ApplicationFormValues {
  if (typeof window === 'undefined') return defaultApplicationValues;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultApplicationValues;
    const savedAtRaw = localStorage.getItem(STORAGE_SAVED_AT_KEY);
    const savedAt = Number(savedAtRaw);
    if (savedAtRaw && (!savedAt || Date.now() - savedAt > DRAFT_RETENTION_MS)) {
      clearDraft();
      return defaultApplicationValues;
    }
    // Preserve drafts created before expiration timestamps were introduced.
    if (!savedAtRaw) localStorage.setItem(STORAGE_SAVED_AT_KEY, String(Date.now()));
    const saved = JSON.parse(raw);
    return {
      ...defaultApplicationValues,
      ...saved,
      // Browser storage preserves file names only, never the actual uploaded documents.
      resumeName: '',
      diplomaName: '',
      governmentIdName: '',
    };
  } catch {
    return defaultApplicationValues;
  }
}

function isBlankDraft(values: ApplicationFormValues): boolean {
  return Object.values(values).every((value) => typeof value !== 'string' || !value.trim());
}

function loadSavedStep(values: ApplicationFormValues): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(STORAGE_STEP_KEY);
    const step = raw ? Number(raw) : 0;
    if (!Number.isFinite(step) || step < 0 || step >= applyContent.steps.length) return 0;
    // Stale post-submit drafts: blank form stuck on Review → start fresh
    if (step > 0 && isBlankDraft(values)) {
      clearDraft();
      return 0;
    }
    // Files cannot be restored from browser storage. Return applicants to Documents
    // instead of showing a stale Review step that appears to have all files.
    const documentsStep = applyContent.steps.indexOf('Documents');
    if (step > documentsStep) return documentsStep;
    return step;
  } catch {
    return 0;
  }
}

function clearDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_STEP_KEY);
    localStorage.removeItem(STORAGE_SAVED_AT_KEY);
  } catch {
    // Ignore private mode / storage errors
  }
}

const ApplicationStepper: React.FC = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [activeStep, setActiveStep] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fileError, setFileError] = useState('');
  const [uploadingFile, setUploadingFile] = useState(false);
  const [files, setFiles] = useState<UploadedFiles>({
    resume: null,
    diploma: null,
    governmentId: null,
  });
  // Pause localStorage writes after a successful submit so reset() doesn't
  // re-save blank values + the review step index.
  const persistDraft = useRef(true);

  const deleteStoredDocument = useCallback(async (document: UploadedDocument | null) => {
    if (!document || !executeRecaptcha) return;
    try {
      const captchaToken = await executeRecaptcha('cnaAcademyDeleteUpload');
      await fetch('/api/cna-academy/delete-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pathname: document.pathname, captchaToken }),
      });
    } catch {
      // Expired or replaced uploads are also removed after successful submission when present.
    }
  }, [executeRecaptcha]);

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    reset,
    setValue,
    watch,
    formState: { isValidating },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: defaultApplicationValues,
    mode: 'onBlur',
  });

  useEffect(() => {
    const saved = loadSavedValues();
    const step = loadSavedStep(saved);
    reset(saved);
    setActiveStep(step);
    setHydrated(true);
  }, [reset]);

  useEffect(() => {
    if (!hydrated) return;
    const subscription = watch((values) => {
      if (!persistDraft.current) return;
      try {
        const draft = {
          ...values,
          resumeName: '',
          diplomaName: '',
          governmentIdName: '',
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
        localStorage.setItem(STORAGE_STEP_KEY, String(activeStep));
        localStorage.setItem(STORAGE_SAVED_AT_KEY, String(Date.now()));
      } catch {
        // Ignore quota / private mode errors
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, activeStep, hydrated]);

  const handleFileSelected = useCallback(
    async (field: keyof UploadedFiles, file: File | null) => {
      if (!file) {
        void deleteStoredDocument(files[field]);
        setFiles((prev) => ({ ...prev, [field]: null }));
        return true;
      }

      const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
      const allowedMimes = allowedFileTypes[extension];
      if (!allowedMimes || (file.type && !allowedMimes.includes(file.type))) {
        setFileError('That file type is not supported. Choose a PDF, JPG, PNG, DOC, or DOCX file.');
        return false;
      }

      if (file.size > MAX_FILE_SIZE) {
        setFileError('Each document must be 15 MB or less.');
        return false;
      }
      const otherFilesSize = Object.entries(files).reduce(
        (total, [key, current]) => total + (key !== field ? current?.size ?? 0 : 0),
        0
      );
      if (otherFilesSize + file.size > MAX_TOTAL_FILE_SIZE) {
        setFileError('The three documents must total 18 MB or less. Choose smaller files or compress the scans.');
        return false;
      }

      if (!executeRecaptcha) {
        setFileError('reCAPTCHA is not available. Please refresh and try again.');
        return false;
      }

      setFileError('');
      setUploadingFile(true);
      try {
        const captchaToken = await executeRecaptcha('cnaAcademyUpload');
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120) || `${field}.bin`;
        const pathname = `cna-applications/${crypto.randomUUID()}/${field}/${safeName}`;
        const blob = await uploadPresigned(pathname, file, {
          access: 'private',
          handleUploadUrl: '/api/cna-academy/upload',
          clientPayload: JSON.stringify({ captchaToken, contentType: allowedMimes[0] }),
          contentType: allowedMimes[0],
        });
        if (files[field]) void deleteStoredDocument(files[field]);
        setFiles((prev) => ({
          ...prev,
          [field]: { pathname: blob.pathname, filename: file.name, contentType: allowedMimes[0], size: file.size },
        }));
        return true;
      } catch (error) {
        setFileError(error instanceof Error ? error.message : 'Upload failed. Please try again.');
        return false;
      } finally {
        setUploadingFile(false);
      }
    },
    [files, executeRecaptcha, deleteStoredDocument]
  );

  const startFreshApplication = () => {
    Object.values(files).forEach((document) => void deleteStoredDocument(document));
    persistDraft.current = true;
    clearDraft();
    reset(defaultApplicationValues);
    setFiles({ resume: null, diploma: null, governmentId: null });
    setFileError('');
    setActiveStep(0);
    setSubmitError('');
    setSubmitted(false);
  };

  const handleNext = async () => {
    const fields = stepFieldNames[activeStep];
    const valid = await trigger(fields);
    if (!valid) return;
    const next = Math.min(activeStep + 1, applyContent.steps.length - 1);
    setActiveStep(next);
    if (persistDraft.current) {
      localStorage.setItem(STORAGE_STEP_KEY, String(next));
    }
  };

  const handleBack = () => {
    const prev = Math.max(activeStep - 1, 0);
    setActiveStep(prev);
    if (persistDraft.current) {
      localStorage.setItem(STORAGE_STEP_KEY, String(prev));
    }
  };

  /** Posts to /api/cna-academy/apply → emails EMAIL_TO_CAREER */
  const onSubmit = async (data: ApplicationFormValues) => {
    setSubmitting(true);
    setSubmitError('');
    try {
      if (!executeRecaptcha) {
        setSubmitError('reCAPTCHA is not available. Please refresh and try again.');
        return;
      }

      const captchaToken = await executeRecaptcha('cnaAcademyApply');

      const res = await fetch('/api/cna-academy/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, captchaToken, documents: files }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        if (res.status === 413) {
          throw new Error('The three documents must total 18 MB or less. Choose smaller files or compress the scans.');
        }
        throw new Error(payload?.message || 'Failed to submit application');
      }

      // Stop draft writes before reset/clear so blank review state is not persisted.
      persistDraft.current = false;
      clearDraft();
      reset(defaultApplicationValues);
      setFiles({ resume: null, diploma: null, governmentId: null });
      setActiveStep(0);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again or contact CNA Training.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitClick = () => {
    void handleSubmit(onSubmit)();
  };

  if (!hydrated) {
    return (
      <div className="academy-stepper" aria-busy="true">
        <p>Loading your saved progress…</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="academy-success" role="status" aria-live="polite">
        <CheckCircleOutlineIcon className="academy-success__icon" aria-hidden="true" />
        <h2>{applyContent.success.title}</h2>
        <p className="academy-success__thanks">{applyContent.success.message}</p>
        <p>{applyContent.success.detail}</p>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' } }}
          onClick={startFreshApplication}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  const isReviewStep = activeStep >= applyContent.steps.length - 1;

  return (
    <div className="academy-stepper">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className="academy-stepper__mui"
        sx={{
          mb: 3,
          '& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed': {
            color: '#2c3e50',
          },
        }}
      >
        {applyContent.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/*
        Never rely on native form submit — multi-step Next→Submit button swaps
        (and Enter in inputs) were auto-firing submission on the Review step.
      */}
      <form
        onSubmit={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          const tag = (e.target as HTMLElement).tagName;
          if (tag === 'TEXTAREA') return;
          e.preventDefault();
        }}
        noValidate
        aria-label="CNA Training application"
      >
        <div className="academy-stepper__panel">
          {activeStep === 0 && <PersonalInfoStep control={control} />}
          {activeStep === 1 && <EducationStep control={control} />}
          {activeStep === 2 && <EmploymentStep control={control} />}
          {activeStep === 3 && <QuestionsStep control={control} />}
        {activeStep === 4 && (
            <>
              <DocumentsStep
                control={control}
                onFileSelected={(field, file) => {
                  const accepted = handleFileSelected(field, file);
                  if (!accepted) setValue(fileNameField[field], '', { shouldValidate: true });
                  return accepted;
                }}
              />
              {fileError && (
                <Alert severity="error" role="alert" sx={{ mt: 2 }}>
                  {fileError}
                </Alert>
              )}
              {uploadingFile && <p role="status" aria-live="polite">Uploading document securely…</p>}
            </>
          )}
          {activeStep === 5 && <ReviewStep values={getValues()} />}
        </div>

        {submitError && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {submitError}
          </Alert>
        )}

        <div className="academy-stepper__nav">
          <Button
            type="button"
            disabled={activeStep === 0 || submitting}
            onClick={handleBack}
            variant="outlined"
            sx={{ borderColor: '#2c3e50', color: '#2c3e50' }}
          >
            Back
          </Button>

          {!isReviewStep ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={isValidating || submitting || uploadingFile}
              variant="contained"
              sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' } }}
            >
              Next
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmitClick}
              disabled={submitting || uploadingFile || Object.values(files).some((file) => !file)}
              variant="contained"
              sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' } }}
            >
              {submitting ? 'Submitting…' : 'Submit Application'}
            </Button>
          )}
        </div>

        <Button
          type="button"
          disabled={submitting}
          onClick={() => {
            if (window.confirm('Clear the saved application from this device?')) startFreshApplication();
          }}
          sx={{ mt: 1, color: '#2c3e50', textDecoration: 'underline' }}
        >
          Clear saved application
        </Button>
        <p className="academy-form-persist-note">
          Your progress is saved on this device for up to 30 days. You can leave and return later; documents must be selected again if you return after closing this page.
        </p>
      </form>
    </div>
  );
};

export default ApplicationStepper;
