import React from 'react';
import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#2c3e50',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#2c3e50',
  },
};

interface TextFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  fullSpan?: boolean;
}

export function FormTextField<T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  multiline = false,
  rows = 3,
  required = false,
  autoComplete,
  fullSpan = false,
}: TextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          value={field.value ?? ''}
          id={String(name)}
          label={label}
          type={type}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          required={required}
          autoComplete={autoComplete}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          InputLabelProps={type === 'date' ? { shrink: true } : undefined}
          sx={fieldSx}
          className={fullSpan || multiline ? 'academy-field-span' : undefined}
        />
      )}
    />
  );
}

interface SelectFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  fullSpan?: boolean;
}

export function FormSelectField<T extends FieldValues>({
  name,
  control,
  label,
  options,
  required = false,
  fullSpan = false,
}: SelectFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          value={field.value ?? ''}
          select
          id={String(name)}
          label={label}
          required={required}
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          sx={fieldSx}
          className={fullSpan ? 'academy-field-span' : undefined}
        >
          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}

interface RadioFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  options: { value: string; label: string }[];
}

export function FormRadioField<T extends FieldValues>({
  name,
  control,
  label,
  options,
}: RadioFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl
          error={!!fieldState.error}
          component="fieldset"
          fullWidth
          className="academy-field-span"
        >
          <FormLabel
            id={`${String(name)}-label`}
            sx={{ color: '#2c3e50', '&.Mui-focused': { color: '#2c3e50' } }}
          >
            {label}
          </FormLabel>
          <RadioGroup
            {...field}
            value={field.value ?? ''}
            aria-labelledby={`${String(name)}-label`}
            row
          >
            {options.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio sx={{ '&.Mui-checked': { color: '#2c3e50' } }} />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
          {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}

interface FileFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  label: string;
  accept?: string;
  onFileSelected?: (file: File | null) => void;
}

export function FormFileField<T extends FieldValues>({
  name,
  control,
  label,
  accept = '.pdf,.jpg,.jpeg,.png,.doc,.docx',
  onFileSelected,
}: FileFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth className="academy-field-span">
          <FormLabel htmlFor={String(name)} sx={{ mb: 1, color: '#2c3e50' }}>
            {label}
          </FormLabel>
          <input
            id={String(name)}
            type="file"
            accept={accept}
            className="academy-file-input"
            aria-describedby={fieldState.error ? `${String(name)}-error` : undefined}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              field.onChange(file ? file.name : '');
              onFileSelected?.(file);
            }}
          />
          {field.value ? (
            <p className="academy-file-selected" aria-live="polite">
              Selected: {String(field.value)}
            </p>
          ) : null}
          {fieldState.error && (
            <FormHelperText id={`${String(name)}-error`}>{fieldState.error.message}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
