import React from 'react';
import type { ApplicationFormValues } from './schema';

interface Props {
  values: ApplicationFormValues;
}

const educationLabels: Record<string, string> = {
  high_school: 'High School',
  ged: 'GED',
  college: 'College',
};

const yesNo = (v: string) => (v === 'yes' ? 'Yes' : v === 'no' ? 'No' : '—');

const ReviewStep: React.FC<Props> = ({ values }) => {
  const rows: { label: string; value: string }[] = [
    { label: 'Name', value: `${values.firstName} ${values.lastName}`.trim() },
    { label: 'Date of Birth', value: values.dob || '—' },
    { label: 'Email', value: values.email || '—' },
    { label: 'Phone', value: values.phone || '—' },
    { label: 'Address', value: values.address || '—' },
    {
      label: 'Education',
      value: educationLabels[values.educationLevel] || '—',
    },
    { label: 'School', value: values.schoolName || '—' },
    { label: 'Graduation Year', value: values.graduationYear || '—' },
    { label: 'Current Employer', value: values.currentEmployer || '—' },
    { label: 'Previous Experience', value: values.previousExperience || '—' },
    { label: 'Why become a CNA?', value: values.whyCna || '—' },
    { label: 'Worked in healthcare', value: yesNo(values.workedInHealthcare) },
    { label: 'Transportation available', value: yesNo(values.transportationAvailable) },
    { label: 'Available start date', value: values.availableStartDate || '—' },
    { label: 'Resume', value: values.resumeName || '—' },
    { label: 'Diploma / GED', value: values.diplomaName || '—' },
    { label: 'Government ID', value: values.governmentIdName || '—' },
  ];

  return (
    <div className="academy-review" role="region" aria-labelledby="step-review-heading">
      <h3 id="step-review-heading">Review your application</h3>
      <p>Please confirm everything looks correct before submitting.</p>
      <dl className="academy-review__list">
        {rows.map((row) => (
          <div key={row.label} className="academy-review__row">
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ReviewStep;
