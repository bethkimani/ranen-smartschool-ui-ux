import React from 'react';
import { AlertCircleIcon } from 'lucide-react';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, required, error, hint, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ?
        <span className="text-red-600">
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (required)</span>
          </span> :

        <span className="font-normal text-ink/50"> (optional)</span>
        }
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink/60">{hint}</p>}
      {error &&
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
          <AlertCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      }
    </div>);

}