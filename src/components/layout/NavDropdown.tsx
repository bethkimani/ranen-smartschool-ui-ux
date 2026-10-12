import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { NavItem } from '../../data/navigation';
import { EASE_OUT } from '../../utils/motion';

type NavDropdownProps = {item: NavItem;solid: boolean;};

export function NavDropdown({ item, solid }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isActive = location.pathname.startsWith(item.to);
  const menuId = `menu-${item.label.toLowerCase().replace(/\W+/g, '-')}`;

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}>
      
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className={`group relative inline-flex h-10 items-center gap-1 whitespace-nowrap px-2 text-[14px] font-medium transition-colors duration-150 ${
        solid ?
        isActive ?
        'text-navy' :
        'text-ink/80 hover:text-navy' :
        isActive ?
        'text-white' :
        'text-white/80 hover:text-white'}`
        }>
        
        {item.label}
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-200 ease-smooth ${open ? 'rotate-180' : ''}`}
          aria-hidden="true" />
        
        <span
          aria-hidden="true"
          className={`absolute inset-x-2 bottom-1 h-0.5 origin-left rounded-full bg-gold transition-transform duration-200 ease-smooth ${
          isActive || open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`
          } />
        
      </button>

      <AnimatePresence>
        {open && item.children &&
        <motion.div
          id={menuId}
          initial={{ opacity: 0, y: 6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.98 }}
          transition={{ duration: 0.18, ease: EASE_OUT }}
          className="absolute left-0 top-full z-50 w-80 origin-top-left pt-2">
          
            <ul className="rounded-2xl bg-white p-2 shadow-lift ring-1 ring-navy/5">
              {item.children.map((child) =>
            <li key={child.to + child.label}>
                  <Link
                to={child.to}
                className="block rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-sky focus-visible:bg-sky">
                
                    <span className="block font-heading text-[15px] font-semibold text-ink">{child.label}</span>
                    {child.description &&
                <span className="mt-0.5 block text-[13px] text-ink/60">{child.description}</span>
                }
                  </Link>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}