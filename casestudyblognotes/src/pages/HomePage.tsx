import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
interface HomePageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function HomePage({ currentPage, setPage }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main>
        {/* HERO SECTION */}
        <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center md:text-left">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1a1a2e]">
              I build brands people trust.
            </h1>
            <p className="text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Content strategist and growth operator. I design organic systems
              that turn attention into trust and trust into revenue.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => setPage('case-studies')}
                className="bg-[#1a1a2e] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-black transition shadow-sm">

                View Case Studies
              </button>
              <button
                onClick={() => setPage('contact')}
                className="border-2 border-[#1a1a2e] text-[#1a1a2e] px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-50 transition">

                Get in Touch
              </button>
            </div>
          </FadeIn>
        </section>

        {/* FEATURED WORK */}
        <section className="border-t-2 border-gray-200 pt-20 pb-20 px-6 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-8">
              Featured Work
            </h2>

            <div
              onClick={() => setPage('case-study-braveheart')}
              className="border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-white group">

              <div className="text-xs text-blue-600 tracking-widest uppercase font-bold mb-4">
                Community · Organic Growth · Education
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-[#1a1a2e] group-hover:text-blue-600 transition-colors">
                Braveheart Trading
              </h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-2xl">
                Building trust in a trustless market through an organic content
                and community growth system.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border-2 border-gray-100 rounded-xl p-4 text-center bg-[#fafafa]">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                    17K+
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mt-2">
                    YouTube
                  </div>
                </div>
                <div className="border-2 border-gray-100 rounded-xl p-4 text-center bg-[#fafafa]">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                    33K+
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mt-2">
                    Twitter
                  </div>
                </div>
                <div className="border-2 border-gray-100 rounded-xl p-4 text-center bg-[#fafafa]">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                    6.5K+
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mt-2">
                    Newsletter
                  </div>
                </div>
                <div className="border-2 border-gray-100 rounded-xl p-4 text-center bg-[#fafafa]">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                    $100K+
                  </div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mt-2">
                    Revenue
                  </div>
                </div>
              </div>

              <div className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                View Case Study <span>→</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CLOSING CTA */}
        <section className="border-t-2 border-gray-200 pt-24 pb-24 px-6 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#1a1a2e]">
              Let's build something together.
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities in content strategy, brand
              building, and growth.
            </p>
            <button
              onClick={() => setPage('contact')}
              className="bg-[#1a1a2e] text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-black transition shadow-sm">

              Get in Touch
            </button>
          </FadeIn>
        </section>
      </main>

      <Footer setPage={setPage} />
    </div>);

}