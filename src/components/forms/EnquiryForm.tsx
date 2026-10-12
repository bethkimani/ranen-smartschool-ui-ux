import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2Icon, SendIcon } from 'lucide-react';
import { FormField } from './FormField';
import { FormSuccess } from './FormSuccess';
import { programs } from '../../data/programs';
import { simulateSubmit, useValidatedForm } from '../../hooks/useValidatedForm';
import type { FormErrors } from '../../hooks/useValidatedForm';
import { buttonClasses } from '../../utils/buttonStyles';
import { inputClass, isValidEmail, isValidKenyanPhone } from '../../utils/validation';

type EnquiryValues = {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  program: string;
  contactMethod: string;
  message: string;
};

type EnquiryFormProps = {initialProgram?: string;};

const contactMethods = ['Phone call', 'WhatsApp', 'Email'];

export function EnquiryForm({ initialProgram = '' }: EnquiryFormProps) {
  const { values, errors, status, setField, handleSubmit, reset, fieldProps } = useValidatedForm<EnquiryValues>(
    {
      parentName: '',
      phone: '',
      email: '',
      childName: '',
      program: programs.some((p) => p.slug === initialProgram) ? initialProgram : '',
      contactMethod: 'Phone call',
      message: ''
    },
    validate,
    'enquiry'
  );

  const programName = programs.find((p) => p.slug === values.program)?.name ?? 'our programs';
  const firstName = values.parentName.trim().split(' ')[0];

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ?
      <FormSuccess
        title={`Thank you, ${firstName}!`}
        message={`Your enquiry about ${programName} has been received. The school office will get back to you by ${values.contactMethod.toLowerCase()}.`}
        actionLabel="Send another enquiry"
        onReset={reset} /> :


      <motion.form
        key="form"
        noValidate
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onSubmit={(e) => handleSubmit(e, simulateSubmit)}
        className="grid gap-5 sm:grid-cols-2"
        aria-label="Admission enquiry form">
        
          <FormField id="enquiry-parentName" label="Parent or guardian name" required error={errors.parentName}>
            <input
            {...fieldProps('parentName')}
            type="text"
            autoComplete="name"
            aria-required="true"
            placeholder="e.g. Grace Achieng"
            className={inputClass}
            onChange={(e) => setField('parentName', e.target.value)} />
          
          </FormField>
          <FormField
          id="enquiry-phone"
          label="Phone number"
          required
          error={errors.phone}
          hint="Kenyan mobile, e.g. 0712 345 678">
          
            <input
            {...fieldProps('phone')}
            type="tel"
            autoComplete="tel"
            aria-required="true"
            placeholder="07XX XXX XXX"
            className={inputClass}
            onChange={(e) => setField('phone', e.target.value)} />
          
          </FormField>
          <FormField
          id="enquiry-email"
          label="Email address"
          required={values.contactMethod === 'Email'}
          error={errors.email}>
          
            <input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            onChange={(e) => setField('email', e.target.value)} />
          
          </FormField>
          <FormField id="enquiry-childName" label="Child's name">
            <input
            {...fieldProps('childName')}
            type="text"
            placeholder="Your child's first name"
            className={inputClass}
            onChange={(e) => setField('childName', e.target.value)} />
          
          </FormField>
          <FormField id="enquiry-program" label="Program of interest" required error={errors.program} className="sm:col-span-2">
            <select
            {...fieldProps('program')}
            aria-required="true"
            className={`${inputClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2318365E' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")"
            }}
            onChange={(e) => setField('program', e.target.value)}>
            
              <option value="">Select a program</option>
              {programs.map((p) =>
            <option key={p.slug} value={p.slug}>
                  {p.name} — {p.gradeLabel}
                </option>
            )}
              <option value="not-sure">Not sure yet</option>
            </select>
          </FormField>

          <fieldset className="sm:col-span-2">
            <legend className="mb-2 text-sm font-medium text-ink">Preferred way to be contacted</legend>
            <div className="grid grid-cols-3 gap-2">
              {contactMethods.map((method) => {
              const selected = values.contactMethod === method;
              return (
                <label
                  key={method}
                  className={`flex h-11 cursor-pointer items-center justify-center rounded-xl border text-sm font-medium transition-colors duration-150 focus-within:ring-4 focus-within:ring-navy/15 ${
                  selected ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-ink hover:border-navy/40'}`
                  }>
                  
                    <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={selected}
                    onChange={() => setField('contactMethod', method)}
                    className="sr-only" />
                  
                    {method}
                  </label>);

            })}
            </div>
          </fieldset>

          <FormField id="enquiry-message" label="Questions or message" className="sm:col-span-2">
            <textarea
            {...fieldProps('message')}
            rows={4}
            placeholder="Tell us about your child, or any questions you have about admission."
            className={`${inputClass} resize-y`}
            onChange={(e) => setField('message', e.target.value)} />
          
          </FormField>

          {status === 'error' &&
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
              Something went wrong sending your enquiry. Please try again or call the school.
            </p>
        }

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink/60">Your details are only used to respond to your enquiry.</p>
            <button
            type="submit"
            disabled={status === 'submitting'}
            className={`${buttonClasses('navy', 'lg')} w-full sm:w-auto`}>
            
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </> :

            <>
                  Send Enquiry
                  <SendIcon className="h-4 w-4" aria-hidden="true" />
                </>
            }
            </button>
          </div>
        </motion.form>
      }
    </AnimatePresence>);

}

function validate(v: EnquiryValues): FormErrors<EnquiryValues> {
  const errors: FormErrors<EnquiryValues> = {};
  if (v.parentName.trim().length < 2) errors.parentName = 'Please enter your name.';
  if (!v.phone.trim()) errors.phone = 'Please enter a phone number.';else
  if (!isValidKenyanPhone(v.phone)) errors.phone = 'Please enter a valid Kenyan phone number.';
  if (v.email.trim() && !isValidEmail(v.email)) errors.email = 'Please enter a valid email address.';
  if (v.contactMethod === 'Email' && !v.email.trim()) errors.email = 'Add an email so the school can reply by email.';
  if (!v.program) errors.program = 'Please choose a program.';
  return errors;
}