import { useState } from 'react';
import type { FormEvent } from 'react';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
export type FormErrors<T> = Partial<Record<keyof T, string>>;

export function useValidatedForm<T extends Record<string, string>>(
initialValues: T,
validate: (values: T) => FormErrors<T>,
idPrefix: string)
{
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submitted, setSubmitted] = useState(false);

  function setField<K extends keyof T>(key: K, value: string) {
    const next = { ...values, [key]: value } as T;
    setValues(next);
    if (submitted) setErrors(validate(next));
  }

  async function handleSubmit(event: FormEvent, onValid: (values: T) => Promise<void>) {
    event.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`${idPrefix}-${firstInvalid}`)?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await onValid(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setStatus('idle');
  }

  const fieldProps = (key: keyof T & string) => ({
    id: `${idPrefix}-${key}`,
    name: key,
    value: values[key],
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${idPrefix}-${key}-error` : undefined
  });

  return { values, errors, status, setField, handleSubmit, reset, fieldProps };
}

export function simulateSubmit() {
  return new Promise<void>((resolve) => window.setTimeout(resolve, 900));
}