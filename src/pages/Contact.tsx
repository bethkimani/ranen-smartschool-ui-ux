import React from 'react';
import { ClockIcon, ExternalLinkIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { DraftTag } from '../components/ui/DraftTag';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { Emblem } from '../components/brand/Emblem';
import { images } from '../data/images';
import { school } from '../data/school';

const methods = [
{ icon: PhoneIcon, title: 'Call the office', value: school.phoneDisplay, href: school.phoneHref },
{ icon: MessageCircleIcon, title: 'WhatsApp', value: 'Send a message', href: school.whatsappHref },
{ icon: MailIcon, title: 'Email', value: school.email, href: school.emailHref }];


export function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out with questions about admissions, visits or school life."
        image={images.outdoor}
        crumbs={[{ label: 'Contact Us' }]}>
        
        <DraftTag kind="confirm" label="Contact details are placeholders" />
      </PageHero>

      <section aria-label="Ways to contact the school" className="relative z-10 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="-mt-10 grid gap-4 md:grid-cols-3">
            {methods.map(({ icon: Icon, title, value, href }, i) =>
            <Reveal as="li" key={title} delay={i * 0.05}>
                <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-lift ring-1 ring-navy/5 transition-transform duration-200 ease-smooth hover:-translate-y-1">
                
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-navy transition-colors duration-200 group-hover:bg-gold group-hover:text-navy-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink/60">{title}</span>
                    <span className="block truncate font-heading font-semibold text-ink">{value}</span>
                  </span>
                </a>
              </Reveal>
            )}
          </ul>
        </div>
      </section>

      <section aria-labelledby="message-title" className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="message-title"
              kicker="Send a message"
              title="How can we help?"
              description="Complete the form and the school office will reply as soon as possible." />
            
            <div className="mt-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.05} className="space-y-5">
            <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-sky text-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                  'linear-gradient(#d6e6fb 1px, transparent 1px), linear-gradient(90deg, #d6e6fb 1px, transparent 1px)',
                  backgroundSize: '32px 32px'
                }} />
              
              <div className="relative flex flex-col items-center px-6">
                <Emblem className="h-14 w-14 shadow-lift [border-radius:9999px]" />
                <p className="mt-4 font-heading text-lg font-semibold text-ink">Map coming soon</p>
                <p className="mt-1 max-w-xs text-sm text-ink/65">
                  An interactive map will be embedded once the school&apos;s exact location is confirmed.
                </p>
                <a
                  href={school.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:underline">
                  
                  View Migori County on Google Maps
                  <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <dl className="rounded-[2rem] bg-mist p-7">
              <div className="flex gap-4 py-2">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-ink/60">Location</dt>
                  <dd className="font-medium text-ink">{school.location}</dd>
                </div>
              </div>
              <div className="flex gap-4 py-2">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                <div>
                  <dt className="text-sm text-ink/60">Office hours</dt>
                  <dd className="font-medium text-ink">{school.officeHours}</dd>
                </div>
              </div>
            </dl>

            <a
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-[2rem] bg-navy p-7 text-white transition-colors duration-150 hover:bg-navy-700">
              
              <span>
                <span className="block font-heading text-lg font-semibold">Chat with us on WhatsApp</span>
                <span className="mt-1 block text-sm text-white/75">Quick answers from the school office</span>
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy-900 transition-transform duration-150 group-hover:scale-105">
                <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>);

}