import React from 'react';
import { Emblem } from '../brand/Emblem';
import { ButtonLink } from '../ui/ButtonLink';
import { DraftTag } from '../ui/DraftTag';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { aboutPillars } from '../../data/about';
import { images } from '../../data/images';
import { school } from '../../data/school';

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={images.about}
              alt="A teacher sharing a picture book with a group of young learners in uniform"
              loading="lazy"
              className="aspect-[4/5] max-h-[640px] w-full object-cover" />
            
            <DraftTag kind="photo" className="absolute left-4 top-4" />
          </div>
          <div className="absolute -bottom-6 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 pr-6 shadow-lift sm:right-[-1.5rem]">
            <Emblem className="h-12 w-12" />
            <div>
              <p className="font-heading text-lg font-semibold text-navy">{school.tagline}</p>
              <p className="text-xs text-ink/60">Proposed school motto</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="about-title"
              kicker="About Ranen"
              title="An Education That Builds Character and Confidence"
              description="We believe a great education shapes who children become, not only what they know. Our classrooms bring together strong learning, caring relationships and Christian values.">
              
              <DraftTag />
            </SectionHeading>
          </Reveal>
          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={i * 0.05} className="border-t border-navy/10 py-6">
                  <dt className="flex items-center gap-3 font-heading text-[17px] font-semibold text-ink">
                    <Icon className="h-5 w-5 text-navy" aria-hidden="true" />
                    {pillar.title}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink/70">{pillar.text}</dd>
                </Reveal>);

            })}
          </dl>
          <ButtonLink to="/about" variant="navy" size="lg" withArrow className="mt-6">
            Discover Our School
          </ButtonLink>
        </div>
      </div>
    </section>);

}