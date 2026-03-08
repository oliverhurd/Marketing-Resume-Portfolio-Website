import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
interface CaseStudiesIndexPageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function CaseStudiesIndexPage({
  currentPage,
  setPage
}: CaseStudiesIndexPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main>
        {/* HEADER */}
        <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#1a1a2e]">
              Case Studies
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Deep dives into real projects — strategy, execution, and results.
            </p>
          </FadeIn>
        </section>

        {/* CARDS GRID */}
        <section className="pb-24 px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <FadeIn delay={0.1}>
              <div
                onClick={() => setPage('case-study-braveheart')}
                className="h-full border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white flex flex-col group">

                <div className="h-2 w-full bg-emerald-500"></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Community · Organic Growth
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-3 text-[#1a1a2e] group-hover:text-emerald-600 transition-colors">
                    Braveheart Trading
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                    Building trust in a trustless market through organic content
                    and community growth. $100K+ revenue, zero paid advertising.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    View Case Study <span>→</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2}>
              <div className="h-full border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white flex flex-col group">
                <div className="h-2 w-full bg-blue-500"></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                    B2C E-Com · Affiliate Marketing
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-3 text-[#1a1a2e] group-hover:text-blue-600 transition-colors">
                    Shopping Done Smart
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                    Drop-ship wholesale products B2C through social media with
                    paid traffic alternative of affiliate marketing. Building
                    scalable e-commerce through content-driven acquisition.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    View Case Study <span>→</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 - Centered / Spans Full */}
            <FadeIn delay={0.3} className="md:col-span-2 md:w-2/3 md:mx-auto">
              <div className="h-full border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white flex flex-col group">
                <div className="h-2 w-full bg-amber-500"></div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">
                    Media Buying · FB Ads
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-3 text-[#1a1a2e] group-hover:text-amber-600 transition-colors">
                    Tookjai Review
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                    AI-generated creatives and customer research-based targeted
                    landing pages for Facebook media buying and paid ads
                    management.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    View Case Study <span>→</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer setPage={setPage} />
    </div>);

}