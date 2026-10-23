import React from 'react';
import { Control } from 'react-hook-form';
import { FormTextField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
}

const PersonalInfoStep: React.FC<Props> = ({ control }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-personal-heading">
    <h3 id="step-personal-heading" className="visually-hidden">
      Personal Information
    </h3>
    <FormTextField name="firstName" control={control} label="First Name" required autoComplete="given-name" />
    <FormTextField name="lastName" control={control} label="Last Name" required autoComplete="family-name" />
    <FormTextField name="dob" control={control} label="Date of Birth" type="date" required autoComplete="bday" />
    <FormTextField name="email" control={control} label="Email" type="email" required autoComplete="email" />
    <FormTextField name="phone" control={control} label="Phone" type="tel" required autoComplete="tel" />
    <FormTextField
      name="address"
      control={control}
      label="Address"
      required
      autoComplete="street-address"
      multiline
      rows={2}
    />
  </div>
);

export default PersonalInfoStep;
