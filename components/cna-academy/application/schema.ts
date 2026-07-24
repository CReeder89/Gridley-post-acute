import { z } from 'zod';

const phoneRegex = /^[\d\s()+-]{10,20}$/;

export const personalSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  email: z.email('Enter a valid email address'),
  phone: z.string().regex(phoneRegex, 'Enter a valid phone number'),
  address: z.string().min(5, 'Address is required'),
});

export const educationSchema = z.object({
  educationLevel: z.enum(['high_school', 'ged', 'college'], {
    error: 'Select your highest education level',
  }),
  schoolName: z.string().optional(),
  graduationYear: z.string().optional(),
});

export const employmentSchema = z.object({
  currentEmployer: z.string().min(1, 'Current employer is required (enter N/A if none)'),
  previousExperience: z.string().min(1, 'Please describe previous experience (or enter N/A)'),
});

export const questionsSchema = z.object({
  whyCna: z.string().min(20, 'Please share at least a few sentences about your motivation'),
  workedInHealthcare: z.enum(['yes', 'no'], {
    error: 'Please select an option',
  }),
  transportationAvailable: z.enum(['yes', 'no'], {
    error: 'Please select an option',
  }),
  availableStartDate: z.string().min(1, 'Available start date is required'),
});

/** Document metadata only — File objects are not persisted to localStorage */
export const documentsSchema = z.object({
  resumeName: z.string().min(1, 'Please upload your resume'),
  diplomaName: z.string().min(1, 'Please upload your high school diploma or GED'),
  governmentIdName: z.string().min(1, 'Please upload a government-issued ID'),
});

export const applicationSchema = personalSchema
  .merge(educationSchema)
  .merge(employmentSchema)
  .merge(questionsSchema)
  .merge(documentsSchema);

export type PersonalFormValues = z.infer<typeof personalSchema>;
export type EducationFormValues = z.infer<typeof educationSchema>;
export type EmploymentFormValues = z.infer<typeof employmentSchema>;
export type QuestionsFormValues = z.infer<typeof questionsSchema>;
export type DocumentsFormValues = z.infer<typeof documentsSchema>;
export type ApplicationFormValues = z.infer<typeof applicationSchema>;

export const defaultApplicationValues: ApplicationFormValues = {
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  phone: '',
  address: '',
  educationLevel: '' as ApplicationFormValues['educationLevel'],
  schoolName: '',
  graduationYear: '',
  currentEmployer: '',
  previousExperience: '',
  whyCna: '',
  workedInHealthcare: '' as ApplicationFormValues['workedInHealthcare'],
  transportationAvailable: '' as ApplicationFormValues['transportationAvailable'],
  availableStartDate: '',
  resumeName: '',
  diplomaName: '',
  governmentIdName: '',
};

export const STORAGE_KEY = 'wh-cna-academy-application-v1';
export const STORAGE_STEP_KEY = 'wh-cna-academy-application-step-v1';

export const stepFieldNames: (keyof ApplicationFormValues)[][] = [
  ['firstName', 'lastName', 'dob', 'email', 'phone', 'address'],
  ['educationLevel', 'schoolName', 'graduationYear'],
  ['currentEmployer', 'previousExperience'],
  ['whyCna', 'workedInHealthcare', 'transportationAvailable', 'availableStartDate'],
  ['resumeName', 'diplomaName', 'governmentIdName'],
  [
    'firstName',
    'lastName',
    'dob',
    'email',
    'phone',
    'address',
    'educationLevel',
    'currentEmployer',
    'previousExperience',
    'whyCna',
    'workedInHealthcare',
    'transportationAvailable',
    'availableStartDate',
    'resumeName',
    'diplomaName',
    'governmentIdName',
  ],
];

export const stepSchemas = [
  personalSchema,
  educationSchema,
  employmentSchema,
  questionsSchema,
  documentsSchema,
  applicationSchema,
] as const;
