import React from 'react';

type SectionHeadingProps = {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  tone = 'dark',
  id,
  className = '',
  children
}: SectionHeadingProps) {
  const centered = align === 'center';
  const light = tone === 'light';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {kicker &&
      <p
        className={`flex items-center gap-3 text-sm font-semibold ${centered ? 'justify-center' : ''} ${
        light ? 'text-gold' : 'text-navy'}`
        }>
        
          <span className="h-0.5 w-6 rounded-full bg-gold" aria-hidden="true" />
          {kicker}
        </p>
      }
      <h2
        id={id}
        className={`mt-4 font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px] ${
        light ? 'text-white' : 'text-ink'}`
        }>
        
        {title}
      </h2>
      {description &&
      <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/80' : 'text-ink/70'}`}>{description}</p>
      }
      {children && <div className={`mt-5 flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>{children}</div>}
    </div>);

}