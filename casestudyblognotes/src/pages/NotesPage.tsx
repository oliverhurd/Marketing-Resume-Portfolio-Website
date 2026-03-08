import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
interface NotesPageProps {
  currentPage: string;
  setPage: (page: string) => void;
}
export function NotesPage({ currentPage, setPage }: NotesPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a2e] selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navigation currentPage={currentPage} setPage={setPage} />

      <div className="flex flex-col md:flex-row flex-1">
        {/* SIDEBAR */}
        <aside className="w-full md:w-72 border-b-2 md:border-b-0 md:border-r-2 border-gray-200 pt-24 md:pt-36 pb-6 md:pb-12 px-6 sticky top-0 md:h-screen overflow-x-auto md:overflow-y-auto whitespace-nowrap md:whitespace-normal z-40 bg-white">
          <h1 className="font-serif text-2xl font-bold mb-8 hidden md:block text-[#1a1a2e]">
            Notes
          </h1>

          <div className="inline-block md:block mr-8 md:mr-0">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 md:mt-6">
              <span>📐</span> Content Strategy
            </div>
            <div className="md:pl-6 space-y-1 flex md:flex-col gap-2 md:gap-0">
              <button className="text-[#1a1a2e] font-semibold bg-gray-100 rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                The Content Flywheel
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-medium rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                Trust vs. Reach
              </button>
            </div>
          </div>

          <div className="inline-block md:block">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 md:mt-8">
              <span>📁</span> Platform Playbooks
            </div>
            <div className="md:pl-6 space-y-1 flex md:flex-col gap-2 md:gap-0">
              <button className="text-gray-500 hover:text-gray-900 font-medium rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                Algorithm Calibration
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-medium rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                YouTube Strategy
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-medium rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                Twitter/X Growth
              </button>
              <button className="text-gray-500 hover:text-gray-900 font-medium rounded-lg px-3 py-1.5 text-sm text-left transition-colors">
                Newsletter System
              </button>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 pt-12 md:pt-36 pb-20 px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-[#1a1a2e]">
              The Content Flywheel
            </h2>
            <div className="text-sm font-semibold text-gray-400 tracking-wide mb-10">
              Last updated March 2024 · 12 min read
            </div>

            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Most creators and brands approach content linearly: they have an
                idea, they create a post, they publish it, and then they start
                over. This is exhausting, unscalable, and ultimately leads to
                burnout.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The alternative is building a <strong>Content Flywheel</strong>{' '}
                — a system where one deep, high-value piece of content naturally
                fractures into dozens of smaller, platform-native assets that
                all drive traffic back to the core ecosystem.
              </p>

              <h3 className="font-serif text-2xl font-bold mt-12 mb-6 text-[#1a1a2e]">
                The Core Asset
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Everything starts with the core asset. This needs to be
                long-form, high-signal, and deeply valuable. It cannot be fluff.
                In the Braveheart Trading ecosystem, this was typically a
                40-minute YouTube deep dive or a comprehensive 3,000-word
                newsletter issue.
              </p>

              <blockquote className="border-l-4 border-gray-200 pl-6 italic text-gray-500 my-10 text-xl leading-relaxed font-serif">
                "If your core asset isn't good enough that someone would pay for
                it, your flywheel will spin empty."
              </blockquote>

              <h3 className="font-serif text-2xl font-bold mt-12 mb-6 text-[#1a1a2e]">
                Fracturing for Distribution
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Once the core asset is created, the system takes over. We don't
                "repurpose" by just copying and pasting. We <em>fracture</em>{' '}
                the content into native formats:
              </p>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-6 space-y-3 marker:text-gray-300">
                <li>
                  <strong>Twitter/X Threads:</strong> Extracting the core
                  framework and rewriting it for high-velocity reading.
                </li>
                <li>
                  <strong>Short-form Video:</strong> Pulling the 3 most
                  impactful 60-second clips for TikTok/Reels.
                </li>
                <li>
                  <strong>Visual Assets:</strong> Turning concepts into diagrams
                  and infographics for Instagram carousels.
                </li>
              </ul>

              <p className="text-gray-600 leading-relaxed mt-8">
                Every fractured piece serves one purpose: capturing attention
                natively and directing it back to the core asset, where trust is
                actually built.
              </p>
            </div>
          </FadeIn>
        </main>
      </div>

      <Footer setPage={setPage} />
    </div>);

}