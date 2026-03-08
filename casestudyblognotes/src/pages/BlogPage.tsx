import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
interface BlogPageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function BlogPage({ currentPage, setPage }: BlogPageProps) {
  const articles = [
  {
    category: 'Growth',
    title: "Why Organic Growth Compounds (And Paid Doesn't)",
    excerpt:
    'The difference between renting attention and owning it. Why building an audience asset is the only sustainable moat in 2024.',
    meta: 'March 2024 · 8 min read'
  },
  {
    category: 'Content',
    title: 'The Content Flywheel: How One Piece Feeds Everything',
    excerpt:
    'Most creators treat content as isolated posts. The real leverage comes from systems that turn one deep-dive into a month of distribution.',
    meta: 'February 2024 · 6 min read'
  },
  {
    category: 'Community',
    title: 'Building a Community That Sells Itself',
    excerpt:
    'When your community becomes your best marketing channel, everything changes. How to engineer peer-to-peer trust and organic social proof.',
    meta: 'January 2024 · 10 min read'
  },
  {
    category: 'Strategy',
    title: 'Trust Is the Only Moat in Saturated Markets',
    excerpt:
    'In markets where everyone is selling the same thing, the only differentiator is trust. How to build credibility when audiences are skeptical.',
    meta: 'December 2023 · 7 min read'
  },
  {
    category: 'Platform',
    title: 'Algorithm Calibration: Working With Platforms, Not Against Them',
    excerpt:
    'Stop fighting the algorithm. Start understanding what it actually rewards: session time, high-signal engagement, and native value.',
    meta: 'November 2023 · 5 min read'
  }];

  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <main>
        {/* HEADER */}
        <section className="pt-36 pb-12 px-6 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#1a1a2e]">
              Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              Thinking out loud about content, growth, and building in public.
            </p>
          </FadeIn>
        </section>

        {/* ARTICLES */}
        <section className="px-6 max-w-4xl mx-auto">
          <div className="border-t-2 border-gray-200">
            {articles.map((article, idx) =>
            <FadeIn key={idx} delay={idx * 0.1}>
                <article className="border-b-2 border-gray-200 py-10 group">
                  <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    {article.category}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-[#1a1a2e] group-hover:text-blue-600 cursor-pointer transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-3xl">
                    {article.excerpt}
                  </p>
                  <div className="text-sm font-semibold text-gray-400 tracking-wide">
                    {article.meta}
                  </div>
                </article>
              </FadeIn>
            )}
          </div>
        </section>

        {/* SUBSCRIBE CARD */}
        <section className="px-6 max-w-4xl mx-auto mt-16 mb-24">
          <FadeIn>
            <div className="bg-[#1a1a2e] text-white rounded-2xl p-10 md:p-14 shadow-lg">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                Stay in the loop.
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Get new articles and case studies delivered to your inbox. No
                spam, just high-signal strategy.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-xl"
                onSubmit={(e) => e.preventDefault()}>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 flex-1 focus:outline-none focus:border-white transition-colors"
                  required />

                <button
                  type="submit"
                  className="bg-white text-[#1a1a2e] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">

                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </section>
      </main>

      <Footer setPage={setPage} />
    </div>);

}