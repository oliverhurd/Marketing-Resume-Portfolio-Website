import React from 'react';
type Page = 'home' | 'resume' | 'case-studies' | 'blog' | 'notes' | 'contact';
interface FooterProps {
  setPage: (page: Page) => void;
}
export function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-gray-footer border-t border-gray-divider pt-16 pb-8 mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6">
            <h2 className="font-serif font-bold text-xl text-navy-dark mb-4">
              Oliver Hurd
            </h2>
            <p className="text-gray-body text-sm leading-relaxed max-w-sm">
              Content strategist and growth operator. Designing organic systems
              that turn attention into trust and trust into revenue.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-row gap-16 md:justify-end">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setPage('home')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Home
              </button>
              <button
                onClick={() => setPage('resume')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Resume
              </button>
              <button
                onClick={() => setPage('case-studies')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Case Studies
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setPage('blog')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Blog
              </button>
              <button
                onClick={() => setPage('notes')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Notes
              </button>
              <button
                onClick={() => setPage('contact')}
                className="text-sm font-medium text-gray-body hover:text-navy-dark text-left transition-colors">

                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-divider">
          <p className="text-xs font-medium text-gray-light tracking-wider uppercase">
            © 2026 OLIVER HURD · ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>);

}