import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { academySocial } from '../../content/cnaAcademy';

type SocialId = (typeof academySocial.links)[number]['id'];

interface AcademySocialLinksProps {
  /** Compact = icons only; default includes heading + intro */
  compact?: boolean;
  /** Use on dark backgrounds (CTA banners) */
  onDark?: boolean;
  className?: string;
}

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="22"
    height="22"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.2 8.2 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z" />
  </svg>
);

const icons: Record<SocialId, React.ReactNode> = {
  instagram: <InstagramIcon fontSize="inherit" />,
  facebook: <FacebookIcon fontSize="inherit" />,
  tiktok: <TikTokIcon />,
  x: <XIcon fontSize="inherit" />,
};

const AcademySocialLinks: React.FC<AcademySocialLinksProps> = ({
  compact = false,
  onDark = false,
  className = '',
}) => {
  const { heading, intro, links } = academySocial;

  return (
    <section
      className={`academy-social ${onDark ? 'academy-social--on-dark' : ''} ${compact ? 'academy-social--compact' : ''} ${className}`.trim()}
      aria-labelledby={compact ? undefined : 'academy-social-heading'}
      aria-label={compact ? heading : undefined}
    >
      {!compact && (
        <>
          <h2 id="academy-social-heading">{heading}</h2>
          <p className="academy-social__intro">{intro}</p>
        </>
      )}

      <ul className="academy-social__list" role="list">
        {links.map((link) => {
          const isPlaceholder = !link.href || link.href === '#';
          return (
            <li key={link.id}>
              <a
                href={isPlaceholder ? undefined : link.href}
                className="academy-social__link"
                aria-label={
                  isPlaceholder
                    ? `${link.label} (link coming soon)`
                    : `West Harbor CNA Academy on ${link.label}`
                }
                title={isPlaceholder ? `${link.label} — coming soon` : link.label}
                {...(!isPlaceholder
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : { role: 'link', 'aria-disabled': true })}
                onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
              >
                <span className="academy-social__icon" aria-hidden="true">
                  {icons[link.id]}
                </span>
                <span className="academy-social__label">{link.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AcademySocialLinks;
