import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AdmissionCTA } from '../components/sections/AdmissionCTA';
import { facilities } from '../data/facilities';
import { images } from '../data/images';

export function Facilities() {
  const [lead, ...rest] = facilities;
  return (
    <>
      <PageHero
        title="Facilities"
        description="The spaces where learning, play, worship and friendship happen every day."
        image={images.library}
        crumbs={[{ label: 'Facilities' }]} />
      

      <section aria-labelledby="facilities-title" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="facilities-title"
              kicker="Our campus"
              title="Spaces designed for growing minds"
              description="Only facilities confirmed by the school will be published. Each item below is a placeholder awaiting confirmation.">
              
              <DraftTag kind="confirm" label="All facilities to be confirmed" />
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.05} className="mt-14 grid overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img src={lead.image} alt={lead.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
              <DraftTag kind="photo" className="absolute left-4 top-4" />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-14">
              <DraftTag kind="confirm" className="self-start" />
              <h3 className="mt-5 font-heading text-3xl font-semibold">{lead.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{lead.text}</p>
            </div>
          </Reveal>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((f, i) =>
            <Reveal as="li" key={f.title} delay={i % 3 * 0.05} className="flex h-full flex-col">
                <div className="relative overflow-hidden rounded-3xl">
                  <img src={f.image} alt={f.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <DraftTag kind="photo" className="absolute left-3 top-3" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="font-heading text-xl font-semibold text-ink">{f.title}</h3>
                  <DraftTag kind="confirm" label="Confirm" />
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{f.text}</p>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <AdmissionCTA />
    </>);

}