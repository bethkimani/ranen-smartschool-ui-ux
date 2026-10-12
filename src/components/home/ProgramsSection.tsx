import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { ProgramCard } from '../cards/ProgramCard';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { programs } from '../../data/programs';

export function ProgramsSection() {
  const earlyYears = programs.filter((p) => p.stage === 'Early Years');
  const upper = programs.filter((p) => p.stage !== 'Early Years');

  return (
    <section aria-labelledby="programs-title" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="programs-title"
              kicker="Academic programs"
              title="Every Stage. Every Opportunity. A Brighter Future."
              description="From a child's very first day at Playgroup to the final year of Junior Secondary, learning grows with them." />
            
          </Reveal>
          <Link
            to="/academics"
            className="group inline-flex shrink-0 items-center gap-1.5 font-heading text-sm font-semibold text-navy">
            
            Compare all programs
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </Link>
        </div>

        <h3 className="mt-14 text-sm font-semibold text-ink/60">Early Years · Playgroup to PP2</h3>
        <ul className="mt-4 grid gap-5 md:grid-cols-3">
          {earlyYears.map((p, i) =>
          <Reveal as="li" key={p.slug} delay={i * 0.05} className="h-full">
              <ProgramCard program={p} />
            </Reveal>
          )}
        </ul>

        <h3 className="mt-12 text-sm font-semibold text-ink/60">Primary &amp; Junior Secondary · Grade 1 to Grade 9</h3>
        <ul className="mt-4 grid gap-5 lg:grid-cols-2">
          {upper.map((p, i) =>
          <Reveal as="li" key={p.slug} delay={i * 0.05} className="h-full">
              <ProgramCard program={p} layout="feature" />
            </Reveal>
          )}
        </ul>
      </div>
    </section>);

}