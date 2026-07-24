import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReCaptcha } from 'next-recaptcha-v3';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { applyContent } from '../../content/cnaAcademy';
import {
  ApplicationFormValues,
  STORAGE_KEY,
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

type UploadedFiles = {
  resume: File | null;
  diploma: File | null;
  governmentId: File | null;
};

function loadSavedValues(): ApplicationFormValues {
  if (typeof window === 'undefined') return defaultApplicationValues;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultApplicationValues;
    return { ...defaultApplicationValues, ...JSON.parse(raw) };
  } catch {
    return defaultApplicationValues;
  }
}

function loadSavedStep(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(STORAGE_STEP_KEY);
    const step = raw ? Number(raw) : 0;
    return Number.isFinite(step) && step >= 0 && step < applyContent.steps.length ? step : 0;
  } catch {
    return 0;
  }
}

const ApplicationStepper: React.FC = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [activeStep, setActiveStep] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [files, setFiles] = useState<UploadedFiles>({
    resume: null,
    diploma: null,
    governmentId: null,
  });

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    reset,
    watch,
    formState: { isValidating },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: defaultApplicationValues,
    mode: 'onBlur',
  });

  useEffect(() => {
    const saved = loadSavedValues();
    const step = loadSavedStep();
    reset(saved);
    setActiveStep(step);
    setHydrated(true);
  }, [reset]);

  useEffect(() => {
    if (!hydrated) return;
    const subscription = watch((values) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
        localStorage.setItem(STORAGE_STEP_KEY, String(activeStep));
      } catch {
        // Ignore quota / private mode errors
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, activeStep, hydrated]);

  const handleFileSelected = useCallback(
    (field: keyof UploadedFiles, file: File | null) => {
      setFiles((prev) => ({ ...prev, [field]: file }));
    },
    []
  );

  const clearDraft = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_STEP_KEY);
  };

  const handleNext = async () => {
    const fields = stepFieldNames[activeStep];
    const valid = await trigger(fields);
    if (!valid) return;
    const next = Math.min(activeStep + 1, applyContent.steps.length - 1);
    setActiveStep(next);
    localStorage.setItem(STORAGE_STEP_KEY, String(next));
  };

  const handleBack = () => {
    const prev = Math.max(activeStep - 1, 0);
    setActiveStep(prev);
    localStorage.setItem(STORAGE_STEP_KEY, String(prev));
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

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value ?? ''));
      });
      formData.append('captchaToken', captchaToken);

      if (files.resume) formData.append('resume', files.resume);
      if (files.diploma) formData.append('diploma', files.diploma);
      if (files.governmentId) formData.append('governmentId', files.governmentId);

      const res = await fetch('/api/cna-academy/apply', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(payload?.message || 'Failed to submit application');
      }

      clearDraft();
      setSubmitted(true);
      reset(defaultApplicationValues);
      setFiles({ resume: null, diploma: null, governmentId: null });
    } catch {
      setSubmitError('Something went wrong. Please try again or contact the Academy.');
    } finally {
      setSubmitting(false);
    }
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
          onClick={() => {
            setSubmitted(false);
            setActiveStep(0);
          }}
        >
          Submit another application
        </Button>
      </div>
    );
  }

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

      <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="CNA Academy application">
        <div className="academy-stepper__panel">
          {activeStep === 0 && <PersonalInfoStep control={control} />}
          {activeStep === 1 && <EducationStep control={control} />}
          {activeStep === 2 && <EmploymentStep control={control} />}
          {activeStep === 3 && <QuestionsStep control={control} />}
          {activeStep === 4 && (
            <DocumentsStep control={control} onFileSelected={handleFileSelected} />
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

          {activeStep < applyContent.steps.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={isValidating || submitting}
              variant="contained"
              sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' } }}
            >
              Next
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={submitting}
              variant="contained"
              sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' } }}
            >
              {submitting ? 'Submitting…' : 'Submit Application'}
            </Button>
          )}
        </div>

        <p className="academy-form-persist-note">
          Your progress is saved on this device. You can leave and return later to continue.
        </p>
      </form>
    </div>
  );
};

export default ApplicationStepper;
