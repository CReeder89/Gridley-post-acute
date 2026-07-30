import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useReCaptcha } from 'next-recaptcha-v3';
import MetaHead from '../../components/MetaHead';
import ContactCard from '../../components/cna-academy/ContactCard';
import { academyContact, academySeo, contactPageContent } from '../../content/cnaAcademy';

const fieldSx = {
  '& .MuiOutlinedInput-root': { backgroundColor: '#fff' },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#2c3e50',
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2c3e50' },
};

const CnaAcademyContact: React.FC = () => {
  const seo = academySeo.contact;
  const { executeRecaptcha } = useReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) next.phone = 'Phone is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      next.message = 'Please enter a message (at least 10 characters)';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!executeRecaptcha) {
      setStatus('error');
      return;
    }

    setSubmitting(true);
    setStatus('idle');

    try {
      const captchaToken = await executeRecaptcha('cnaAcademyContact');
      const res = await fetch('/api/cna-academy/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="academy-page">
      <MetaHead
        title={seo.title}
        description={seo.description}
        image="/images/cna-group1.jpg"
        url={`${process.env.WEBSITE}${seo.path}`}
      />

      <header className="academy-page-header">
        <h1>{contactPageContent.hero.headline}</h1>
        <p>{contactPageContent.hero.subheading}</p>
      </header>

      <div className="academy-section academy-contact-layout">
        <ContactCard />

        <div className="academy-contact-right">
          <section className="academy-contact-form-panel" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading">Send a Message</h2>

            {status === 'success' ? (
              <div className="academy-success academy-success--compact" role="status" aria-live="polite">
                <h3>{contactPageContent.formSuccess.title}</h3>
                <p>{contactPageContent.formSuccess.message}</p>
                <Button
                  variant="outlined"
                  sx={{ mt: 1, borderColor: '#2c3e50', color: '#2c3e50' }}
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="academy-contact-form">
                <TextField
                  id="academy-contact-name"
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name}
                  autoComplete="name"
                  sx={fieldSx}
                />
                <TextField
                  id="academy-contact-email"
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
                  autoComplete="email"
                  sx={fieldSx}
                />
                <TextField
                  id="academy-contact-phone"
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone}
                  autoComplete="tel"
                  sx={fieldSx}
                />
                <TextField
                  id="academy-contact-message"
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  fullWidth
                  multiline
                  rows={5}
                  error={!!errors.message}
                  helperText={errors.message}
                  sx={fieldSx}
                />

                {status === 'error' && (
                  <Alert severity="error">Unable to send message. Please try again.</Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={submitting}
                  sx={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#2c3e50',
                    '&:hover': { backgroundColor: '#354e66' },
                  }}
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </section>

          <div className="academy-contact-map-wrap">
            <div className="academy-contact-map-frame">
              <iframe
                className="academy-contact-map"
                src={academyContact.mapEmbedUrl}
                title={`Map of West Harbor CNA Academy at ${academyContact.officeLocation}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CnaAcademyContact;
