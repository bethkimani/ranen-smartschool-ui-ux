import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { EASE_OUT } from '../../utils/motion';

type Crumb = {label: string;to?: string;};

type PageHeroProps = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

export function PageHero({ title, description, image, imageAlt = '', crumbs = [], children }: PageHeroProps) {
  const trail: Crumb[] = [{ label: 'Home', to: '/' }, ...crumbs];
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-20 pt-36 text-white md:pb-24 md:pt-44">
      {image &&
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover md:w-[70%]" />

      }
      <div
        className="absolute inset-0 -z-10 bg-navy-900/75 md:bg-transparent md:bg-gradient-to-r md:from-navy-900 md:via-navy-900/90 md:to-navy-900/40"
        aria-hidden="true" />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            {trail.map((crumb, i) =>
            <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRightIcon className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />}
                {crumb.to ?
              <Link to={crumb.to} className="transition-colors duration-150 hover:text-gold">
                    {crumb.label}
                  </Link> :

              <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
              }
              </li>
            )}
          </ol>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          
          {title}
        </motion.h1>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.12 }}
          className="mt-6 block h-1 w-20 origin-left rounded-full bg-gold"
          aria-hidden="true" />
        
        {description &&
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.08 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          
            {description}
          </motion.p>
        }
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>);

}