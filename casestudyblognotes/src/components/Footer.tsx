import React from 'react';
interface FooterProps {
  setPage: (page: string) => void;
}
export function Footer({ setPage }: FooterProps) {
  return (
    <footer className="border-t-2 border-gray-200 py-16 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-serif text-2xl font-bold text-[#1a1a2e] mb-4">
            Oliver Hurd
          </h3>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Content strategist and growth operator. Designing organic systems
            that turn attention into trust and trust into revenue.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4 md:justify-end text-sm font-semibold tracking-widest uppercase text-gray-500">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setPage('home')}
              className="hover:text-gray-900 text-left transition-colors">

              Home
            </button>
            <button
              onClick={() => setPage('resume')}
              className="hover:text-gray-900 text-left transition-colors">

              Resume
            </button>
            <button
              onClick={() => setPage('case-studies')}
              className="hover:text-gray-900 text-left transition-colors">

              Case Studies
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setPage('blog')}
              className="hover:text-gray-900 text-left transition-colors">

              Blog
            </button>
            <button
              onClick={() => setPage('notes')}
              className="hover:text-gray-900 text-left transition-colors">

              Notes
            </button>
            <button
              onClick={() => setPage('contact')}
              className="hover:text-gray-900 text-left transition-colors">

              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 text-center md:text-left text-xs text-gray-400 font-medium tracking-wider uppercase">
        <p>© {new Date().getFullYear()} Oliver Hurd · All rights reserved.</p>
      </div>
    </footer>);

}