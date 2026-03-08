import React, { useEffect, useState } from 'react';

type Page = 'home' | 'resume' | 'case-studies' | 'case-study-braveheart' | 'blog' | 'notes' | 'contact';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export function Header({ currentPage, setPage }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Blog' },
    { id: 'notes', label: 'Notes' },
    { id: 'contact', label: 'Contact' },
  ];

  // Treat case-study-braveheart as part of case-studies for active state
  const isActive = (id: Page) => {
    if (id === 'case-studies' && currentPage === 'case-study-braveheart') return true;
    return currentPage === id;
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'border-b border-gray-divider shadow-sm' : 'border-b border-gray-divider/50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => setPage('home')}
          className="font-serif font-bold text-xl text-navy-dark hover:opacity-80 transition-opacity"
        >
          Oliver Hurd
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-sm font-medium transition-colors relative py-2 ${
                isActive(item.id) 
                  ? 'text-navy-dark' 
                  : 'text-gray-light hover:text-navy-dark'
              }`}
            >
              {item.label}
              {isActive(item.id) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-navy-dark rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu button could go here */}
      </div>
    </header>
  );
}
