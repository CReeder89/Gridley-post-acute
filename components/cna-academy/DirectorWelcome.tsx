import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { aboutContent } from '../../content/cnaAcademy';

type MollieMessage = typeof aboutContent.mollieMessage;

interface DirectorWelcomeProps {
  message?: MollieMessage;
}

const DirectorWelcome: React.FC<DirectorWelcomeProps> = ({
  message = aboutContent.mollieMessage,
}) => {
  return (
    <section className="academy-section" aria-labelledby="mollie-welcome-heading">
      <motion.article
        className="academy-director-welcome"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5 }}
      >
        <header className="academy-director-welcome__header">
          <p className="academy-director-welcome__eyebrow">{message.eyebrow}</p>
          <h2 id="mollie-welcome-heading">{message.pageTitle}</h2>
        </header>

        <div className="academy-director-welcome__layout">
          <aside className="academy-director-welcome__aside">
            <div className="academy-director-welcome__photo">
              <Image
                src={message.imageSrc}
                alt={message.imageAlt}
                width={360}
                height={440}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p className="academy-director-welcome__tagline">{message.tagline}</p>
            <div className="academy-director-welcome__sign-aside">
              <strong>{message.signatureName}</strong>
              {message.signatureTitles.map((title) => (
                <span key={title}>{title}</span>
              ))}
            </div>
          </aside>

          <div className="academy-director-welcome__body">
            <p className="academy-director-welcome__greeting">{message.greeting}</p>

            {message.paragraphsBeforeQuote.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 56)}
                className={i === 0 ? 'academy-director-welcome__dropcap' : undefined}
              >
                {paragraph}
              </p>
            ))}

            <blockquote className="academy-director-welcome__quote">
              <FormatQuoteIcon aria-hidden="true" />
              <p>{message.missionQuote}</p>
            </blockquote>

            {message.paragraphsAfterQuote.map((paragraph) => (
              <p key={paragraph.slice(0, 56)}>{paragraph}</p>
            ))}

            <footer className="academy-director-welcome__signoff">
              <p className="academy-director-welcome__tagline academy-director-welcome__tagline--inline">
                {message.tagline}
              </p>
              <p className="academy-director-welcome__name">{message.signatureName}</p>
              {message.signatureTitles.map((title) => (
                <p key={`sign-${title}`} className="academy-director-welcome__role">
                  {title}
                </p>
              ))}
            </footer>
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default DirectorWelcome;
