import Image from 'next/image';
import { useRef, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import { uploadPresigned } from '@vercel/blob/client';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MetaHead from '../components/MetaHead';
import AnimateIn from '../components/AnimateIn';

type ResumeDocument = { pathname: string; filename: string; contentType: string; size: number };

const allowedResumeTypes: Record<string, string> = {
  pdf: 'application/pdf',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
const MAX_RESUME_SIZE = 15 * 1024 * 1024;

const emptyForm = { name: '', email: '', phone: '', position: '', resumeLink: '', coverLetter: '' };

const Careers: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [resumeDocument, setResumeDocument] = useState<ResumeDocument | null>(null);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { executeRecaptcha } = useReCaptcha();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setStatus(null);
  };

  const deleteResume = async (document: ResumeDocument) => {
    if (!executeRecaptcha) throw new Error('reCAPTCHA is not available. Please refresh and try again.');
    const captchaToken = await executeRecaptcha('jobResumeDelete');
    const response = await fetch('/api/cna-training/delete-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pathname: document.pathname, captchaToken }),
    });
    if (!response.ok) throw new Error('Could not remove the uploaded resume. Please try again.');
  };

  const handleResumeSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setStatus(null);
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    const contentType = allowedResumeTypes[extension];
    if (!contentType || (file.type && file.type !== contentType)) {
      setStatus({ type: 'error', message: 'Choose a PDF, JPG, PNG, DOC, or DOCX file.' });
      event.target.value = '';
      return;
    }
    if (file.size > MAX_RESUME_SIZE) {
      setStatus({ type: 'error', message: 'The resume must be 15 MB or smaller.' });
      event.target.value = '';
      return;
    }
    if (!executeRecaptcha) {
      setStatus({ type: 'error', message: 'reCAPTCHA is not available. Please refresh and try again.' });
      event.target.value = '';
      return;
    }

    setUploading(true);
    try {
      const captchaToken = await executeRecaptcha('jobResumeUpload');
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-120) || 'resume.pdf';
      const pathname = `job-applications/${crypto.randomUUID()}/resume/${safeName}`;
      const blob = await uploadPresigned(pathname, file, {
        access: 'private',
        handleUploadUrl: '/api/cna-training/upload',
        clientPayload: JSON.stringify({ captchaToken, contentType, applicationType: 'job' }),
        contentType,
      });
      if (resumeDocument) {
        try { await deleteResume(resumeDocument); } catch { /* New upload remains available. */ }
      }
      setResumeDocument({ pathname: blob.pathname, filename: file.name, contentType, size: file.size });
      setFormData((current) => ({ ...current, resumeLink: '' }));
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Resume upload failed. Please try again.' });
      event.target.value = '';
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveResume = async () => {
    if (!resumeDocument) return;
    setUploading(true);
    setStatus(null);
    try {
      await deleteResume(resumeDocument);
      setResumeDocument(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Could not remove the resume.' });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!resumeDocument && !formData.resumeLink.trim()) {
      setStatus({ type: 'error', message: 'Upload a resume or provide a link to one.' });
      return;
    }
    if (!executeRecaptcha) {
      setStatus({ type: 'error', message: 'reCAPTCHA is not available. Please refresh and try again.' });
      return;
    }

    setSubmitting(true);
    setStatus(null);
    try {
      const captchaToken = await executeRecaptcha('applyForm');
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken, resumeDocument }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.message || 'Could not submit your application. Please try again.');
      setStatus({ type: 'success', message: 'Your application has been sent. Thank you for your interest in joining our team.' });
      setFormData(emptyForm);
      setResumeDocument(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'An error occurred. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="academy-page academy-careers-page">
      <MetaHead
        title="Careers - Join the Gridley Post Acute Team"
        description="Explore rewarding career opportunities at Gridley Post Acute. Join our dedicated team and make a difference in the lives of our residents with your expertise and compassion."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/careers`}
      />

      <header className="academy-page-header">
        <h1>Careers at Gridley Post Acute</h1>
        <p>Bring your skills and compassion to a team that makes a difference every day.</p>
      </header>

      <div className="academy-section academy-careers-layout">
        <AnimateIn variant="slideLeft" style={{ minWidth: 0 }}>
          <section className="academy-careers-intro" aria-labelledby="careers-intro-heading">
            <Image
              src="/images/cna-group1.jpg"
              alt="Care team members at Gridley Post Acute"
              width={720}
              height={480}
              className="academy-careers-image"
              priority
            />
            <h2 id="careers-intro-heading">Make meaningful work part of your day.</h2>
            <p>
              Join our team at Gridley Post Acute. We are always looking for dedicated professionals
              to provide exceptional care and make a difference in our community.
            </p>
            <h3>Available positions</h3>
            <ul>
              <li>Registered Nurse (RN)</li>
              <li>Certified Nursing Assistant (CNA)</li>
              <li>Physical Therapist</li>
            </ul>
          </section>
        </AnimateIn>

        <AnimateIn variant="slideRight" delay={0.1} style={{ minWidth: 0 }}>
          <section className="academy-contact-form-panel academy-careers-form-panel" aria-labelledby="careers-form-heading">
            <h2 id="careers-form-heading">Apply to join our team</h2>
            <p className="academy-careers-form-intro">Share a few details and we’ll be in touch.</p>
            {status?.type === 'success' ? (
              <div className="academy-success academy-success--compact" role="status" aria-live="polite">
                <h3>Thank you!</h3>
                <p>{status.message}</p>
                <Button variant="outlined" onClick={() => setStatus(null)} sx={{ mt: 1, borderColor: '#2c3e50', color: '#2c3e50' }}>
                  Send another application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="academy-contact-form" aria-busy={submitting || uploading}>
                <TextField id="name" name="name" label="Full name" autoComplete="name" required fullWidth value={formData.name} onChange={handleInputChange} sx={careersFieldSx} />
                <TextField id="phone" name="phone" label="Phone number" type="tel" autoComplete="tel" required fullWidth value={formData.phone} onChange={handleInputChange} sx={careersFieldSx} />
                <TextField id="email" name="email" label="Email address" type="email" autoComplete="email" required fullWidth value={formData.email} onChange={handleInputChange} sx={careersFieldSx} />
                <TextField id="position" name="position" label="Position applying for" required fullWidth value={formData.position} onChange={handleInputChange} sx={careersFieldSx} />

                <FormControl className="academy-careers-resume-field">
                  <FormLabel htmlFor="resume-upload" sx={{ mb: 1, color: '#2c3e50' }}>Resume</FormLabel>
                  <p className="academy-form-hint">Upload a PDF, JPG, PNG, DOC, or DOCX file (up to 15 MB), or provide a link instead.</p>
                  <input
                    ref={fileInputRef}
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleResumeSelected}
                    disabled={uploading || submitting || Boolean(formData.resumeLink.trim())}
                    className="academy-careers-file-input"
                    aria-describedby="resume-upload-help"
                  />
                  <span id="resume-upload-help" className="visually-hidden">Maximum file size 15 megabytes.</span>
                  {uploading && <p role="status" aria-live="polite">Uploading resume securely…</p>}
                  {resumeDocument && (
                    <div className="academy-careers-uploaded-file">
                      <span>{resumeDocument.filename}</span>
                      <Button type="button" onClick={handleRemoveResume} disabled={uploading || submitting} size="small">Remove</Button>
                    </div>
                  )}
                </FormControl>

                <TextField
                  id="resumeLink"
                  name="resumeLink"
                  label="Resume link (instead of uploading)"
                  type="url"
                  fullWidth
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  disabled={Boolean(resumeDocument) || uploading || submitting}
                  helperText="Use a link to a resume stored online, such as Google Drive or Dropbox."
                  sx={careersFieldSx}
                />

                <TextField id="coverLetter" name="coverLetter" label="Cover letter" placeholder="Tell us a little about yourself and your interest in this position." required fullWidth multiline minRows={5} value={formData.coverLetter} onChange={handleInputChange} sx={careersFieldSx} />

                {status?.type === 'error' && <Alert severity="error" role="alert">{status.message}</Alert>}
                <Button type="submit" variant="contained" disabled={submitting || uploading} sx={{ backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#354e66' }, alignSelf: 'flex-start', px: 3, py: 1.2 }}>
                  {submitting ? 'Submitting…' : 'Submit application'}
                </Button>
              </form>
            )}
          </section>
        </AnimateIn>
      </div>
    </div>
  );
};

const careersFieldSx = {
  '& .MuiOutlinedInput-root': { backgroundColor: '#fff' },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#2c3e50' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2c3e50' },
};

export default Careers;
