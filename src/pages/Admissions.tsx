import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/ButtonLink';
import { FaqAccordion } from '../components/ui/FaqAccordion';
import { AdmissionSteps } from '../components/admissions/AdmissionSteps';
import { DocumentChecklist } from '../components/admissions/DocumentChecklist';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { admissionFaqs } from '../data/admissions';
import { images } from '../data/images';
import { school } from '../data/school';

export function Admissions() {
  const [params] = useSearchParams();
  const program = params.get('program') ?? '';

  return (
    <>
      <PageHero
        title="Admissions"
        description="Joining Ranen Adventist School is simple. Here's how the process works, what to prepare, and how to reach us."
        image={images.event}
        crumbs={[{ label: 'Admissions' }]}>
        
        <ButtonLink to="#enquire" size="lg" withArrow>
          Start an Enquiry
        </ButtonLink>
      </PageHero>

      <section aria-labelledby="process-title" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              id="process-title"
              kicker="How it works"
              title="The admission process"
              description="Five clear steps from your first question to your child's first day.">
              
              <DraftTag kind="confirm" label="Process to be confirmed by the school" />
            </SectionHeading>
          </Reveal>
          <div className="mt-14">
            <AdmissionSteps />
          </div>
        </div>
      </section>

      <section aria-label="Documents and frequently asked questions" className="bg-mist py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              kicker="Be prepared"
              title="Document checklist"
              description="Tick items off as you gather them. Requirements may differ by level.">
              
              <DraftTag label="Editable checklist" />
            </SectionHeading>
            <div className="mt-8">
              <DocumentChecklist />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading kicker="Questions" title="Frequently asked questions" />
            <div className="mt-8">
              <FaqAccordion items={admissionFaqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="enquire" aria-labelledby="enquire-title" className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="enquire-title"
              kicker="Enquire"
              title="Ask about admission"
              description="Share a few details and the school office will be in touch to answer your questions and arrange next steps." />
            
            <div className="mt-10 space-y-4">
              <p className="text-sm font-semibold text-ink">Prefer to talk now?</p>
              {[
              { icon: PhoneIcon, label: school.phoneDisplay, href: school.phoneHref },
              { icon: MessageCircleIcon, label: 'Chat on WhatsApp', href: school.whatsappHref },
              { icon: MailIcon, label: school.email, href: school.emailHref }].
              map(({ icon: Icon, label, href }) =>
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl p-3 transition-colors duration-150 hover:bg-mist">
                
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky text-navy">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="break-all font-medium text-ink">{label}</span>
                </a>
              )}
              <DraftTag kind="confirm" label="Placeholder contact details" />
            </div>
          </Reveal>
          <Reveal delay={0.05} className="rounded-[2rem] bg-mist p-6 ring-1 ring-navy/5 sm:p-10">
            <EnquiryForm key={program} initialProgram={program} />
          </Reveal>
        </div>
      </section>
    </>);

}