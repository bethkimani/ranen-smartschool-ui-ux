import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Emblem } from '../brand/Emblem';
import { DraftTag } from '../ui/DraftTag';
import { navLinks } from '../../data/navigation';
import { programs } from '../../data/programs';
import { school } from '../../data/school';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-4" aria-label="Ranen Adventist School home">
              <Emblem className="h-16 w-16" />
              <span>
                <span className="block font-heading text-2xl font-bold leading-tight">Ranen</span>
                <span className="block font-heading text-sm font-medium text-gold">Adventist School</span>
              </span>
            </Link>
            <p className="mt-6 font-heading text-lg font-semibold text-gold">{school.tagline}</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/70">
              Christ-centred learning from Playgroup to Junior Secondary, nurturing every child in mind, body and
              spirit.
            </p>
            <a
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white/10 px-5 font-heading text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/15">
              
              <MessageCircleIcon className="h-4 w-4 text-gold" aria-hidden="true" />
              WhatsApp the school
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-heading text-sm font-semibold text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((item) =>
              <li key={item.label}>
                  <Link
                  to={item.to}
                  className="text-[15px] text-white/70 transition-colors duration-150 hover:text-gold">
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Programs</h3>
            <ul className="mt-5 space-y-3">
              {programs.map((p) =>
              <li key={p.slug}>
                  <Link
                  to={`/academics/${p.slug}`}
                  className="text-[15px] text-white/70 transition-colors duration-150 hover:text-gold">
                  
                    {p.name}
                    <span className="text-white/40"> · {p.shortName === p.name ? p.typicalAge : p.shortName}</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-heading text-sm font-semibold text-white">Contact</h3>
              <DraftTag kind="confirm" label="Placeholder details" />
            </div>
            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                {school.location}
              </li>
              <li>
                <a href={school.phoneHref} className="flex gap-3 transition-colors duration-150 hover:text-gold">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {school.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={school.emailHref} className="flex gap-3 break-all transition-colors duration-150 hover:text-gold">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  {school.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
              {school.socials.map((s) =>
              <li key={s.label}>
                  <a
                  href={s.href}
                  className="inline-flex h-9 items-center rounded-full border border-white/15 px-4 text-sm text-white/80 transition-colors duration-150 hover:border-gold hover:text-gold">
                  
                    {s.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {school.name}. All rights reserved.
          </p>
          <p>Website concept · photographs and details are placeholders pending school approval.</p>
        </div>
      </div>
    </footer>);

}