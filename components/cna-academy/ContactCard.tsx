import React from 'react';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { academyContact } from '../../content/cnaAcademy';
import AcademySocialLinks from './AcademySocialLinks';

export type ContactCardData = {
  role?: string;
  name: string;
  nameId?: string;
  welcomeMessage: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  officeHours?: string;
  officeLocation: string;
  photoSrc: string;
  photoAlt: string;
  directionsUrl: string;
  /** When true, show Academy social links under the actions */
  showSocial?: boolean;
  socialLabel?: string;
};

interface ContactCardProps {
  contact?: ContactCardData;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact = {
    role: academyContact.directorTitle,
    name: academyContact.directorName,
    nameId: 'director-name',
    welcomeMessage: academyContact.welcomeMessage,
    phone: academyContact.phone,
    phoneHref: academyContact.phoneHref,
    email: academyContact.email,
    emailHref: academyContact.emailHref,
    officeHours: academyContact.officeHours,
    officeLocation: academyContact.officeLocation,
    photoSrc: academyContact.photoSrc,
    photoAlt: academyContact.photoAlt,
    directionsUrl: academyContact.directionsUrl,
    showSocial: true,
    socialLabel: 'Follow the Academy',
  },
}) => {
  const headingId = contact.nameId || 'contact-card-name';

  return (
    <article className="academy-contact-card" aria-labelledby={headingId}>
      <div className="academy-contact-card__photo">
        <Image
          src={contact.photoSrc}
          alt={contact.photoAlt}
          width={320}
          height={320}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="academy-contact-card__body">
        {contact.role && <p className="academy-contact-card__role">{contact.role}</p>}
        <h2 id={headingId}>{contact.name}</h2>
        <p className="academy-contact-card__welcome">{contact.welcomeMessage}</p>

        <ul className="academy-contact-card__details" role="list">
          <li>
            <PhoneIcon fontSize="small" aria-hidden="true" />
            <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            <EmailIcon fontSize="small" aria-hidden="true" />
            <a href={contact.emailHref}>{contact.email}</a>
          </li>
          {contact.officeHours && (
            <li>
              <AccessTimeIcon fontSize="small" aria-hidden="true" />
              <span>{contact.officeHours}</span>
            </li>
          )}
          <li>
            <LocationOnIcon fontSize="small" aria-hidden="true" />
            <span>{contact.officeLocation}</span>
          </li>
        </ul>

        <div className="academy-contact-card__actions" role="group" aria-label="Contact actions">
          <a href={contact.phoneHref} className="academy-btn academy-btn--solid">
            <PhoneIcon fontSize="small" aria-hidden="true" /> Call
          </a>
          <a href={contact.emailHref} className="academy-btn academy-btn--solid">
            <EmailIcon fontSize="small" aria-hidden="true" /> Email
          </a>
          <a
            href={contact.directionsUrl}
            className="academy-btn academy-btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DirectionsIcon fontSize="small" aria-hidden="true" /> Directions
          </a>
        </div>

        {contact.showSocial && (
          <div className="academy-contact-card__social">
            <p className="academy-contact-card__social-label">
              {contact.socialLabel || 'Follow Us'}
            </p>
            <AcademySocialLinks compact />
          </div>
        )}
      </div>
    </article>
  );
};

export default ContactCard;
