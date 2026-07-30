import React from 'react';
import { Control } from 'react-hook-form';
import { FormFileField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
  onFileSelected: (field: 'resume' | 'diploma' | 'governmentId', file: File | null) => void;
}

const DocumentsStep: React.FC<Props> = ({ control, onFileSelected }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-documents-heading">
    <h3 id="step-documents-heading" className="visually-hidden">
      Documents
    </h3>
    <p className="academy-form-hint">
      Upload PDF or image files. Files are held locally until submission; reconnect the upload handler
      when the backend is ready.
    </p>
    <FormFileField
      name="resumeName"
      control={control}
      label="Resume"
      onFileSelected={(file) => onFileSelected('resume', file)}
    />
    <FormFileField
      name="diplomaName"
      control={control}
      label="High School Diploma / GED"
      onFileSelected={(file) => onFileSelected('diploma', file)}
    />
    <FormFileField
      name="governmentIdName"
      control={control}
      label="Government ID"
      onFileSelected={(file) => onFileSelected('governmentId', file)}
    />
  </div>
);

export default DocumentsStep;
