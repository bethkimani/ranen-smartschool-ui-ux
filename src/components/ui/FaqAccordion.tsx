import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import type { Faq } from '../../data/admissions';
import { EASE_OUT } from '../../utils/motion';

type FaqAccordionProps = {items: Faq[];};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((faq, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <li key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-heading text-[17px] font-semibold text-ink transition-colors duration-150 hover:text-navy">
                
                {faq.question}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[background-color,transform] duration-200 ease-smooth ${
                  open ? 'rotate-45 bg-gold text-navy-900' : 'bg-sky text-navy'}`
                  }>
                  
                  <PlusIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open &&
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                className="overflow-hidden">
                
                  <p className="max-w-2xl pb-6 pr-12 text-[15px] leading-relaxed text-ink/70">{faq.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}