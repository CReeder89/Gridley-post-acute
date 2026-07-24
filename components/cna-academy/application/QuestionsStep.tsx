import React from 'react';
import { Control } from 'react-hook-form';
import { FormRadioField, FormTextField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
}

const QuestionsStep: React.FC<Props> = ({ control }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-questions-heading">
    <h3 id="step-questions-heading" className="visually-hidden">
      Questions
    </h3>
    <FormTextField
      name="whyCna"
      control={control}
      label="Why do you want to become a CNA?"
      required
      multiline
      rows={4}
    />
    <FormRadioField
      name="workedInHealthcare"
      control={control}
      label="Have you worked in healthcare?"
      options={[
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ]}
    />
    <FormRadioField
      name="transportationAvailable"
      control={control}
      label="Is transportation available?"
      options={[
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ]}
    />
    <FormTextField
      name="availableStartDate"
      control={control}
      label="Available start date"
      type="date"
      required
    />
  </div>
);

export default QuestionsStep;
