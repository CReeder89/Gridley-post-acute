import React from 'react';
import { Control } from 'react-hook-form';
import { FormFileField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
  onFileSelected: (field: 'resume', file: File | null) => boolean | Promise<boolean>;
}

const DocumentsStep: React.FC<Props> = ({ control, onFileSelected }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-documents-heading">
    <h3 id="step-documents-heading" className="visually-hidden">
      Documents
    </h3>
    <p className="academy-form-hint">
      A resume is optional. Do not upload a diploma or ID here. If you include a resume, upload a PDF, image, DOC, or DOCX file up to 15 MB. It is not saved with your draft, so please select it again if you return after closing this page.
    </p>
    <FormFileField
      name="resumeName"
      control={control}
      label="Resume (optional)"
      onFileSelected={(file) => onFileSelected('resume', file)}
    />
  </div>
);

export default DocumentsStep;
