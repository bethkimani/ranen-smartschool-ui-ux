import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProgramCard } from '../components/cards/ProgramCard';
import { AdmissionCTA } from '../components/sections/AdmissionCTA';
import { images } from '../data/images';
import { programs } from '../data/programs';

const stages = [
{
  id: 'early-years',
  title: 'Early Years',
  range: 'Playgroup · PP1 · PP2',
  text: 'Play-based, nurturing beginnings that build curiosity, language, confidence and readiness for Grade 1.',
  stage: 'Early Years'
},
{
  id: 'primary',
  title: 'Primary School',
  range: 'Grade 1 – Grade 6',
  text: 'Strong foundations in literacy, numeracy, science and the creative arts, guided by caring teachers.',
  stage: 'Primary'
},
{
  id: 'junior-secondary',
  title: 'Junior Secondary',
  range: 'Grade 7 – Grade 9',
  text: 'Deeper learning, practical skills and mentorship as learners prepare for senior school pathways.',
  stage: 'Junior Secondary'
}];


export function Academics() {
  return (
    <>
      <PageHero
        title="Academic Programs"
        description="A clear, connected learning journey from Playgroup to Grade 9 — each stage designed for where your child is today."
        image={images.primary}
        crumbs={[{ label: 'Academics' }]} />
      

      <section aria-labelledby="glance-title" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="glance-title"
              kicker="At a glance"
              title="Compare our programs"
              description="Typical ages are a guide. The school will advise on the right class for your child.">
              
              <DraftTag kind="confirm" label="Ages & curriculum to be confirmed" />
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.05} className="mt-10 overflow-x-auto rounded-3xl ring-1 ring-navy/10">
            <table className="w-full min-w-[720px] text-left">
              <caption className="sr-only">Comparison of academic programs by age, focus and approach</caption>
              <thead className="bg-navy text-white">
                <tr>
                  {['Program', 'Level', 'Typical age', 'Focus', 'Approach'].map((h) =>
                  <th key={h} scope="col" className="px-6 py-4 font-heading text-sm font-semibold">
                      {h}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/10">
                {programs.map((p) =>
                <tr key={p.slug} className="bg-white transition-colors duration-150 hover:bg-mist">
                    <th scope="row" className="px-6 py-5">
                      <Link to={`/academics/${p.slug}`} className="font-heading font-semibold text-navy hover:underline">
                        {p.name}
                      </Link>
                    </th>
                    <td className="px-6 py-5 text-[15px] text-ink/80">{p.gradeLabel}</td>
                    <td className="px-6 py-5 text-[15px] text-ink/80">{p.typicalAge}</td>
                    <td className="px-6 py-5 text-[15px] text-ink/80">{p.focus}</td>
                    <td className="px-6 py-5 text-[15px] text-ink/80">{p.approach}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {stages.map((stage, si) => {
        const items = programs.filter((p) => p.stage === stage.stage);
        const early = stage.stage === 'Early Years';
        return (
          <section
            key={stage.id}
            id={stage.id}
            aria-labelledby={`${stage.id}-title`}
            className={`${si % 2 === 0 ? 'bg-mist' : 'bg-white'} py-20 md:py-24`}>
            
            <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
              <Reveal>
                <p className="text-sm font-semibold text-navy">{stage.range}</p>
                <h2 id={`${stage.id}-title`} className="mt-3 font-heading text-3xl font-semibold text-ink lg:text-4xl">
                  {stage.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">{stage.text}</p>
              </Reveal>
              <ul className={`grid gap-5 ${early ? 'md:grid-cols-3' : ''}`}>
                {items.map((p, i) =>
                <Reveal as="li" key={p.slug} delay={i * 0.05} className="h-full">
                    <ProgramCard program={p} layout={early ? 'compact' : 'feature'} />
                  </Reveal>
                )}
              </ul>
            </div>
          </section>);

      })}

      <AdmissionCTA />
    </>);

}