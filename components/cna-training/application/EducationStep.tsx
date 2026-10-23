import React from 'react';
import { Control } from 'react-hook-form';
import { FormSelectField, FormTextField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
}

const EducationStep: React.FC<Props> = ({ control }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-education-heading">
    <h3 id="step-education-heading" className="visually-hidden">
      Education
    </h3>
    <FormSelectField
      name="educationLevel"
      control={control}
      label="Highest Education Level"
      required
      options={[
        { value: 'high_school', label: 'High School' },
        { value: 'ged', label: 'GED' },
        { value: 'college', label: 'College' },
      ]}
    />
    <FormTextField name="schoolName" control={control} label="School Name (optional)" autoComplete="organization" />
    <FormTextField name="graduationYear" control={control} label="Graduation Year (optional)" />
  </div>
);

export default EducationStep;
