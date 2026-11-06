import React from 'react';
import type { GetServerSideProps } from 'next';
import MetaHead from '../../components/MetaHead';
import ApplicationStepper from '../../components/cna-training/ApplicationStepper';
import { academySeo, applyContent } from '../../content/cnaTraining';
import { getCnaSiteSettings, type CnaSiteSettings } from '../../lib/cnaContent';

const CnaAcademyApply: React.FC<{ publicSettings: CnaSiteSettings }> = ({ publicSettings }) => {
  const seo = academySeo.apply;

  return (
    <div className="academy-page">
      <MetaHead
        title={seo.title}
        description={seo.description}
        image="/images/cna-group1.jpg"
        url={`${process.env.WEBSITE}${seo.path}`}
      />

      <header className="academy-page-header">
        <h1>{applyContent.hero.headline}</h1>
        <p>{applyContent.hero.subheading}</p>
      </header>

      {publicSettings.noticeEnabled && (
        <aside className="academy-application-notice" aria-labelledby="application-notice-heading">
        <p id="application-notice-heading" className="academy-application-notice__title">
          Important class update
        </p>
          <p>{publicSettings.noticeText}</p>
        </aside>
      )}

      <div className="academy-section academy-section--form">
        <ApplicationStepper />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => ({
  props: { publicSettings: await getCnaSiteSettings() },
});

export default CnaAcademyApply;
