import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { highlights } from '../../data/highlights';

export function HighlightsSection() {
  return (
    <section aria-label="School highlights" className="relative z-10 bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="-mt-24 grid gap-4 sm:grid-cols-2 md:-mt-28 lg:grid-cols-4 lg:gap-5">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal as="li" key={h.title} delay={i * 0.05} className="h-full">
                <Link
                  to={h.to}
                  className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-lift ring-1 ring-navy/5 transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 lg:p-7">
                  
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy transition-colors duration-200 group-hover:bg-gold group-hover:text-navy-900">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-heading text-lg font-semibold leading-6 text-ink lg:min-h-[3rem]">
                    {h.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{h.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy">
                    Learn more
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
                      aria-hidden="true" />
                    
                  </span>
                </Link>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}