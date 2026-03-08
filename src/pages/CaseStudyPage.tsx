import React from 'react';

type Page = 'home' | 'resume' | 'case-studies' | 'case-study-braveheart' | 'blog' | 'notes' | 'contact';

interface CaseStudyPageProps {
  setPage: (page: Page) => void;
}

export function CaseStudyPage({ setPage }: CaseStudyPageProps) {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-16 animate-in fade-in duration-500">
      {/* Back button */}
      <button 
        onClick={() => setPage('case-studies')}
        className="text-sm text-gray-light hover:text-navy-dark mb-8 transition-colors"
      >
        ← Back to Case Studies
      </button>

      {/* Hero */}
      <header className="mb-12">
        <div className="text-xs font-bold text-navy-blue tracking-wider uppercase mb-4">
          Community · Organic Growth · Education
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-6">
          Braveheart Trading
        </h1>
        <p className="text-xl text-gray-body leading-relaxed">
          Building trust in a trustless market through an organic content and
          community growth system.
        </p>
      </header>

      {/* Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy-dark">17K+</div>
          <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase mt-1">YouTube</div>
        </div>
        <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy-dark">33K+</div>
          <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase mt-1">Twitter</div>
        </div>
        <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy-dark">6.5K+</div>
          <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase mt-1">Newsletter</div>
        </div>
        <div className="bg-gray-badge border border-gray-divider rounded-lg p-4 text-center">
          <div className="text-2xl md:text-3xl font-bold text-navy-dark">$100K+</div>
          <div className="text-[10px] font-bold text-gray-light tracking-wider uppercase mt-1">Revenue</div>
        </div>
      </section>

      {/* Content */}
      <article className="prose prose-lg prose-slate max-w-none">
        <h2>The Challenge</h2>
        <p>
          In the volatile world of trading education, trust is the scarcest resource. 
          Braveheart Trading needed to build a brand that could stand out in a saturated 
          market where skepticism runs high and competitors rely heavily on paid advertising.
        </p>

        <h2>The Approach</h2>
        <p>
          We built an organic content ecosystem focused on genuine value delivery. 
          Instead of chasing quick wins with paid ads, we invested in:
        </p>
        <ul>
          <li>Long-form YouTube content that taught rather than sold</li>
          <li>Twitter/X presence focused on thought leadership</li>
          <li>A weekly newsletter with 39.6% open rates</li>
          <li>Community-driven support through Discord</li>
        </ul>

        <h2>The Results</h2>
        <p>
          Within 18 months, Braveheart Trading achieved:
        </p>
        <ul>
          <li>17,000+ YouTube subscribers from zero</li>
          <li>33,000+ Twitter followers</li>
          <li>6,500+ newsletter subscribers</li>
          <li>$100K+ in revenue with zero paid advertising</li>
        </ul>

        <h2>Key Lessons</h2>
        <p>
          The biggest insight from this project: in markets where everyone is selling, 
          the differentiator is trust. And trust is built through consistent, valuable 
          content—not advertising spend.
        </p>
      </article>

      {/* CTA */}
      <div className="mt-16 pt-12 border-t border-gray-divider">
        <h3 className="text-xl font-serif font-bold text-navy-dark mb-4">
          Want similar results?
        </h3>
        <p className="text-gray-body mb-6">
          Let's discuss how to build your organic growth system.
        </p>
        <button
          onClick={() => setPage('contact')}
          className="px-6 py-3 bg-navy-dark text-white rounded-md font-medium hover:bg-navy-dark/90 transition-colors"
        >
          Get in Touch
        </button>
      </div>
    </main>
  );
}
