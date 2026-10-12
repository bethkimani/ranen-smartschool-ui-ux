import React from 'react';
import { NavLink } from 'react-router-dom';

type NavItemLinkProps = {to: string;label: string;solid: boolean;};

export function NavItemLink({ to, label, solid }: NavItemLinkProps) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
      `group relative inline-flex h-10 items-center whitespace-nowrap px-2 text-[14px] font-medium transition-colors duration-150 ${
      solid ?
      isActive ?
      'text-navy' :
      'text-ink/80 hover:text-navy' :
      isActive ?
      'text-white' :
      'text-white/80 hover:text-white'}`

      }>
      
      {({ isActive }) =>
      <>
          {label}
          <span
          aria-hidden="true"
          className={`absolute inset-x-2 bottom-1 h-0.5 origin-left rounded-full bg-gold transition-transform duration-200 ease-smooth ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`
          } />
        
        </>
      }
    </NavLink>);

}