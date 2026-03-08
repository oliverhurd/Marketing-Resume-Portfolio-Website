import React from 'react';

type Page = 'home' | 'resume' | 'case-studies' | 'case-study-braveheart' | 'blog' | 'notes' | 'contact';

interface BlogPageProps {
  setPage: (page: Page) => void;
}

export function BlogPage({ setPage }: BlogPageProps) {
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
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in duration-500">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-body max-w-2xl leading-relaxed">
          Thinking out loud about content, growth, and building in public.
        </p>
      </section>

      {/* Articles */}
      <section>
        <div className="border-t border-gray-divider">
          {articles.map((article, idx) => (
            <article key={idx} className="border-b border-gray-divider py-10 group cursor-pointer">
              <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {article.category}
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-navy-dark group-hover:text-navy-blue cursor-pointer transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-body text-lg leading-relaxed mb-4 max-w-3xl">
                {article.excerpt}
              </p>
              <div className="text-sm font-semibold text-gray-400 tracking-wide">
                {article.meta}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subscribe Card */}
      <section className="mt-16 mb-8">
        <div className="bg-navy-dark text-white rounded-2xl p-10 md:p-14 shadow-lg">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Stay in the loop.
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Get new articles and case studies delivered to your inbox. No
            spam, just high-signal strategy.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 max-w-xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-2 border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 flex-1 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-white text-navy-dark px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
