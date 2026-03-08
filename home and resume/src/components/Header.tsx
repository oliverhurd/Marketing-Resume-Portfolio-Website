import React from 'react';
type Page = 'home' | 'resume' | 'case-studies' | 'blog' | 'notes' | 'contact';
interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}
export function Header({ currentPage, setPage }: HeaderProps) {
  const navItems: {
    id: Page;
    label: string;
  }[] = [
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

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-divider/50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <button
          onClick={() => setPage('home')}
          className="font-serif font-bold text-xl text-navy-dark hover:opacity-80 transition-opacity">

          Oliver Hurd
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`text-sm font-medium transition-colors relative py-2 ${currentPage === item.id ? 'text-navy-dark' : 'text-gray-light hover:text-navy-dark'}`}>

              {item.label}
              {currentPage === item.id &&
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-navy-dark rounded-full" />
            }
            </button>
          )}
        </nav>

        {/* Mobile menu button could go here, keeping simple for now */}
      </div>
    </header>);

}