import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
import { Emblem } from '../brand/Emblem';
import { ButtonLink } from '../ui/ButtonLink';
import { Reveal } from '../ui/Reveal';
import { school } from '../../data/school';

export function AdmissionCTA() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
      <Emblem className="absolute -right-24 top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 opacity-[0.08] md:-right-10" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="block h-1 w-20 rounded-full bg-gold" aria-hidden="true" />
          <h2
            id="cta-title"
            className="mt-8 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
            
            Your Child&apos;s Journey to a <span className="text-gold">Brighter Future</span> Starts Here.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Get in touch with Ranen Adventist School to learn more about our programs and the admission process.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/admissions#enquire" size="lg" withArrow>
              Enquire About Admission
            </ButtonLink>
            <ButtonLink to="/contact" variant="outlineLight" size="lg">
              Contact the School
            </ButtonLink>
          </div>
          <a
            href={school.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/75 transition-colors duration-150 hover:text-gold">
            
            <MessageCircleIcon className="h-4 w-4 text-gold" aria-hidden="true" />
            Prefer to chat? Message the school office on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>);

}