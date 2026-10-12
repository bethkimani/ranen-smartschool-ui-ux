import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { buttonClasses } from '../../utils/buttonStyles';
import type { ButtonSize, ButtonVariant } from '../../utils/buttonStyles';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
};

export function ButtonLink({ to, children, variant = 'gold', size = 'md', withArrow, className }: ButtonLinkProps) {
  const classes = twMerge(buttonClasses(variant, size), className);
  const content =
  <>
      {children}
      {withArrow &&
    <ArrowRightIcon
      className="h-4 w-4 transition-transform duration-150 ease-smooth group-hover:translate-x-0.5"
      aria-hidden="true" />

    }
    </>;


  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const external = to.startsWith('http');
    return (
      <a
        href={to}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}>
        
        {content}
      </a>);

  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>);

}