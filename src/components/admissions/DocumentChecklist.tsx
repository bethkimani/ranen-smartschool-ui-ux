import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { requiredDocuments } from '../../data/admissions';

export function DocumentChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const count = checked.size;
  const total = requiredDocuments.length;

  function toggle(index: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);else
      next.add(index);
      return next;
    });
  }

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-ink/70" aria-live="polite">
          {count === total ? 'All documents ready' : `${count} of ${total} ready`}
        </p>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-sky" aria-hidden="true">
          <div
            className="h-full origin-left rounded-full bg-gold transition-transform duration-200 ease-smooth"
            style={{ transform: `scaleX(${count / total})` }} />
          
        </div>
      </div>
      <ul className="mt-6 space-y-2">
        {requiredDocuments.map((doc, i) => {
          const isChecked = checked.has(i);
          return (
            <li key={doc}>
              <label className="flex cursor-pointer items-start gap-4 rounded-2xl px-3 py-3 transition-colors duration-150 hover:bg-mist">
                <input type="checkbox" checked={isChecked} onChange={() => toggle(i)} className="peer sr-only" />
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-colors duration-150 peer-focus-visible:ring-4 peer-focus-visible:ring-navy/20 ${
                  isChecked ? 'border-navy bg-navy text-gold' : 'border-navy/25 bg-white text-transparent'}`
                  }>
                  
                  <CheckIcon className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className={`text-[15px] leading-relaxed ${isChecked ? 'text-ink/50 line-through' : 'text-ink'}`}>
                  {doc}
                </span>
              </label>
            </li>);

        })}
      </ul>
    </div>);

}