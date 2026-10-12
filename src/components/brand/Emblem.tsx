import React from 'react';

type EmblemProps = {className?: string;title?: string;};

const RAY_ANGLES = [-165, -140, -115, -65, -40, -15];

export function Emblem({ className = 'h-11 w-11', title }: EmblemProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}>
      
      <circle cx="32" cy="32" r="31" fill="#103B78" />
      <circle cx="32" cy="32" r="28" fill="none" stroke="#FFC928" strokeWidth="1.25" />
      {RAY_ANGLES.map((angle) => {
        const rad = angle * Math.PI / 180;
        return (
          <line
            key={angle}
            x1={32 + Math.cos(rad) * 13.5}
            y1={38 + Math.sin(rad) * 13.5}
            x2={32 + Math.cos(rad) * 18}
            y2={38 + Math.sin(rad) * 18}
            stroke="#FFC928"
            strokeWidth="1.8"
            strokeLinecap="round" />);


      })}
      <path d="M21 38 A11 11 0 0 1 43 38 Z" fill="#FFC928" />
      <path
        d="M32 15 C36.5 20 38.5 24.5 36 29 C35 31 33.5 32.5 32 35 C30.5 32.5 29 31 28 29 C25.5 24.5 27.5 20 32 15 Z"
        fill="#FFFFFF" />
      
      <path d="M32 20.5 V30.5 M29.4 23.6 H34.6" stroke="#103B78" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12.5 40.5 C19 38 26 38.5 31.2 42 L31.2 51 C26 48 19 47.5 12.5 50 Z" fill="#FFFFFF" />
      <path d="M51.5 40.5 C45 38 38 38.5 32.8 42 L32.8 51 C38 48 45 47.5 51.5 50 Z" fill="#EAF3FF" />
      <path
        d="M16 43.6 C21 42.1 25.5 42.4 29 44.3 M16 46.6 C21 45.1 25.5 45.4 29 47.3 M48 43.6 C43 42.1 38.5 42.4 35 44.3 M48 46.6 C43 45.1 38.5 45.4 35 47.3"
        stroke="#103B78"
        strokeOpacity="0.28"
        strokeWidth="0.8"
        fill="none" />
      
    </svg>);

}