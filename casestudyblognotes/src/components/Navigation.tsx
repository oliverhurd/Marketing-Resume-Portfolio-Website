import React, { useEffect, useState } from 'react';
interface NavigationProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function Navigation({ currentPage, setPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    id: 'home',
    label: 'Home'
  },
  {
    id: 'resume',
    label: 'Resume'
  },
  {
    id: 'case-studies',
    label: 'Case Studies'
  },
  {
    id: 'blog',
    label: 'Blog'
  },
  {
    id: 'notes',
    label: 'Notes'
  },
  {
    id: 'contact',
    label: 'Contact'
  }];

  // Treat case-study-braveheart as part of case-studies for active state
  const isActive = (id: string) => {
    if (id === 'case-studies' && currentPage === 'case-study-braveheart')
    return true;
    return currentPage === id;
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'border-b-2 border-gray-200 py-4 shadow-sm' : 'py-6'}`}>

      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <button
          onClick={() => setPage('home')}
          className="font-semibold text-lg text-gray-900 tracking-tight hover:opacity-80 transition-opacity">

          Oliver Hurd
        </button>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs tracking-widest uppercase font-medium">
          {navLinks.map((link) =>
          <button
            key={link.id}
            onClick={() => setPage(link.id)}
            className={`transition-all ${isActive(link.id) ? 'text-gray-900 font-semibold border-b-2 border-gray-900 pb-1' : 'text-gray-400 hover:text-gray-700 pb-1 border-b-2 border-transparent'}`}>

              {link.label}
            </button>
          )}
        </div>
      </div>
    </nav>);

}