import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import type { Program, ProgramTone } from '../../data/programs';

type ProgramCardProps = {program: Program;layout?: 'compact' | 'feature';};

const tones: Record<ProgramTone, {card: string;ink: string;chip: string;}> = {
  peach: { card: 'bg-peach', ink: 'text-peach-ink', chip: 'bg-white text-peach-ink' },
  mint: { card: 'bg-mint', ink: 'text-mint-ink', chip: 'bg-white text-mint-ink' },
  lilac: { card: 'bg-lilac', ink: 'text-lilac-ink', chip: 'bg-white text-lilac-ink' },
  navy: { card: 'bg-navy', ink: 'text-gold', chip: 'bg-gold text-navy-900' },
  deep: { card: 'bg-navy-900', ink: 'text-gold', chip: 'bg-gold text-navy-900' }
};

export function ProgramCard({ program, layout = 'compact' }: ProgramCardProps) {
  const t = tones[program.tone];
  const to = `/academics/${program.slug}`;

  if (layout === 'feature') {
    return (
      <Link
        to={to}
        className={`group grid h-full overflow-hidden rounded-[2rem] ${t.card} text-white shadow-soft transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[0.9fr_1.1fr]`}>
        
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[320px]">
          <img
            src={program.image}
            alt={program.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
          
        </div>
        <div className="flex flex-col p-7 lg:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.chip}`}>{program.gradeLabel}</span>
            <span className="text-xs font-medium text-white/70">{program.typicalAge}</span>
          </div>
          <h3 className="mt-5 font-heading text-2xl font-semibold">{program.name}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-white/80">{program.summary}</p>
          <span className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold ${t.ink}`}>
            Learn more
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </span>
        </div>
      </Link>);

  }

  return (
    <Link
      to={to}
      className={`group flex h-full flex-col rounded-[1.75rem] ${t.card} p-2.5 transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:shadow-lift`}>
      
      <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <img
          src={program.image}
          alt={program.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
        
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.chip}`}>{program.gradeLabel}</span>
          <span className={`text-xs font-medium ${t.ink}`}>{program.typicalAge}</span>
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold text-ink">{program.name}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{program.summary}</p>
        <span className={`mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold ${t.ink}`}>
          Learn more
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-1"
            aria-hidden="true" />
          
        </span>
      </div>
    </Link>);

}