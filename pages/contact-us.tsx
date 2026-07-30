import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import MetaHead from '../components/MetaHead';
import ContactCard, { type ContactCardData } from '../components/cna-academy/ContactCard';

const fieldSx = {
  '& .MuiOutlinedInput-root': { backgroundColor: '#fff' },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#2c3e50',
  },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2c3e50' },
};

const facilityContact: ContactCardData = {
  role: 'Skilled Nursing & Rehabilitation',
  name: 'Gridley Post Acute',
  nameId: 'facility-contact-name',
  welcomeMessage:
    "Welcome to Gridley Post Acute! We're here to help with any questions about our services, to assist with scheduling a tour, or to provide additional information. Please call us or submit your information, and a member of our team will get back to you shortly.",
  phone: '(530) 456-0400',
  phoneHref: 'tel:530-456-0400',
  email: 'gridleyinfo@westharborhc.com',
  emailHref: 'mailto:gridleyinfo@westharborhc.com',
  officeLocation: '246 Spruce Street, Gridley, CA 95948',
  photoSrc: '/images/contact.jpg',
  photoAlt: 'Gridley Post Acute facility',
  directionsUrl: 'https://maps.google.com/?q=246+Spruce+Street,+Gridley,+CA+95948',
  showSocial: false,
};

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.4759533844663!2d-121.69302852311927!3d39.368102471627424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80834d5b339fba17%3A0x2dc5ed986d723914!2sGridley%20Post%20Acute!5e0!3m2!1sen!2sus!4v1731627311332!5m2!1sen!2sus';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  callbackTime: '',
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = 'Name is required';
    if (!formData.phone.trim()) next.phone = 'Phone is required';
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email';
    }
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
      const captchaToken = await executeRecaptcha('contactForm');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData(emptyForm);
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
        title="Contact Us - Gridley Post Acute"
        description="Get in touch with Gridley Post Acute. Our team is here to answer your questions, schedule a tour, or provide more information about our services. We look forward to hearing from you."
        image="/images/gpa-front.jpg"
        url={`${process.env.WEBSITE}/contact-us`}
      />

      <header className="academy-page-header">
        <h1>Contact Us</h1>
        <p>Questions, tours, or more information — we&apos;re here to help.</p>
      </header>

      <div className="academy-section academy-contact-layout">
        <ContactCard contact={facilityContact} />

        <div className="academy-contact-right">
          <section className="academy-contact-form-panel" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading">Send a Message</h2>

            {status === 'success' ? (
              <div className="academy-success academy-success--compact" role="status" aria-live="polite">
                <h3>Thank you!</h3>
                <p>Your message has been sent. A member of our team will get back to you shortly.</p>
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
                  id="contact-name"
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
                  id="contact-phone"
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
                  id="contact-email"
                  label="Email (optional)"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
                  autoComplete="email"
                  sx={fieldSx}
                />
                <TextField
                  id="contact-subject"
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  fullWidth
                  sx={fieldSx}
                />
                <TextField
                  id="contact-message"
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
                <TextField
                  id="contact-callback"
                  label="Best callback time"
                  name="callbackTime"
                  value={formData.callbackTime}
                  onChange={(e) => setFormData({ ...formData, callbackTime: e.target.value })}
                  fullWidth
                  placeholder="Preferred times to call you back"
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
                src={MAP_EMBED_URL}
                title="Map of Gridley Post Acute at 246 Spruce Street, Gridley, CA"
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

export default ContactUs;
