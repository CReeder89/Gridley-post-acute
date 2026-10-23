import React from 'react';
import { Control } from 'react-hook-form';
import { FormFileField } from './FormFields';
import type { ApplicationFormValues } from './schema';

interface Props {
  control: Control<ApplicationFormValues>;
  onFileSelected: (field: 'resume' | 'diploma' | 'governmentId', file: File | null) => boolean | Promise<boolean>;
}

const DocumentsStep: React.FC<Props> = ({ control, onFileSelected }) => (
  <div className="academy-form-grid" role="group" aria-labelledby="step-documents-heading">
    <h3 id="step-documents-heading" className="visually-hidden">
      Documents
    </h3>
    <p className="academy-form-hint">
      Upload PDF, JPG, PNG, HEIC, HEIF, DOC, or DOCX files. iPhone HEIC/HEIF photos are converted to JPEG before upload. Each document can be up to 15 MB. Your files are uploaded securely and are not saved with your draft, so please select them again if you return after closing this page.
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
