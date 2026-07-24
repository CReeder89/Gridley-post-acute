import React from 'react';
import Image from 'next/image';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsIcon from '@mui/icons-material/Directions';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { academyContact } from '../../content/cnaAcademy';
import AcademySocialLinks from './AcademySocialLinks';

interface ContactCardProps {
  /** Override defaults from content config when needed */
  contact?: typeof academyContact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact = academyContact }) => {
  return (
    <article className="academy-contact-card" aria-labelledby="director-name">
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
        <p className="academy-contact-card__role">{contact.directorTitle}</p>
        <h2 id="director-name">{contact.directorName}</h2>
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
          <li>
            <AccessTimeIcon fontSize="small" aria-hidden="true" />
            <span>{contact.officeHours}</span>
          </li>
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

        <div className="academy-contact-card__social">
          <p className="academy-contact-card__social-label">Follow the Academy</p>
          <AcademySocialLinks compact />
        </div>
      </div>
    </article>
  );
};

export default ContactCard;
