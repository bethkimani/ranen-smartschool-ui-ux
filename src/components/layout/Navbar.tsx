import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { ButtonLink } from '../ui/ButtonLink';
import { NavDropdown } from './NavDropdown';
import { NavItemLink } from './NavItemLink';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '../../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const solid = scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
        solid ? 'border-navy/5 bg-white/95 shadow-soft backdrop-blur' : 'border-transparent bg-transparent'}`
        }>
        
        <nav
          aria-label="Main"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          
          <Link to="/" aria-label="Ranen Adventist School home" className="shrink-0 rounded-lg">
            <Logo tone={solid ? 'dark' : 'light'} />
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((item) =>
            <li key={item.label}>
                {item.children ?
              <NavDropdown item={item} solid={solid} /> :

              <NavItemLink to={item.to} label={item.label} solid={solid} />
              }
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink to="/admissions#enquire" className="hidden sm:inline-flex">
              Enquire About Admission
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 xl:hidden ${
              solid ? 'text-ink hover:bg-sky' : 'text-white hover:bg-white/10'}`
              }>
              
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>);

}