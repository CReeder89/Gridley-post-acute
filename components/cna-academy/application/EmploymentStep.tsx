import React from 'react';
import { Control } from 'react-hook-form';
import { FormTextField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
}

const EmploymentStep: React.FC<Props> = ({ control }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-employment-heading">
    <h3 id="step-employment-heading" className="visually-hidden">
      Employment
    </h3>
    <FormTextField
      name="currentEmployer"
      control={control}
      label="Current Employer"
      required
      autoComplete="organization"
    />
    <FormTextField
      name="previousExperience"
      control={control}
      label="Previous Experience"
      required
      multiline
      rows={4}
    />
  </div>
);

export default EmploymentStep;
