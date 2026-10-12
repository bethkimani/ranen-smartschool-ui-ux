import React from 'react';
import { UsersIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/ButtonLink';
import { ValuesSection } from '../components/sections/ValuesSection';
import { AdmissionCTA } from '../components/sections/AdmissionCTA';
import { aboutPillars, faithParagraphs, storyParagraphs } from '../data/about';
import { images } from '../data/images';

export function About() {
  return (
    <>
      <PageHero
        title="About Ranen Adventist School"
        description="A Christ-centred learning community in Migori County, nurturing every child in mind, body and spirit."
        image={images.about}
        crumbs={[{ label: 'About Us' }]} />
      

      <section aria-labelledby="story-title" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading id="story-title" kicker="Our story" title="A school rooted in faith and community">
              <DraftTag label="Awaiting verified history from the school" />
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-lg leading-relaxed text-ink/75 lg:pt-12">
            {storyParagraphs.map((p) =>
            <p key={p}>{p}</p>
            )}
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Reveal as="li" key={pillar.title} delay={i * 0.05} className="border-t-2 border-navy pt-6 pb-8">
                  <Icon className="h-6 w-6 text-navy" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{pillar.text}</p>
                </Reveal>);

            })}
          </ul>
        </div>
      </section>

      <ValuesSection id="mission" />

      <section id="faith" aria-labelledby="faith-title" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading id="faith-title" kicker="Christian foundation" title="Faith at the heart of learning">
              <DraftTag />
            </SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
              {faithParagraphs.map((p) =>
              <p key={p}>{p}</p>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.05} className="relative order-1 lg:order-2">
            <img
              src={images.worship}
              alt="Learners singing together during a morning devotion"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
            
            <DraftTag kind="photo" className="absolute left-4 top-4" />
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="leadership-title" className="bg-mist py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading id="leadership-title" kicker="Our people" title="Leadership & staff" />
          </Reveal>
          <Reveal
            delay={0.05}
            className="mt-10 flex flex-col items-center rounded-[2rem] border-2 border-dashed border-navy/15 bg-white px-6 py-14 text-center">
            
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky text-navy">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold text-ink">Profiles coming soon</h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink/70">
              Introductions to the school&apos;s leadership and teaching team will appear here once names, roles and
              photographs are supplied and approved.
            </p>
            <ButtonLink to="/contact" variant="outlineNavy" className="mt-6">
              Contact the School
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <AdmissionCTA />
    </>);

}