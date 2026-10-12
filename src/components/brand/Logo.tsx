import React from 'react';
import { Emblem } from './Emblem';

type LogoProps = {tone?: 'light' | 'dark';className?: string;};

export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const light = tone === 'light';
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Emblem className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-[19px] font-bold tracking-tight transition-colors duration-200 ${
          light ? 'text-white' : 'text-navy'}`
          }>
          
          Ranen
        </span>
        <span
          className={`mt-1 font-heading text-[11.5px] font-medium tracking-[0.06em] transition-colors duration-200 ${
          light ? 'text-gold' : 'text-ink/70'}`
          }>
          
          Adventist School
        </span>
      </span>
    </span>);

}