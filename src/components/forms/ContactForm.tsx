import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2Icon, SendIcon } from 'lucide-react';
import { FormField } from './FormField';
import { FormSuccess } from './FormSuccess';
import { simulateSubmit, useValidatedForm } from '../../hooks/useValidatedForm';
import type { FormErrors } from '../../hooks/useValidatedForm';
import { buttonClasses } from '../../utils/buttonStyles';
import { inputClass, isValidEmail, isValidKenyanPhone } from '../../utils/validation';

type ContactValues = {name: string;phone: string;email: string;subject: string;message: string;};

const subjects = ['General enquiry', 'Admissions', 'Visiting the school', 'Other'];

export function ContactForm() {
  const { values, errors, status, setField, handleSubmit, reset, fieldProps } = useValidatedForm<ContactValues>(
    { name: '', phone: '', email: '', subject: 'General enquiry', message: '' },
    validate,
    'contact'
  );

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ?
      <FormSuccess
        title="Message sent"
        message={`Thank you, ${values.name.trim().split(' ')[0]}. The school office will respond as soon as possible.`}
        actionLabel="Send another message"
        onReset={reset} /> :


      <motion.form
        key="form"
        noValidate
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onSubmit={(e) => handleSubmit(e, simulateSubmit)}
        className="grid gap-5 sm:grid-cols-2"
        aria-label="Contact form">
        
          <FormField id="contact-name" label="Your name" required error={errors.name} className="sm:col-span-2">
            <input
            {...fieldProps('name')}
            type="text"
            autoComplete="name"
            aria-required="true"
            className={inputClass}
            onChange={(e) => setField('name', e.target.value)} />
          
          </FormField>
          <FormField id="contact-phone" label="Phone number" required error={errors.phone} hint="Phone or email is required">
            <input
            {...fieldProps('phone')}
            type="tel"
            autoComplete="tel"
            placeholder="07XX XXX XXX"
            className={inputClass}
            onChange={(e) => setField('phone', e.target.value)} />
          
          </FormField>
          <FormField id="contact-email" label="Email address" error={errors.email}>
            <input
            {...fieldProps('email')}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            onChange={(e) => setField('email', e.target.value)} />
          
          </FormField>
          <FormField id="contact-subject" label="Subject" required className="sm:col-span-2">
            <select
            {...fieldProps('subject')}
            className={inputClass}
            onChange={(e) => setField('subject', e.target.value)}>
            
              {subjects.map((s) =>
            <option key={s}>{s}</option>
            )}
            </select>
          </FormField>
          <FormField id="contact-message" label="Message" required error={errors.message} className="sm:col-span-2">
            <textarea
            {...fieldProps('message')}
            rows={5}
            aria-required="true"
            placeholder="How can the school help you?"
            className={`${inputClass} resize-y`}
            onChange={(e) => setField('message', e.target.value)} />
          
          </FormField>

          {status === 'error' &&
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
              Something went wrong. Please try again or contact the school by phone.
            </p>
        }

          <div className="sm:col-span-2">
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
                  Send Message
                  <SendIcon className="h-4 w-4" aria-hidden="true" />
                </>
            }
            </button>
          </div>
        </motion.form>
      }
    </AnimatePresence>);

}

function validate(v: ContactValues): FormErrors<ContactValues> {
  const errors: FormErrors<ContactValues> = {};
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!v.phone.trim() && !v.email.trim()) errors.phone = 'Please add a phone number or email.';
  if (v.phone.trim() && !isValidKenyanPhone(v.phone)) errors.phone = 'Please enter a valid Kenyan phone number.';
  if (v.email.trim() && !isValidEmail(v.email)) errors.email = 'Please enter a valid email address.';
  if (v.message.trim().length < 10) errors.message = 'Please write a short message (at least 10 characters).';
  return errors;
}