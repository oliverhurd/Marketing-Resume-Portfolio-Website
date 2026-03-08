import React from 'react';
import { FadeIn } from './FadeIn';
export function CaseStudyHero() {
  return (
    <section className="pt-32 pb-16">
      <FadeIn>
        <a
          href="#"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors mb-8 font-medium">

          <span className="mr-2">←</span> All Case Studies
        </a>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Community
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            ·
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Organic Growth
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            ·
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
            Education
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#1a1a2e] mb-6 leading-tight">
          Braveheart Trading
        </h1>
        <p className="text-xl md:text-2xl font-serif italic text-gray-600 mb-8 leading-relaxed">
          Building trust in a trustless market through an organic content and
          community growth system.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-2xl mb-16">
          A content-driven trading education brand built to $100K+ revenue
          through YouTube, Twitter, newsletters, and community — with zero paid
          advertising, as a solo operator from 2022–2024.
        </p>
      </FadeIn>

      <div className="border-t border-gray-100 pt-16 mb-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Role
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Founder · Content & Growth Strategist
            </h3>
            <p className="text-gray-500 italic">
              Solo operator — every function owned and executed from day one,
              2022–2024.
            </p>
          </div>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>Brand positioning and long-term content strategy</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>
                Content ecosystem design across YouTube, Twitter, Newsletter,
                and Instagram
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>
                Organic audience growth and platform algorithm calibration
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>
                Email marketing — list growth, campaign cadence, and open rate
                optimisation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>
                Conversion funnel design and community monetisation architecture
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 mr-3 mt-0.5">—</span>
              <span>
                End-to-end service delivery, student support, and community
                management
              </span>
            </li>
          </ul>
        </FadeIn>
      </div>

      <div className="border-t border-gray-100 pt-16">
        <FadeIn>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            Executive Summary
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                17K+
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                YouTube
                <br />
                Subscribers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                33K+
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Twitter
                <br />
                Followers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                6.5K+
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Newsletter
                <br />
                Subscribers
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                $100K+
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Organic
                <br />
                Revenue
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Braveheart Trading was a trading education brand built from
              scratch in one of the internet's most saturated and distrusted
              markets. From 2022–2024, I designed and operated a content-first
              growth system that attracted cold audiences through long-form
              education, nurtured trust through a newsletter ecosystem, and
              converted engaged followers into paying members and high-ticket
              students.
            </p>
            <p>
              <span className="text-emerald-600 font-semibold">
                All growth was 100% organic.
              </span>{' '}
              No paid advertising. No influencer partnerships. Every subscriber,
              follower, and customer came through content — value delivered
              consistently, revenue earned as a result.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>);

}