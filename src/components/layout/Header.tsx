import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [{
  label: 'Home',
  path: '/'
}, {
  label: 'Resume',
  path: '/resume'
}, {
  label: 'Case Studies',
  path: '/case-studies'
}, {
  label: 'Blog',
  path: '/blog'
}, {
  label: 'Notes',
  path: '/notes'
}, {
  label: 'Contact',
  path: '/contact'
}];
export function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return <header className="relative z-50">
      <div className="editorial-container py-6 md:py-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="font-playfair text-xl md:text-2xl font-semibold text-primary tracking-tight" onClick={() => setMobileOpen(false)}>
            Oliver Hurd
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
            return <li key={link.path}>
                  <Link to={link.path} className={`relative text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${isActive ? 'text-primary' : 'text-primary-light hover:text-primary'}`}>
                    {link.label}
                    {isActive && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-primary" transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />}
                  </Link>
                </li>;
          })}
          </ul>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 -mr-2 text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }} className="md:hidden overflow-hidden bg-surface border-b border-surface-border">
            <ul className="editorial-container py-4 space-y-1">
              {navLinks.map((link) => {
            const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
            return <li key={link.path}>
                    <Link to={link.path} onClick={() => setMobileOpen(false)} className={`block py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${isActive ? 'text-primary' : 'text-primary-light hover:text-primary'}`}>
                      {link.label}
                    </Link>
                  </li>;
          })}
            </ul>
          </motion.div>}
      </AnimatePresence>

      <div className="editorial-rule editorial-container" />
    </header>;
}