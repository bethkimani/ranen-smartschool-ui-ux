import React from 'react';
import { Reveal } from '../ui/Reveal';
import { admissionSteps } from '../../data/admissions';

export function AdmissionSteps() {
  return (
    <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
      <span aria-hidden="true" className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-navy/10 lg:block" />
      <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-0.5 bg-navy/10 lg:hidden" />
      {admissionSteps.map((step, i) =>
      <Reveal as="li" key={step.title} delay={i * 0.05} className="relative flex gap-5 lg:flex-col lg:gap-0">
          <span
          className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-lg font-semibold ${
          i === 0 ? 'bg-gold text-navy-900' : 'bg-navy text-white'}`
          }>
          
            {i + 1}
          </span>
          <div className="lg:mt-6">
            <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{step.text}</p>
          </div>
        </Reveal>
      )}
    </ol>);

}