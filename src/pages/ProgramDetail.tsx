import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/ButtonLink';
import { AdmissionCTA } from '../components/sections/AdmissionCTA';
import { programs } from '../data/programs';
import { NotFound } from './NotFound';

export function ProgramDetail() {
  const { slug } = useParams();
  const index = programs.findIndex((p) => p.slug === slug);
  if (index === -1) return <NotFound />;

  const program = programs[index];
  const prev = programs[index - 1];
  const next = programs[index + 1];
  const early = program.stage === 'Early Years';

  return (
    <>
      <PageHero
        title={program.name}
        description={program.summary}
        image={program.image}
        crumbs={[{ label: 'Academics', to: '/academics' }, { label: program.name }]}>
        
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-navy-900">{program.gradeLabel}</span>
          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">{program.typicalAge}</span>
          <DraftTag kind="photo" />
        </div>
      </PageHero>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold text-ink">Overview</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                {program.overview.map((p) =>
                <p key={p}>{p}</p>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="mt-14">
              <h2 className="font-heading text-2xl font-semibold text-ink">What your child will experience</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {program.highlights.map((h) =>
                <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    early ? 'bg-mint text-mint-ink' : 'bg-navy text-gold'}`
                    }>
                    
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {h}
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.05} className="mt-14">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-2xl font-semibold text-ink">Learning areas</h2>
                <DraftTag kind="confirm" />
              </div>
              <p className="mt-3 text-[15px] text-ink/65">
                {early && program.slug === 'playgroup' ?
                'Playgroup focuses on early development through play.' :
                "Presented in line with Kenya's Competency-Based Curriculum structure."}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {program.learningAreas.map((area) =>
                <li
                  key={area}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                  early ? 'bg-peach text-peach-ink' : 'bg-sky text-navy'}`
                  }>
                  
                    {area}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-mist p-7 ring-1 ring-navy/5 lg:p-8">
              <h2 className="font-heading text-lg font-semibold text-ink">At a glance</h2>
              <dl className="mt-5 divide-y divide-navy/10 text-[15px]">
                {[
                ['Stage', program.stage],
                ['Level', program.gradeLabel],
                ['Typical age', program.typicalAge],
                ['Approach', program.approach]].
                map(([k, v]) =>
                <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink/60">{k}</dt>
                    <dd className="text-right font-medium text-ink">{v}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-6 grid gap-3">
                <ButtonLink to={`/admissions?program=${program.slug}#enquire`} size="lg" className="w-full">
                  Enquire about {program.shortName}
                </ButtonLink>
                <ButtonLink to="/contact" variant="outlineNavy" size="lg" className="w-full">
                  Arrange a visit
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>

        <nav
          aria-label="Other programs"
          className="mx-auto mt-20 grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8">
          
          {prev ?
          <Link
            to={`/academics/${prev.slug}`}
            className="group flex items-center gap-4 rounded-3xl p-5 ring-1 ring-navy/10 transition-[background-color] duration-150 hover:bg-mist">
            
              <ArrowLeftIcon className="h-5 w-5 text-navy transition-transform duration-150 group-hover:-translate-x-1" aria-hidden="true" />
              <span>
                <span className="block text-sm text-ink/60">Previous stage</span>
                <span className="font-heading font-semibold text-ink">{prev.name}</span>
              </span>
            </Link> :

          <span />
          }
          {next &&
          <Link
            to={`/academics/${next.slug}`}
            className="group flex items-center justify-end gap-4 rounded-3xl p-5 text-right ring-1 ring-navy/10 transition-[background-color] duration-150 hover:bg-mist">
            
              <span>
                <span className="block text-sm text-ink/60">Next stage</span>
                <span className="font-heading font-semibold text-ink">{next.name}</span>
              </span>
              <ArrowRightIcon className="h-5 w-5 text-navy transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          }
        </nav>
      </section>

      <AdmissionCTA />
    </>);

}