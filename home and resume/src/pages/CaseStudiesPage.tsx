import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function CaseStudiesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy-dark mb-6">
          Case Studies
        </h1>
        <p className="text-xl text-gray-body leading-relaxed max-w-2xl">
          Deep dives into real projects — strategy, execution, and results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Card 1 */}
        <div className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-md transition-shadow bg-white relative overflow-hidden flex flex-col h-full">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#10b981]"></div>
          <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-4 mt-2">
            COMMUNITY · ORGANIC GROWTH
          </div>
          <h3 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            Braveheart Trading
          </h3>
          <p className="text-gray-body mb-8 leading-relaxed flex-grow">
            Building trust in a trustless market through organic content and
            community growth. $100K+ revenue, zero paid advertising.
          </p>
          <button className="inline-flex items-center text-navy-blue font-medium hover:opacity-80 transition-opacity mt-auto">
            View Case Study <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-md transition-shadow bg-white relative overflow-hidden flex flex-col h-full">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3b82f6]"></div>
          <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-4 mt-2">
            B2C E-COM · AFFILIATE MARKETING
          </div>
          <h3 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            Shopping Done Smart
          </h3>
          <p className="text-gray-body mb-8 leading-relaxed flex-grow">
            Drop-ship wholesale products B2C through social media with paid
            traffic alternative of affiliate marketing. Building scalable
            e-commerce through content-driven acquisition.
          </p>
          <button className="inline-flex items-center text-navy-blue font-medium hover:opacity-80 transition-opacity mt-auto">
            View Case Study <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card 3 (Centered Bottom) */}
      <div className="max-w-2xl mx-auto">
        <div className="border border-gray-divider rounded-xl p-8 md:p-10 hover:shadow-md transition-shadow bg-white relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#f59e0b]"></div>
          <div className="text-xs font-bold text-gray-light tracking-wider uppercase mb-4 mt-2">
            MEDIA BUYING · FB ADS
          </div>
          <h3 className="text-3xl font-serif font-bold text-navy-dark mb-4">
            Tookjai Review
          </h3>
          <p className="text-gray-body mb-8 leading-relaxed">
            AI-generated creatives and customer research-based targeted landing
            pages for Facebook media buying and paid ads management.
          </p>
          <button className="inline-flex items-center text-navy-blue font-medium hover:opacity-80 transition-opacity">
            View Case Study <ArrowRightIcon className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </main>);

}