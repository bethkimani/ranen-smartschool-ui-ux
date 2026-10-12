import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MessageCircleIcon, XIcon } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { ButtonLink } from '../ui/ButtonLink';
import { navLinks } from '../../data/navigation';
import { school } from '../../data/school';
import { EASE_OUT } from '../../utils/motion';

type MobileMenuProps = {open: boolean;onClose: () => void;};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <>
          <motion.div
          key="overlay"
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-[55] bg-navy-900/50 xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }} />
        
          <motion.div
          key="panel"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,380px)] flex-col bg-white shadow-lift xl:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.28, ease: EASE_OUT }}>
          
            <div className="flex h-[76px] items-center justify-between border-b border-navy/10 px-5">
              <Link to="/" onClick={onClose} aria-label="Ranen Adventist School home">
                <Logo />
              </Link>
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-150 hover:bg-sky"
              aria-label="Close menu">
              
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navLinks.map((item) =>
              item.children ?
              <li key={item.label}>
                      <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded((cur) => cur === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 font-heading text-[17px] font-semibold text-ink transition-colors duration-150 hover:bg-sky">
                  
                        {item.label}
                        <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-200 ease-smooth ${
                    expanded === item.label ? 'rotate-180' : ''}`
                    }
                    aria-hidden="true" />
                  
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === item.label &&
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: EASE_OUT }}
                    className="overflow-hidden">
                    
                            {item.children.map((child) =>
                    <li key={child.to + child.label}>
                                <Link
                        to={child.to}
                        onClick={onClose}
                        className="ml-3 block rounded-lg border-l-2 border-navy/10 px-4 py-2.5 text-[15px] text-ink/80 transition-colors duration-150 hover:border-gold hover:text-navy">
                        
                                  {child.label}
                                </Link>
                              </li>
                    )}
                          </motion.ul>
                  }
                      </AnimatePresence>
                    </li> :

              <li key={item.label}>
                      <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                  `block rounded-xl px-3 py-3 font-heading text-[17px] font-semibold transition-colors duration-150 hover:bg-sky ${
                  isActive ? 'bg-sky text-navy' : 'text-ink'}`

                  }>
                  
                        {item.label}
                      </NavLink>
                    </li>

              )}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-navy/10 p-5">
              <ButtonLink to="/admissions#enquire" size="lg" className="w-full">
                Enquire About Admission
              </ButtonLink>
              <a
              href={school.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-navy/15 font-heading text-[15px] font-semibold text-navy transition-colors duration-150 hover:bg-sky">
              
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}