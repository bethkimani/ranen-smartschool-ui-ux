import React from 'react';
import { CompassIcon, HeartIcon, SunriseIcon } from 'lucide-react';
import { DraftTag } from '../ui/DraftTag';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { coreValues, mission, vision } from '../../data/values';

type ValuesSectionProps = {id?: string;};

export function ValuesSection({ id }: ValuesSectionProps) {
  return (
    <section id={id} aria-labelledby="values-title" className="bg-sky py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="values-title"
            align="center"
            kicker="What guides us"
            title="Mission, Vision & Core Values"
            description="The statements below are drafts to illustrate the section. They will be replaced with the school's official wording.">
            
            <DraftTag label="Draft wording · awaiting official statements" />
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Reveal className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
              <CompassIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">Our Mission</h3>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/75">{mission}</p>
          </Reveal>

          <Reveal delay={0.05} className="flex h-full flex-col rounded-[2rem] bg-navy p-8 text-white shadow-lift lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-navy-900">
              <SunriseIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-[17px] leading-relaxed text-white/85">{vision}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft lg:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-ink">Our Core Values</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {coreValues.map((value) =>
              <li
                key={value}
                className="rounded-full bg-gold-100 px-4 py-2 font-heading text-sm font-semibold text-navy ring-1 ring-gold/50">
                
                  {value}
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>);

}