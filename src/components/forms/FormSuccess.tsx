import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { DraftTag } from '../ui/DraftTag';
import { buttonClasses } from '../../utils/buttonStyles';
import { EASE_OUT } from '../../utils/motion';

type FormSuccessProps = {title: string;message: string;actionLabel: string;onReset: () => void;};

export function FormSuccess({ title, message, actionLabel, onReset }: FormSuccessProps) {
  return (
    <motion.div
      key="success"
      role="status"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="flex flex-col items-center rounded-3xl bg-sky px-6 py-14 text-center sm:px-10">
      
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy-900">
        <CheckIcon className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/70">{message}</p>
      <DraftTag kind="confirm" label="Demo form · connect to the school inbox before launch" className="mt-5" />
      <button type="button" onClick={onReset} className={`${buttonClasses('outlineNavy')} mt-8`}>
        {actionLabel}
      </button>
    </motion.div>);

}