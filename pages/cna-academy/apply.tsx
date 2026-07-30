import React from 'react';
import MetaHead from '../../components/MetaHead';
import ApplicationStepper from '../../components/cna-academy/ApplicationStepper';
import { academySeo, applyContent } from '../../content/cnaAcademy';

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
        {applyContent.hero.note ? (
          <p className="academy-page-header__note">{applyContent.hero.note}</p>
        ) : null}
      </header>

      <div className="academy-section academy-section--form">
        <ApplicationStepper />
      </div>
    </div>
  );
};

export default CnaAcademyApply;
