import React from 'react';
export function NotesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar */}
        <aside className="w-full md:w-[250px] shrink-0">
          <h1 className="text-3xl font-serif font-bold text-navy-dark mb-10">
            Notes
          </h1>

          <div className="space-y-8">
            {/* Category 1 */}
            <div>
              <div className="flex items-center text-xs font-bold text-gray-light tracking-wider uppercase mb-3">
                <span className="mr-2">📁</span> CONTENT STRATEGY
              </div>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md bg-gray-badge text-navy-dark font-medium text-sm transition-colors">
                    The Content Flywheel
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md text-gray-body hover:bg-gray-50 hover:text-navy-dark text-sm transition-colors">
                    Trust vs. Reach
                  </button>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <div className="flex items-center text-xs font-bold text-gray-light tracking-wider uppercase mb-3">
                <span className="mr-2">📁</span> PLATFORM PLAYBOOKS
              </div>
              <ul className="space-y-1">
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md text-gray-body hover:bg-gray-50 hover:text-navy-dark text-sm transition-colors">
                    Algorithm Calibration
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md text-gray-body hover:bg-gray-50 hover:text-navy-dark text-sm transition-colors">
                    YouTube Strategy
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md text-gray-body hover:bg-gray-50 hover:text-navy-dark text-sm transition-colors">
                    Twitter/X Growth
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 rounded-md text-gray-body hover:bg-gray-50 hover:text-navy-dark text-sm transition-colors">
                    Newsletter System
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 max-w-2xl">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-dark mb-4">
              The Content Flywheel
            </h1>
            <div className="text-sm text-gray-light">
              Last updated March 2024 · 12 min read
            </div>
          </header>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-body leading-relaxed mb-6">
              Most creators and brands approach content linearly: they have an
              idea, they create a post, they publish it, and then they start
              over. This is exhausting, unscalable, and ultimately leads to
              burnout.
            </p>

            <p className="text-gray-body leading-relaxed mb-10">
              The alternative is building a{' '}
              <strong className="font-semibold text-navy-dark">
                Content Flywheel
              </strong>{' '}
              — a system where one deep, high-value piece of content naturally
              fractures into dozens of smaller, platform-native assets that all
              drive traffic back to the core ecosystem.
            </p>

            <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
              The Core Asset
            </h3>

            <p className="text-gray-body leading-relaxed mb-8">
              Everything starts with the core asset. This needs to be long-form,
              high-signal, and deeply valuable. It cannot be fluff. In the
              Braveheart Trading ecosystem, this was typically a 40-minute
              YouTube deep dive or a comprehensive 3,000-word newsletter issue.
            </p>

            <blockquote className="border-l-2 border-gray-divider pl-6 italic text-gray-light text-lg my-10">
              "If your core asset isn't good enough that someone would pay for
              it, your flywheel will spin empty."
            </blockquote>

            <h3 className="text-2xl font-serif font-bold text-navy-dark mb-4 mt-12">
              Fracturing for Distribution
            </h3>

            <p className="text-gray-body leading-relaxed mb-6">
              Once the core asset is created, the system takes over. We don't
              "repurpose" by just copying and pasting. We{' '}
              <em className="italic">fracture</em> the content into native
              formats:
            </p>

            <ul className="space-y-4 text-gray-body leading-relaxed mb-10 pl-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-light rounded-full shrink-0"></span>
                <span>
                  <strong className="font-semibold text-navy-dark">
                    Twitter/X Threads:
                  </strong>{' '}
                  Extracting the core framework and rewriting it for
                  high-velocity reading.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-light rounded-full shrink-0"></span>
                <span>
                  <strong className="font-semibold text-navy-dark">
                    Short-form Video:
                  </strong>{' '}
                  Pulling the 3 most impactful 60-second clips for TikTok/Reels.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-light rounded-full shrink-0"></span>
                <span>
                  <strong className="font-semibold text-navy-dark">
                    Visual Assets:
                  </strong>{' '}
                  Turning concepts into diagrams and infographics for Instagram
                  carousels.
                </span>
              </li>
            </ul>

            <p className="text-gray-body leading-relaxed">
              Every fractured piece serves one purpose: capturing attention
              natively and directing it back to the core asset, where trust is
              actually built.
            </p>
          </div>
        </article>
      </div>
    </main>);

}