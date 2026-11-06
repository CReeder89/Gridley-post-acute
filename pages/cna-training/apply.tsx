import React from 'react';
import MetaHead from '../../components/MetaHead';
import ApplicationStepper from '../../components/cna-training/ApplicationStepper';
import { academyProgram, academySeo, applyContent } from '../../content/cnaTraining';

const CnaAcademyApply: React.FC = () => {
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

      <aside className="academy-application-notice" aria-labelledby="application-notice-heading">
        <p id="application-notice-heading" className="academy-application-notice__title">
          Important class update
        </p>
        <p>
          {academyProgram.firstClassNote}
        </p>
      </aside>

      <div className="academy-section academy-section--form">
        <ApplicationStepper />
      </div>
    </div>
  );
};

export default CnaAcademyApply;
