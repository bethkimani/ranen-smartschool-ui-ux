import React from 'react';
import { ButtonLink } from '../ui/ButtonLink';
import { DraftTag } from '../ui/DraftTag';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { whyChooseItems } from '../../data/whyChoose';

export function WhyChooseSection() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              id="why-title"
              kicker="For parents"
              title="What your child can look forward to"
              description="Choosing a school is one of the most important decisions a family makes. Here is what we hope every family will experience.">
              
              <DraftTag kind="confirm" label="Configurable · confirm with the school" />
            </SectionHeading>
            <ButtonLink to="/contact" variant="navy" size="lg" withArrow className="mt-8">
              Arrange a School Visit
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {whyChooseItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i % 2 * 0.05} className="border-t border-navy/10 pb-8 pt-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{item.text}</p>
              </Reveal>);

          })}
        </ul>
      </div>
    </section>);

}