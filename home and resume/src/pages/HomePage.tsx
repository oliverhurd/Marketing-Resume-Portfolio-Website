import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
type Page = 'home' | 'resume' | 'case-studies' | 'blog' | 'notes' | 'contact';
interface HomePageProps {
  setPage: (page: Page) => void;
}
export function HomePage({ setPage }: HomePageProps) {
  return (
    <main className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy-dark leading-tight mb-6">
          I build brands people
          <br />
          trust.
        </h1>
        <p className="text-lg text-gray-body leading-relaxed mb-10 max-w-2xl">
          Content strategist and growth operator. I design organic systems that
          turn attention into trust and trust into revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setPage('case-studies')}
            className="px-6 py-3 bg-navy-dark text-white rounded-md font-medium hover:bg-navy-dark/90 transition-colors text-sm">

            View Case Studies
          </button>
          <button
            onClick={() => setPage('contact')}
            className="px-6 py-3 bg-white text-navy-dark border border-navy-dark rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">

            Get in Touch
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-divider" />
      </div>

      {/* Featured Work Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xs font-bold text-gray-light tracking-[0.15em] uppercase mb-8">
          FEATURED WORK
        </h2>

        <div className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-sm transition-shadow">
          <div className="text-xs font-bold text-navy-blue tracking-wider uppercase mb-4">
            COMMUNITY · ORGANIC GROWTH · EDUCATION
          </div>
          <h3 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            Braveheart Trading
          </h3>
          <p className="text-gray-body mb-8 max-w-2xl leading-relaxed">
            Building trust in a trustless market through an organic content and
            community growth system.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">17K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                YOUTUBE
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">33K+</div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                TWITTER
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">
                6.5K+
              </div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                NEWSLETTER
              </div>
            </div>
            <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy-dark mb-1">
                $100K+
              </div>
              <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase">
                REVENUE
              </div>
            </div>
          </div>

          <button
            onClick={() => setPage('case-studies')}
            className="inline-flex items-center text-navy-blue font-medium hover:opacity-80 transition-opacity">

            View Case Study <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-gray-divider" />
      </div>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-6">
          Let's build something together.
        </h2>
        <p className="text-gray-body text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          I'm currently open to new opportunities in content strategy, brand
          building, and growth.
        </p>
        <button
          onClick={() => setPage('contact')}
          className="px-8 py-3 bg-navy-dark text-white rounded-md font-medium hover:bg-navy-dark/90 transition-colors">

          Get in Touch
        </button>
      </section>
    </main>);

}